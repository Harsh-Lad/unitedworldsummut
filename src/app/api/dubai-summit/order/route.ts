import { NextResponse } from "next/server";
import { dubaiBookingSchema } from "@/lib/dubai-booking-schema";
import { dubaiSummit } from "@/lib/dubai-summit";
import { createOrder, getPublicKeyId } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Razorpay notes allow max 15 keys of max 256 chars each. */
const clip = (v: string, max = 250) => (v.length > max ? v.slice(0, max) : v);

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = dubaiBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }
  const b = parsed.data;

  // Amount is always computed on the server from config, never taken from the client.
  const amountInPaise = b.delegates * dubaiSummit.pricePerDelegate * 100;
  const receipt = `UES-DXB-${Date.now().toString(36).toUpperCase()}`;

  try {
    const order = await createOrder({
      amount: amountInPaise,
      currency: dubaiSummit.currency,
      receipt,
      notes: {
        event: "UES 2026 Dubai",
        full_name: clip(b.fullName),
        email: clip(b.email),
        phone: clip(b.phone),
        organisation: clip(b.organisation),
        designation: clip(b.designation),
        city: clip(b.city),
        departure_city: clip(b.departureCity),
        arrival_date: b.arrivalDate,
        delegates: String(b.delegates),
        additional_delegates: clip(b.additionalDelegates ?? ""),
      },
    });

    return NextResponse.json({
      success: true,
      keyId: getPublicKeyId(),
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      prefill: { name: b.fullName, email: b.email, contact: b.phone },
    });
  } catch (err) {
    console.error("[dubai-summit/order]", err);
    return NextResponse.json(
      { success: false, message: "We could not start the payment right now. Please try again in a moment." },
      { status: 502 },
    );
  }
}
