import "server-only";
import { dubaiSummit } from "./dubai-summit";
import type { RazorpayOrder, RazorpayPayment } from "./razorpay";

/**
 * Records a paid booking and triggers the emails (delegate confirmation +
 * team notification) through the Google Apps Script web app.
 *
 * The script de-duplicates on the Razorpay order id, so this is safe to call
 * from both the browser verify step and the Razorpay webhook: whichever
 * arrives first records the booking and sends the emails, the other one just
 * gets the existing booking id back.
 */
export async function confirmBooking(
  order: RazorpayOrder,
  payment: RazorpayPayment,
  source: "checkout" | "webhook",
): Promise<{ bookingId: string; duplicate: boolean }> {
  const url = process.env.BOOKING_SCRIPT_URL;
  const secret = process.env.BOOKING_SCRIPT_SECRET;
  if (!url || !secret) {
    throw new Error("Booking emails are not configured: set BOOKING_SCRIPT_URL and BOOKING_SCRIPT_SECRET");
  }

  const n = order.notes ?? {};
  const payload = {
    type: "dubai_booking",
    secret,
    source,
    booking: {
      orderId: order.id,
      paymentId: payment.id,
      receipt: order.receipt,
      amount: order.amount / 100,
      currency: order.currency,
      method: payment.method,
      paidAt: new Date(payment.created_at * 1000).toISOString(),
      fullName: n.full_name ?? "",
      email: n.email || payment.email || "",
      phone: n.phone || payment.contact || "",
      organisation: n.organisation ?? "",
      designation: n.designation ?? "",
      city: n.city ?? "",
      departureCity: n.departure_city ?? "",
      arrivalDate: n.arrival_date ?? "",
      delegates: Number(n.delegates ?? 1),
      additionalDelegates: n.additional_delegates ?? "",
      event: `${dubaiSummit.name} (${dubaiSummit.edition})`,
      eventDates: dubaiSummit.dateLabel,
      eventCity: dubaiSummit.city,
    },
  };

  const res = await fetch(url, {
    method: "POST",
    // text/plain keeps Apps Script happy and avoids a preflight-style rejection.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    redirect: "follow",
    cache: "no-store",
  });

  const text = await res.text();
  let data: { success?: boolean; message?: string; bookingId?: string; duplicate?: boolean };
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Booking script returned a non-JSON response (${res.status}): ${text.slice(0, 200)}`);
  }
  if (!data.success || !data.bookingId) {
    throw new Error(`Booking script error: ${data.message ?? "unknown"}`);
  }
  return { bookingId: data.bookingId, duplicate: Boolean(data.duplicate) };
}
