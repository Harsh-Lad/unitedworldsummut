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
          src="/hero.jpg"
          alt="Global Summit Conference"
          fill
          priority
          className="object-cover scale-x-[-1] object-center brightness-75"
          sizes="100vw"
        />
      </div>

      <Container className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
          {/* Asymmetric layout - content pushed left on desktop */}
          <div className="lg:max-w-3xl">
            {/* Small eyebrow text - understated */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gold-400 text-sm tracking-[0.2em] uppercase mb-6"
            >
              Dubai · 10 April 2026
            </motion.p>

            {/* Main Headline - large, impactful, left-aligned */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,8vw,5.5rem)] font-bold text-white leading-[1.1] mb-8"
            >
              Where <span className="text-gold-400">Global</span>
              <br />
              Leaders <span className="text-gold-500">Converge</span>
            </motion.h1>

            {/* Subtext - purposeful, not filler */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold-100 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
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
                className="text-white hover:text-gold-400 transition-colors py-4 text-base border-b border-white/20 hover:border-gold-400"
              >
                Learn about Summit 2026
              </Link>
            </motion.div>
          </div>

          {/* Stats strip at bottom - horizontal, minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-12 left-0 right-0"
          >
            <Container>
              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
                <div className="flex items-baseline gap-2">
                  <span className="text-gold-400 text-2xl font-bold">100+</span>
                  <span className="text-gold-200">Countries</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gold-500 text-2xl font-bold">
                    1,200+
                  </span>
                  <span className="text-gold-200">Delegates</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-gold-400 text-2xl font-bold">19+</span>
                  <span className="text-gold-200">Industry Sectors</span>
                </div>
              </div>
            </Container>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
