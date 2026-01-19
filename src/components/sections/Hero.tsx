"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-24 xl:pt-32">
      {/* Main grid layout */}
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        {/* Top bar */}
        <div className="relative px-6 md:px-12 py-8 flex max-md:flex-col items-center justify-between border-b border-brown-950/10 bg-white/95 backdrop-blur-sm overflow-hidden">
          {/* Moving background elements */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-50/30 to-transparent animate-[shimmer_6s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/60 to-transparent animate-[shimmer_4s_ease-in-out_infinite]" />

          {/* Floating subtle particles */}
          <div className="absolute top-4 left-1/4 w-1 h-1 bg-gold-400/40 rounded-full animate-[float_4s_ease-in-out_infinite]" />
          <div className="absolute top-6 right-1/3 w-1 h-1 bg-gold-500/30 rounded-full animate-[float_5s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-4 left-2/3 w-1 h-1 bg-gold-400/40 rounded-full animate-[float_4.5s_ease-in-out_infinite_2s]" />

          <div className="relative flex items-center gap-4 group">
            <div className="relative max-md:hidden">
              <div className="w-3 h-3 rounded-full bg-gold-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-gold-400/30 animate-ping" />
            </div>
            <span className="text-xs md:text-xl font-bold text-brown-950 tracking-wide uppercase group-hover:text-gold-600 transition-all duration-500 group-hover:scale-105 font-(family-name:--font-good-times)">
              April 10, 2026
            </span>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_8s_ease-in-out_infinite]" />
            <span className="relative text-xs md:text-xl font-bold text-brown-950/80 tracking-wide group-hover:text-gold-600 transition-all duration-500 group-hover:scale-105 font-(family-name:--font-good-times)">
              Emirates Palace, Abu Dhabi
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-700" />
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2">
          {/* Left - Text content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24">
            <span className="text-gold-500 text-sm font-medium tracking-[0.15em] mb-6">
              United World Summit
            </span>

            <h1 className="font-(family-name:--font-good-times) text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-brown-950 leading-[1.1] tracking-tight mb-8">
              The future is shaped
              <br />
              <span className="text-brown-950/30">by those who</span>
              <br />
              show up.
            </h1>

            <p className="text-brown-700 text-base max-w-sm mb-10 leading-relaxed">
              Join 1,200+ delegates from 100+ countries. An invitation-only
              gathering of global leaders and industry pioneers.
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
                className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-brown-950/60 hover:text-brown-950 transition-colors"
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
              <div className="bg-brown-950 p-5 max-w-xs">
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gold-400">100+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">
                      Countries
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold-400">
                      1.2k+
                    </div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">
                      Delegates
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold-400">19+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">
                      Sectors
                    </div>
                  </div>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-xs text-gold-100 leading-relaxed">
                  Shaping the future of sustainable global development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-6 md:px-12 py-6 border-t border-brown-950/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs text-brown-950/40">Featured Sectors</span>
            <div className="flex flex-wrap gap-2">
              {["Technology", "Finance", "Energy", "Healthcare"].map(
                (sector) => (
                  <span
                    key={sector}
                    className="text-xs px-3 py-1.5 bg-brown-950/5 text-brown-950/70"
                  >
                    {sector}
                  </span>
                ),
              )}
            </div>
          </div>
          <Link
            href="/sectors"
            className="text-xs text-gold-500 hover:text-gold-600 transition-colors"
          >
            View all 19 sectors →
          </Link>
        </div>
      </div>
    </section>
  );
}
