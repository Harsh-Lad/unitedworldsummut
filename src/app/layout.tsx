import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "United World Summit 2026 | Global Leadership & Innovation",
  description:
    "Join 1000+ global leaders, policymakers, and innovators from 100+ countries at the United World Summit 2026. Explore sustainable development, digital transformation, and inclusive growth.",
  keywords: [
    "United World Summit",
    "UWS 2026",
    "Global Summit",
    "Business Leadership",
    "Sustainable Development",
    "Digital Transformation",
    "UAE",
    "Dubai",
  ],
  openGraph: {
    title: "United World Summit 2026",
    description:
      "A Premier Global Leadership Summit bringing together leaders from 100+ countries",
    type: "website",
    locale: "en_US",
    siteName: "United World Summit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

