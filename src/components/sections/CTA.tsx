"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-32 bg-navy-900">
      <Container>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-green-500 text-sm tracking-[0.15em] uppercase mb-6"
          >
            Summit 2026
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
          >
            Ready to join the
            <br />
            conversation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-10 max-w-xl"
          >
            Attendance is by invitation only. Submit your interest
            and our team will review your application within 48 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 text-navy-900 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors"
            >
              Request Invitation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/summit"
              className="inline-flex items-center text-white hover:text-green-400 transition-colors py-4 border-b border-white/20 hover:border-green-400"
            >
              Learn more about the summit
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
