import { NextResponse } from "next/server";
import { z } from "zod";
import { confirmBooking } from "@/lib/dubai-booking-confirm";
import { ensureCaptured, fetchOrder, verifyCheckoutSignature } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const verifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

/**
 * Called by the browser right after Razorpay Checkout succeeds.
 * 1. Verifies the checkout signature.
 * 2. Confirms the payment belongs to the order and is for the full amount.
 * 3. Captures the payment if it is only authorized.
 * 4. Records the booking and sends confirmation + notification emails.
 */
export async function POST(req: Request) {
  const parsed = verifySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: "Invalid payment response." }, { status: 400 });
  }
  const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } =
    parsed.data;

  if (!verifyCheckoutSignature(orderId, paymentId, signature)) {
    return NextResponse.json(
      { success: false, message: "Payment could not be verified. If money was debited, it will be refunded automatically." },
      { status: 400 },
    );
  }

  let order, payment;
  try {
    order = await fetchOrder(orderId);
    payment = await ensureCaptured(order, paymentId);
  } catch (err) {
    console.error("[dubai-summit/verify] capture failed", err);
    return NextResponse.json(
      {
        success: false,
        message: `We could not confirm your payment. Please contact us with payment ID ${paymentId}. Uncaptured payments are refunded automatically by Razorpay.`,
      },
      { status: 502 },
    );
  }

  // Payment is captured from here on: never report failure to the delegate.
  try {
    const { bookingId } = await confirmBooking(order, payment, "checkout");
    return NextResponse.json({ success: true, bookingId, paymentId, emailSent: true });
  } catch (err) {
    console.error("[dubai-summit/verify] booking record/email failed", err);
    return NextResponse.json({
      success: true,
      bookingId: order.receipt,
      paymentId,
      emailSent: false,
    });
  }
}
