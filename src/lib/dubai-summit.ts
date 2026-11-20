/**
 * United Economic Summit 2026 (Dubai) - single source of truth for event,
 * package and pricing details. Imported by both the page and the booking APIs,
 * so the amount charged on the server always matches what the page shows.
 */

export const dubaiSummit = {
  slug: "dubai-summit",
  name: "United Economic Summit 2026",
  edition: "Dubai Edition",
  theme: "Igniting Global Possibilities into Opportunities",
  organiser: "United Gate One",
  mediaPartner: "Bharat 24",
  city: "Dubai, United Arab Emirates",
  dateLabel: "30th December 2026 to 9th January 2027",
  startDate: "2026-12-01",
  endDate: "2026-12-10",
  /** Package length: 2 nights / 3 days. Last arrival day keeps the stay inside the event window. */
  stayNights: 2,
  contactEmail: "info@unitedgateone.com",

  /** Price per delegate in INR (rupees, not paise). */
  pricePerDelegate: 200000,
  currency: "INR" as const,
  /** Shown under the price. Update if GST or other taxes are added on top. */
  priceNote: "per delegate, all inclusive as listed below",
  maxDelegatesPerBooking: 5,
};

export const packageInclusions = [
  {
    title: "Return Air Ticket",
    description: "Return economy airfare from India to Dubai.",
    icon: "Plane",
  },
  {
    title: "2 Nights / 3 Days Stay",
    description: "Accommodation at a 4 or 5 star hotel in Dubai.",
    icon: "Hotel",
  },
  {
    title: "Dubai Tour & Desert Safari",
    description: "Guided Dubai city tour and an evening desert safari.",
    icon: "Compass",
  },
  {
    title: "Summit Entry",
    description: "Entry to the United Economic Summit 2026, Dubai.",
    icon: "Ticket",
  },
] as const;

export const attendance = [
  { value: "2,000", label: "Attendees (approx.)" },
  { value: "18", label: "Heads of States from India" },
  { value: "Policymakers", label: "Government & Public Service" },
  { value: "Entrepreneurs", label: "Business & Industry" },
] as const;

/** Arrival dates offered in the booking form (a 2N/3D stay must finish by the last event day). */
export function getArrivalDates(): { value: string; label: string }[] {
  const dates: { value: string; label: string }[] = [];
  const start = new Date(`${dubaiSummit.startDate}T00:00:00Z`);
  const end = new Date(`${dubaiSummit.endDate}T00:00:00Z`);
  const lastArrival = new Date(end);
  lastArrival.setUTCDate(end.getUTCDate() - dubaiSummit.stayNights);

  for (let d = new Date(start); d <= lastArrival; d.setUTCDate(d.getUTCDate() + 1)) {
    const checkout = new Date(d);
    checkout.setUTCDate(d.getUTCDate() + dubaiSummit.stayNights);
    const fmt = (x: Date) =>
      x.toLocaleDateString("en-IN", { day: "numeric", month: "short", timeZone: "UTC" });
    dates.push({
      value: d.toISOString().slice(0, 10),
      label: `${fmt(d)} to ${fmt(checkout)} 2026`,
    });
  }
  return dates;
}

export function formatINR(amountInRupees: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amountInRupees);
}
