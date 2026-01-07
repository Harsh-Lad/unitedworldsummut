import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const goodTimes = localFont({
  src: "./GoodTimesRg-Regular.woff2",
  display: "swap",
  variable: "--font-good-times",
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
    <html lang="en">
      <body
        className={`${inter.className} ${goodTimes.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
