import { NextResponse } from "next/server";
import { confirmBooking } from "@/lib/dubai-booking-confirm";
import { ensureCaptured, fetchOrder, verifyWebhookSignature } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Razorpay webhook (Dashboard > Settings > Webhooks), subscribe to:
 *   payment.authorized, order.paid
 *
 * This is the safety net for delegates who pay but close the browser before
 * the verify call finishes: the payment still gets captured, the booking is
 * recorded and both emails go out. Duplicate deliveries are harmless because
 * the booking script de-duplicates on order id.
 */
export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";

  try {
    if (!signature || !verifyWebhookSignature(rawBody, signature)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  } catch (err) {
    console.error("[dubai-summit/webhook] not configured", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let event: {
    event: string;
    payload?: { payment?: { entity?: { id: string; order_id: string } } };
  };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const paymentEntity = event.payload?.payment?.entity;
  if (!paymentEntity?.order_id) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  try {
    const order = await fetchOrder(paymentEntity.order_id);

    // Only handle orders created by the Dubai booking flow.
    if (order.notes?.event !== "UES 2026 Dubai") {
      return NextResponse.json({ ok: true, ignored: true });
    }

    if (event.event === "payment.authorized" || event.event === "order.paid") {
      const payment = await ensureCaptured(order, paymentEntity.id);
      const result = await confirmBooking(order, payment, "webhook");
      return NextResponse.json({ ok: true, ...result });
    }

    return NextResponse.json({ ok: true, ignored: true });
  } catch (err) {
    // Non-2xx makes Razorpay retry the webhook later.
    console.error("[dubai-summit/webhook]", event.event, err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
