import "server-only";
import crypto from "node:crypto";

/**
 * Minimal Razorpay REST client (no SDK dependency).
 * Docs: https://razorpay.com/docs/api/
 */

const API = "https://api.razorpay.com/v1";

function credentials() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    throw new Error("Razorpay is not configured: set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET");
  }
  return { keyId, keySecret };
}

export function getPublicKeyId(): string {
  return credentials().keyId;
}

async function razorpay<T>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const { keyId, keySecret } = credentials();
  const res = await fetch(`${API}${path}`, {
    method: init.method ?? "GET",
    headers: {
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      "Content-Type": "application/json",
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const description = data?.error?.description ?? res.statusText;
    throw new Error(`Razorpay ${init.method ?? "GET"} ${path} failed (${res.status}): ${description}`);
  }
  return data as T;
}

export type RazorpayOrder = {
  id: string;
  amount: number; // paise
  amount_paid: number;
  currency: string;
  receipt: string;
  status: "created" | "attempted" | "paid";
  notes: Record<string, string>;
  created_at: number;
};

export type RazorpayPayment = {
  id: string;
  order_id: string;
  amount: number; // paise
  currency: string;
  status: "created" | "authorized" | "captured" | "refunded" | "failed";
  method: string;
  email: string;
  contact: string;
  captured: boolean;
  created_at: number;
};

export function createOrder(params: {
  amount: number; // paise
  currency: string;
  receipt: string;
  notes: Record<string, string>;
}) {
  return razorpay<RazorpayOrder>("/orders", { method: "POST", body: params });
}

export const fetchOrder = (orderId: string) =>
  razorpay<RazorpayOrder>(`/orders/${encodeURIComponent(orderId)}`);

export const fetchPayment = (paymentId: string) =>
  razorpay<RazorpayPayment>(`/payments/${encodeURIComponent(paymentId)}`);

export const capturePayment = (paymentId: string, amount: number, currency: string) =>
  razorpay<RazorpayPayment>(`/payments/${encodeURIComponent(paymentId)}/capture`, {
    method: "POST",
    body: { amount, currency },
  });

function safeEqualHex(expected: string, received: string): boolean {
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(received, "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** Checkout handler signature: HMAC_SHA256(order_id + "|" + payment_id, key_secret). */
export function verifyCheckoutSignature(orderId: string, paymentId: string, signature: string): boolean {
  const { keySecret } = credentials();
  const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  return safeEqualHex(expected, signature);
}

/** Webhook signature: HMAC_SHA256(raw_body, webhook_secret). */
export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) throw new Error("RAZORPAY_WEBHOOK_SECRET is not set");
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  return safeEqualHex(expected, signature);
}

/**
 * Makes sure a payment for this order ends up captured, and that it is for the
 * full order amount. Captures an "authorized" payment if the account is not on
 * auto-capture. Throws if the payment cannot be trusted.
 */
export async function ensureCaptured(order: RazorpayOrder, paymentId: string): Promise<RazorpayPayment> {
  let payment = await fetchPayment(paymentId);

  if (payment.order_id !== order.id) throw new Error("Payment does not belong to this order");
  if (payment.amount !== order.amount || payment.currency !== order.currency) {
    throw new Error("Payment amount does not match the order");
  }

  if (payment.status === "authorized") {
    try {
      payment = await capturePayment(payment.id, payment.amount, payment.currency);
    } catch (err) {
      // A parallel request (webhook vs browser) may have captured it first.
      payment = await fetchPayment(paymentId);
      if (payment.status !== "captured") throw err;
    }
  }

  if (payment.status !== "captured") {
    throw new Error(`Payment is ${payment.status}, not captured`);
  }
  return payment;
}
