"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const themes = [
  {
    number: "01",
    title: "Sustainable Employment",
    description:
      "Addressing workforce transformation in the age of AI and automation and creating frameworks for job creation across emerging economies.",
  },
  {
    number: "02",
    title: "Agricultural Innovation",
    description:
      "Food security strategies and agri-tech solutions for climate resilience. Connecting farmers with global markets and investors.",
  },
  {
    number: "03",
    title: "Women in Leadership",
    description:
      "Accelerating gender parity in corporate boardrooms and government. Showcasing success stories and mentorship networks.",
  },
];

export default function Highlights() {
  return (
    <section className="py-28 bg-off-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left column - section intro */}
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold-500 text-sm tracking-[0.15em] uppercase mb-4"
            >
              Focus Areas
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-bold text-brown-950 leading-tight mb-6"
            >
              Summit
              <br />
              Themes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 leading-relaxed"
            >
              Each summit focuses on pressing global challenges, featuring
              dedicated tracks and working groups that deliver actionable
              outcomes.
            </motion.p>
          </div>

          {/* Right column - theme list */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border-t border-gray-200 py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-6 md:gap-10">
                    <span className="text-gold-500 text-sm font-mono">
                      {theme.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-brown-950 mb-3 group-hover:text-gold-600 transition-colors cursor-default">
                        {theme.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed max-w-xl">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
