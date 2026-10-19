import DubaiSummitContent from "@/components/dubai/DubaiSummitContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "United Economic Summit 2026, Dubai | 1 to 10 December 2026",
  description:
    "Join 2,000 policymakers, business leaders and entrepreneurs at the United Economic Summit 2026 in Dubai. Delegate package includes return airfare, 2N/3D 4 or 5 star stay, Dubai tour, desert safari and summit entry.",
  openGraph: {
    title: "United Economic Summit 2026, Dubai",
    description:
      "Igniting Global Possibilities into Opportunities. 1 to 10 December 2026, Dubai. Organised by United Gate One.",
    type: "website",
    siteName: "United World Summit",
  },
};

export default function DubaiSummitPage() {
  return <DubaiSummitContent />;
}
