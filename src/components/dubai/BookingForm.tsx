"use client";

import { dubaiBookingSchema, type DubaiBookingInput, type DubaiBooking } from "@/lib/dubai-booking-schema";
import { dubaiSummit, formatINR, getArrivalDates } from "@/lib/dubai-summit";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Lock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type RazorpaySuccess = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", cb: (resp: { error?: { description?: string } }) => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

type Status = "idle" | "creating" | "checkout" | "verifying" | "success";

const CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function loadCheckout(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CHECKOUT_SRC}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve(true));
    script.addEventListener("error", () => resolve(false));
    if (!existing) {
      script.src = CHECKOUT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

const arrivalDates = getArrivalDates();

const inputClass = (hasError?: boolean) =>
  cn(
    "w-full px-0 py-3 border-b bg-transparent focus:outline-none focus:border-brown-800 transition-colors",
    hasError ? "border-red-500" : "border-gray-200",
  );

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm text-gray-600 mb-2">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    bookingId: string;
    paymentId: string;
    email: string;
    emailSent: boolean;
    amount: number;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DubaiBookingInput, unknown, DubaiBooking>({
    resolver: zodResolver(dubaiBookingSchema),
    defaultValues: { delegates: 1, arrivalDate: "", additionalDelegates: "" },
  });

  const delegates = Math.min(
    Math.max(Number(watch("delegates")) || 1, 1),
    dubaiSummit.maxDelegatesPerBooking,
  );
  const total = delegates * dubaiSummit.pricePerDelegate;
  const busy = status !== "idle";

  const onSubmit = async (data: DubaiBooking) => {
    setError(null);
    setStatus("creating");

    const loaded = await loadCheckout();
    if (!loaded || !window.Razorpay) {
      setStatus("idle");
      setError("Could not load the payment window. Please check your connection and try again.");
      return;
    }

    let order: {
      success: boolean;
      message?: string;
      keyId: string;
      orderId: string;
      amount: number;
      currency: string;
      prefill: Record<string, string>;
    };
    try {
      const res = await fetch("/api/dubai-summit/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      order = await res.json();
      if (!order.success) throw new Error(order.message);
    } catch (e) {
      setStatus("idle");
      setError(e instanceof Error && e.message ? e.message : "Could not start the payment. Please try again.");
      return;
    }

    const rzp = new window.Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: dubaiSummit.organiser,
      description: `${dubaiSummit.name}, Dubai: ${data.delegates} delegate${data.delegates > 1 ? "s" : ""}`,
      image: `${window.location.origin}/dubai/ugo-logo.png`,
      prefill: order.prefill,
      notes: { booking: "UES 2026 Dubai" },
      theme: { color: "#a01118" },
      handler: async (resp: RazorpaySuccess) => {
        setStatus("verifying");
        try {
          const res = await fetch("/api/dubai-summit/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resp),
          });
          const v = await res.json();
          if (!v.success) throw new Error(v.message);
          setResult({
            bookingId: v.bookingId,
            paymentId: v.paymentId,
            email: data.email,
            emailSent: v.emailSent,
            amount: order.amount / 100,
          });
          setStatus("success");
          document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
        } catch (e) {
          setStatus("idle");
          setError(
            e instanceof Error && e.message
              ? e.message
              : `We received your payment (${resp.razorpay_payment_id}) but could not confirm it. Please contact ${dubaiSummit.contactEmail}.`,
          );
        }
      },
      modal: {
        ondismiss: () => setStatus((s) => (s === "checkout" ? "idle" : s)),
      },
    });

    rzp.on("payment.failed", (resp) => {
      setError(resp.error?.description ?? "Payment failed. Please try again or use another payment method.");
    });

    setStatus("checkout");
    rzp.open();
  };

  if (status === "success" && result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-gold-200 p-8 md:p-12 text-center"
      >
        <CheckCircle size={52} className="mx-auto text-gold-500 mb-5" />
        <h3 className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-950 mb-3">
          Booking confirmed
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Thank you. Your place at the {dubaiSummit.name}, Dubai is confirmed.
          {result.emailSent
            ? ` A confirmation has been sent to ${result.email}.`
            : ` Your confirmation email will reach ${result.email} shortly.`}
        </p>
        <dl className="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
          {[
            { k: "Booking ID", v: result.bookingId },
            { k: "Payment ID", v: result.paymentId },
            { k: "Amount Paid", v: formatINR(result.amount) },
          ].map((row) => (
            <div key={row.k} className="bg-off-white rounded-lg p-4">
              <dt className="text-gray-500 text-xs uppercase tracking-wider mb-1">{row.k}</dt>
              <dd className="text-brown-950 font-semibold text-sm break-all">{row.v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-gray-500 text-sm mt-8">
          Our delegate desk will contact you to collect passport details and confirm your flights and hotel.
          For any query, write to{" "}
          <a href={`mailto:${dubaiSummit.contactEmail}`} className="text-brown-900 underline">
            {dubaiSummit.contactEmail}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10" noValidate>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <Field label="Full name (as per passport)" error={errors.fullName?.message}>
          <input {...register("fullName")} className={inputClass(!!errors.fullName)} placeholder="Full name" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Mobile number (with country code)" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" className={inputClass(!!errors.phone)} placeholder="+91 98765 43210" autoComplete="tel" />
        </Field>
        <Field label="Organisation" error={errors.organisation?.message}>
          <input {...register("organisation")} className={inputClass(!!errors.organisation)} placeholder="Company / Institution" autoComplete="organization" />
        </Field>
        <Field label="Designation" error={errors.designation?.message}>
          <input {...register("designation")} className={inputClass(!!errors.designation)} placeholder="e.g. Managing Director" autoComplete="organization-title" />
        </Field>
        <Field label="City of residence" error={errors.city?.message}>
          <input {...register("city")} className={inputClass(!!errors.city)} placeholder="City" autoComplete="address-level2" />
        </Field>
        <Field label="Departure city for flight (India)" error={errors.departureCity?.message}>
          <input {...register("departureCity")} className={inputClass(!!errors.departureCity)} placeholder="e.g. Mumbai" />
        </Field>
        <Field label="Preferred travel dates (2N / 3D)" error={errors.arrivalDate?.message}>
          <select {...register("arrivalDate")} className={inputClass(!!errors.arrivalDate)}>
            <option value="">Select dates</option>
            {arrivalDates.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Number of delegates" error={errors.delegates?.message}>
          <select {...register("delegates")} className={inputClass(!!errors.delegates)}>
            {Array.from({ length: dubaiSummit.maxDelegatesPerBooking }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "delegate" : "delegates"}
              </option>
            ))}
          </select>
        </Field>
        {delegates > 1 && (
          <Field
            label="Names of additional delegates (as per passport)"
            error={errors.additionalDelegates?.message}
            className="md:col-span-2"
          >
            <textarea
              {...register("additionalDelegates")}
              rows={2}
              className={cn(inputClass(!!errors.additionalDelegates), "resize-none")}
              placeholder="One name per line"
            />
          </Field>
        )}
      </div>

      {/* Price summary */}
      <div className="mt-10 rounded-xl bg-off-white border border-gold-100 p-5 md:p-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            {formatINR(dubaiSummit.pricePerDelegate)} × {delegates} {delegates === 1 ? "delegate" : "delegates"}
          </span>
          <span>{formatINR(total)}</span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gold-100">
          <span className="font-(family-name:--font-good-times) text-sm font-bold text-brown-950">Total payable</span>
          <span className="font-(family-name:--font-good-times) text-lg font-bold text-brown-950">{formatINR(total)}</span>
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
        <input type="checkbox" {...register("acceptTerms")} className="mt-1 accent-[#a01118]" />
        <span>
          I confirm the details above are correct and agree to the booking terms. Flights and hotel are confirmed by the
          United Gate One delegate desk after payment, subject to availability.
        </span>
      </label>
      {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms.message}</p>}

      {error && (
        <p className="mt-6 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <button
          type="submit"
          disabled={busy}
          className="font-(family-name:--font-good-times) inline-flex items-center justify-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-sm"
        >
          {status === "creating" && (<><Loader2 size={18} className="animate-spin" /> Preparing payment</>)}
          {status === "checkout" && (<><Loader2 size={18} className="animate-spin" /> Complete payment</>)}
          {status === "verifying" && (<><Loader2 size={18} className="animate-spin" /> Confirming booking</>)}
          {status === "idle" && (<><Lock size={16} /> Pay {formatINR(total)} &amp; Book</>)}
        </button>
        <p className="flex items-center gap-2 text-xs text-gray-500">
          <ShieldCheck size={16} className="text-gold-600" />
          Secure payment by Razorpay: UPI, cards, net banking and wallets
        </p>
      </div>
    </form>
  );
}
