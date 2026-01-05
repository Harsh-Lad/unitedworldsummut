"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image - subtle, not overwhelming */}
      <div className="absolute inset-0">
        <Image
          src="/summit.jpg"
          alt="Global Summit Conference"
          fill
          priority
          className="object-cover object-center max-md:brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-black/70 md:from-black/50 via-black/30 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="min-h-screen flex flex-col justify-between pb-6 sm:pb-8 py-20">
          {/* Content section */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Asymmetric layout - content pushed left on desktop */}
            <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
              {/* Small eyebrow text - understated */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-gold-400 text-xs md:text-sm tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase mb-6"
              >
                Emirates Palace, Abu Dhabi · 10th April 2026
              </motion.p>

              {/* Main Headline - large, impactful, left-aligned */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8"
              >
                Where{" "}
                <span className="text-gold-400 font-semibold">Global</span>
                <br />
                Leaders <span className="text-gold-500">Converge</span>
              </motion.h1>

              {/* Subtext - purposeful, not filler */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white font-semibold text-xs sm:text-sm md:text-base max-w-xl mb-4 md:mb-8 leading-relaxed"
              >
                The United World Summit brings together heads of state, industry
                pioneers, and changemakers to shape the future of sustainable
                global development.
              </motion.p>

              {/* CTA - single, clear action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 text-base font-semibold hover:bg-gold-400 transition-colors"
                >
                  Request an Invitation
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/summit"
                  className="text-white transition-colors py-4 text-base border-b border-white/20 hover:border-gold-400"
                >
                  Learn about Summit 2026
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Stats strip at bottom - no absolute positioning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-md">
                <span className="text-gold-400 text-base md:text-lg font-bold">
                  100+
                </span>
                <span className="text-gold-400 text-xs sm:text-base font-semibold">
                  Countries
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-md">
                <span className="text-gold-500 text-base md:text-lg font-bold">
                  1,200+
                </span>
                <span className="text-gold-400 text-xs sm:text-base font-semibold">
                  Delegates
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-md">
                <span className="text-gold-400 text-base md:text-lg font-bold">
                  19+
                </span>
                <span className="text-gold-400 text-xs sm:text-base font-semibold">
                  Sectors
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
