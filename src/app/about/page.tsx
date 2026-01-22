"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero - minimal */}
      <section className="pt-52 pb-16 bg-brown-900">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold-500 text-sm tracking-[0.2em] mb-6 font-black"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-(family-name:--font-good-times) text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
            >
              Building bridges
              <br />
              across borders
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold-600 text-sm tracking-[0.15em] mb-4"
              >
                Our Story
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-900 leading-tight mb-6"
              >
                The Inaugural
                <br />
                Global Summit
              </motion.h2>
            </div>
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed"
              >
                <p>
                  The United World Summit 2026 marks the inaugural gathering of
                  global leaders, entrepreneurs, and innovators in Abu Dhabi.
                  This landmark event represents a bold new platform for
                  cross-border collaboration and sustainable development.
                </p>
                <p>
                  We are bringing together heads of state, Fortune 500
                  executives, and emerging market leaders from over 100
                  countries to forge meaningful partnerships and shape policy
                  decisions affecting millions worldwide.
                </p>
                <p>
                  Our founding principle is clear: meaningful dialogue between
                  diverse stakeholders is the catalyst for sustainable global
                  development aligned with the UN Sustainable Development Goals.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-off-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/5 relative overflow-hidden">
                <Image
                  src="/mr-sachin-katarnawre.jpeg"
                  alt="Mr. Sachin Katarnawre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-brown-900 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6">
                <p className="font-(family-name:--font-good-times) text-xl md:text-2xl font-bold text-gold-500">
                  20+
                </p>
                <p className="text-xs sm:text-sm text-gray-100">
                  Years in Business
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              <p className="text-gold-600 text-sm tracking-[0.15em] mb-4">
                Founder & Chairman
              </p>
              <h2 className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-900 mb-6">
                Mr. Sachin Katarnawre
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  A veteran entrepreneur and internationally celebrated business
                  strategist with over two decades of experience in government
                  relations and global trade facilitation.
                </p>
                <p>
                  Mr. Katarnawre has advised Fortune 500 companies and sovereign
                  governments on market entry strategies across Asia, Africa,
                  and the Middle East. His work has earned recognition from
                  multiple heads of state and international business
                  organizations.
                </p>
              </div>
              <div className="space-y-3 border-l-2 border-gold-500 pl-6">
                <p className="font-(family-name:--font-good-times) text-brown-900 font-medium">
                  Strategic Advisory Services
                </p>
                <p className="font-(family-name:--font-good-times) text-brown-900 font-medium">
                  Government Relations
                </p>
                <p className="font-(family-name:--font-good-times) text-brown-900 font-medium">
                  International Trade Facilitation
                </p>
                <p className="font-(family-name:--font-good-times) text-brown-900 font-medium">
                  Cross-Border Investment
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brown-900">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-500 text-sm tracking-[0.15em] mb-4">
                Mission
              </p>
              <h3 className="font-(family-name:--font-good-times) text-base md:text-lg font-bold text-white mb-4">
                Creating platforms for change
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To create a dynamic platform that brings together global
                leaders, entrepreneurs, and innovators to foster sustainable
                economic growth, drive digital transformation, and promote
                inclusive development across nations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-gold-500 text-sm tracking-[0.15em] mb-4">
                Vision
              </p>
              <h3 className="font-(family-name:--font-good-times) text-base md:text-lg font-bold text-white mb-4">
                Shaping the future of global commerce
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To become the world&apos;s most influential business summit,
                recognized for catalyzing meaningful partnerships, driving
                innovation, and shaping the future of global commerce in
                alignment with the UN Sustainable Development Goals.
              </p>
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
              className="font-(family-name:--font-good-times) text-lg md:text-xl font-bold text-brown-900 mb-6"
            >
              Ready to be part of
              <br />
              the conversation?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="font-(family-name:--font-good-times) group inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors"
              >
                Get in touch
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
