"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const sectors = [
  "Oil & Gas",
  "Mining & Minerals",
  "Banking & Finance",
  "International Trade",
  "Infrastructure",
  "Logistics & Supply Chain",
  "Healthcare",
  "Technology",
  "Real Estate",
  "Tourism & Hospitality",
  "Agriculture",
  "Renewable Energy",
];

export default function Sectors() {
  return (
    <section className="py-24 bg-navy-900 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - intro text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 text-sm tracking-[0.15em] uppercase mb-4"
            >
              Industries We Serve
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              19 Sectors,
              <br />
              <span className="text-gold-500">One Platform</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Cross-industry collaboration creates unexpected synergies.
              Our curated matchmaking connects complementary businesses
              and investment opportunities.
            </motion.p>
          </div>

          {/* Right side - sector tags in organic layout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {sectors.map((sector, index) => (
              <motion.span
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className="px-5 py-2.5 border border-gray-700 text-gray-300 text-sm hover:border-gold-500 hover:text-gold-400 transition-colors cursor-default"
              >
                {sector}
              </motion.span>
            ))}
            <span className="px-5 py-2.5 bg-gold-500 text-navy-900 text-sm font-semibold">
              +7 more
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
