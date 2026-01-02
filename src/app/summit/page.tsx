"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const themes = [
  {
    number: "01",
    title: "Sustainable Employment",
    description: "Frameworks for job creation in an era of AI and automation.",
  },
  {
    number: "02",
    title: "Agricultural Innovation",
    description: "Food security and agri-tech for climate resilience.",
  },
  {
    number: "03",
    title: "Women in Leadership",
    description: "Accelerating gender parity in boardrooms and policy.",
  },
];

const sdgs = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Energy",
  "Economic Growth",
  "Industry Innovation",
];

export default function SummitPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-52 pb-20 bg-brown-900">
        <Container>
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-6 font-black"
            >
              Dubai · 10 April 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
            >
              United World Summit
              <br />
              <span className="text-gold-500">2026</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mb-10"
            >
              A global gathering for innovation, sustainability, and digital
              transformation aligned with the United Nations Sustainable
              Development Goals and UAE Vision 2030.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 text-sm"
            >
              <div>
                <p className="text-gold-500 text-2xl font-bold">1,200+</p>
                <p className="text-gray-500">Delegates</p>
              </div>
              <div>
                <p className="text-gold-500 text-2xl font-bold">100+</p>
                <p className="text-gray-500">Countries</p>
              </div>
              <div>
                <p className="text-gold-500 text-2xl font-bold">19+</p>
                <p className="text-gray-500">Sectors</p>
              </div>
              <div>
                <p className="text-gold-500 text-2xl font-bold">34</p>
                <p className="text-gray-500">Round Tables</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Themes */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold-600 text-sm tracking-[0.15em] uppercase mb-4"
              >
                Agenda
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-brown-900 leading-tight"
              >
                Key Themes
              </motion.h2>
            </div>

            <div className="lg:col-span-8">
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gray-200 py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-8">
                    <span className="text-gold-500 text-sm font-mono">
                      {theme.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-brown-900 mb-2">
                        {theme.title}
                      </h3>
                      <p className="text-gray-500">{theme.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SDGs */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold-600 text-sm tracking-[0.15em] uppercase mb-4"
              >
                Global Alignment
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-brown-900 leading-tight mb-6"
              >
                Supporting UN
                <br />
                Sustainable Development Goals
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed"
              >
                Our initiatives and partnerships are designed to create
                measurable impact across critical global objectives, driving
                progress toward a more sustainable and equitable world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {sdgs.map((sdg, index) => (
                <span
                  key={sdg}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm"
                >
                  {sdg}
                </span>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* UAE Vision */}
      <section className="py-24 bg-brown-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold-500 text-sm tracking-[0.15em] uppercase mb-4"
              >
                Regional Focus
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                UAE Vision 2030
                <br />
                Alignment
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "Diversified Knowledge Economy",
                "World-Class Healthcare System",
                "First-Rate Education",
                "Sustainable Environment",
                "Competitive & Resilient Economy",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-gold-500" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-brown-900 mb-6"
            >
              Attendance is by
              <br />
              invitation only
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              Submit your interest and our team will review your application
              within 48 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors"
              >
                Request an Invitation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
