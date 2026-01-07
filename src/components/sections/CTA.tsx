"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-brown-950">
      <Container>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-400 text-sm tracking-[0.15em] mb-6"
          >
            Summit 2026
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-(family-name:--font-good-times) text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-6"
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
            className="text-gold-100 text-sm md:text-base mb-8 max-w-xl"
          >
            Attendance is by invitation only. Submit your interest and our team
            will review your application within 48 hours.
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
              className="font-(family-name:--font-good-times) group inline-flex items-center gap-3 bg-gold-500 text-brown-950 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors"
            >
              Request Invitation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/summit"
              className="inline-flex items-center text-white hover:text-gold-400 transition-colors py-4 border-b border-white/20 hover:border-gold-400"
            >
              Learn more about the summit
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
