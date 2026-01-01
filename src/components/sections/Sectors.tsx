"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-brown-950 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - intro text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-400 text-sm tracking-[0.15em] uppercase mb-4"
            >
              Industries We Serve
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              <span className="text-gold-400">19+</span> Sectors,
              <br />
              <span className="text-gold-500">One Platform</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gold-100 text-lg leading-relaxed max-w-md"
            >
              Cross-industry collaboration fosters powerful synergies. Our
              curated matchmaking connects complementary businesses with
              strategic investment opportunities.
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
                className={`px-5 py-2.5 border border-brown-800 text-gold-100 text-sm transition-colors cursor-default ${
                  index % 2 === 0
                    ? "hover:border-gold-400 hover:text-gold-300"
                    : "hover:border-gold-500 hover:text-gold-400"
                }`}
              >
                {sector}
              </motion.span>
            ))}
            <span className="px-5 py-2.5 bg-gold-500 text-brown-950 text-sm font-semibold">
              +7 more
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
