"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-28 xl:pt-32 -mt-4">
      {/* Main grid layout */}
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        {/* Top bar */}
        <div className="relative px-6 md:px-12 py-6 flex max-md:flex-col max-md:gap-3 items-center justify-between bg-brown-950 overflow-hidden">
          {/* Subtle shimmer */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-400/8 to-transparent animate-[shimmer_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/40 to-transparent" />

          <div className="relative">
            <span className="font-(family-name:--font-good-times) text-sm md:text-base xl:text-lg font-bold text-white tracking-wide uppercase">
              7th August 2026
            </span>
          </div>

          <div className="relative">
            <div className="font-(family-name:--font-good-times) text-sm md:text-base xl:text-lg font-bold text-gold-300 tracking-wide">
              United Nations Economic Commission of Africa, Addis Ababa
            </div>
            <h5 className="text-right font-(family-name:--font-good-times) text-sm md:text-base xl:text-sm font-medium text-gold-300 tracking-wide">Conference Room no. 2</h5>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2">
          {/* Left - Text content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
            <span className="font-(family-name:--font-good-times) text-gold-500 text-xs font-medium tracking-[0.2em] uppercase mb-6">
              United World Summit
            </span>

            <h1 className="font-(family-name:--font-good-times) text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-brown-950 leading-[1.1] tracking-tight mb-8">
              The future is shaped
              <br />
              <span className="text-brown-800/30">by those who</span>
              <br />
              show up.
            </h1>

            <p className="text-gray-600 text-base max-w-sm mb-10 leading-relaxed">
              Join 500+ delegates from 100+ countries. An invitation-only
              gathering of global leaders and industry pioneers at the United
              Nations Economic Commission of Africa.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="font-(family-name:--font-good-times) group inline-flex items-center gap-2 bg-gold-500 text-brown-950 px-6 py-3.5 text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                Request Invitation
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/summit"
                className="font-(family-name:--font-good-times) inline-flex items-center px-6 py-3.5 text-sm font-medium text-brown-800/60 hover:text-brown-950 transition-colors"
              >
                Explore Summit
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[50vh] lg:h-auto">
            <Image
              src="/summit.jpg"
              alt="Global Summit Conference"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Image overlay card */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto">
              <div className="bg-brown-950/95 backdrop-blur-sm p-5 max-w-xs">
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="font-(family-name:--font-good-times) text-2xl font-bold text-gold-400">
                      100+
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wide">
                      Countries
                    </div>
                  </div>
                  <div>
                    <div className="font-(family-name:--font-good-times) text-2xl font-bold text-gold-400">
                      500+
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wide">
                      Delegates
                    </div>
                  </div>
                  <div>
                    <div className="font-(family-name:--font-good-times) text-2xl font-bold text-gold-400">
                      19
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wide">
                      Sectors
                    </div>
                  </div>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-xs text-gold-100/60 leading-relaxed">
                  Shaping the future of sustainable global development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-6 md:px-12 py-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-(family-name:--font-good-times) text-[10px] text-brown-800/40 uppercase tracking-widest">
              Featured Sectors
            </span>
            <div className="flex flex-wrap gap-2">
              {["Technology", "Finance", "Energy", "Healthcare"].map(
                (sector) => (
                  <span
                    key={sector}
                    className="text-xs px-3 py-1.5 bg-brown-950/5 text-brown-800/60 rounded-sm"
                  >
                    {sector}
                  </span>
                ),
              )}
            </div>
          </div>
          <Link
            href="/summit"
            className="font-(family-name:--font-good-times) text-xs text-gold-500 hover:text-gold-600 transition-colors"
          >
            View all 19 sectors
          </Link>
        </div>
      </div>
    </section>
  );
}
