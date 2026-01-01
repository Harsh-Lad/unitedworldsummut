"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <Container>
        {/* Offset grid layout for visual tension */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Text content - spans 5 columns, offset from top */}
          <div className="lg:col-span-5 lg:pt-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 text-sm tracking-[0.15em] uppercase mb-4"
            >
              About the Summit
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-brown-950 leading-tight mb-6"
            >
              Two Decades of
              <br />
              Global Impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Founded in 2014, the United World Summit has evolved from a
              regional business forum into a premier global platform for
              cross-border collaboration. We facilitate meaningful dialogue among
              governments, Fortune 500 executives, and emerging market leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <div className="flex items-start gap-4">
                <div className="w-px h-12 bg-gold-500 mt-1" />
                <div>
                  <p className="text-brown-950 font-semibold">
                    Policy Influence
                  </p>
                  <p className="text-brown-700 text-sm">
                    Direct access to decision-makers across 100+ nations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-px h-12 bg-gold-500 mt-1" />
                <div>
                  <p className="text-brown-950 font-semibold">Deal Flow</p>
                  <p className="text-brown-700 text-sm">
                    $4.2B in partnerships facilitated since inception
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-brown-950 font-semibold hover:text-gold-600 transition-colors"
              >
                Our full story
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* Image composition - spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/gallery/1.webp"
                alt="Summit gathering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Overlapping accent image */}
            <div className="hidden lg:block absolute -bottom-12 -left-12 w-48 h-64 overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/sachin-katarnawre.jpeg"
                alt="Summit speaker"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Experience badge - positioned off-grid */}
            <div className="absolute -top-6 right-8 bg-brown-950 text-white px-6 py-4">
              <p className="text-3xl font-bold text-gold-400">20+</p>
              <p className="text-xs tracking-wide uppercase">Years</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
