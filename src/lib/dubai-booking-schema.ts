import { z } from "zod";
import { dubaiSummit, getArrivalDates } from "./dubai-summit";

const arrivalValues = getArrivalDates().map((d) => d.value);

/** Shared between the booking form (client) and the order API (server). */
export const dubaiBookingSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name as per passport").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{8,16}$/, "Please enter a valid phone number with country code"),
  organisation: z.string().trim().min(2, "Please enter your organisation").max(120),
  designation: z.string().trim().min(2, "Please enter your designation").max(80),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  departureCity: z.string().trim().min(2, "Please enter your departure city in India").max(60),
  arrivalDate: z.string().refine((v) => arrivalValues.includes(v), "Please choose your travel dates"),
  delegates: z.coerce
    .number()
    .int()
    .min(1, "At least 1 delegate")
    .max(dubaiSummit.maxDelegatesPerBooking, `Maximum ${dubaiSummit.maxDelegatesPerBooking} delegates per booking`),
  additionalDelegates: z.string().trim().max(500).optional().default(""),
  acceptTerms: z.literal(true, { message: "Please accept the booking terms to continue" }),
});

export type DubaiBookingInput = z.input<typeof dubaiBookingSchema>;
export type DubaiBooking = z.output<typeof dubaiBookingSchema>;
