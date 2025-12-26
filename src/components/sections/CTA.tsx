"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full filter blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Ready to Shape the Future of Global Business?
          </h2>
          <p className="text-lg text-navy-800/80 mb-10 max-w-2xl mx-auto">
            Join world leaders, innovators, and industry pioneers at the United
            World Summit 2026. Be part of the conversation that drives global
            change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="group bg-navy-900 hover:bg-navy-800"
              >
                Register Your Interest
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <Link href="/summit">
              <Button
                variant="ghost"
                size="lg"
                className="text-navy-900 hover:bg-navy-900/10"
              >
                Explore Summit Details
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
