"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { founderInfo } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Business Leader"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 rounded-2xl p-6 shadow-xl cursor-default"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-4xl font-bold"
              >
                {founderInfo.experience}
              </motion.div>
              <div className="text-sm font-medium">Years Experience</div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 w-24 h-24 border-2 border-dashed border-gold-500/30 rounded-full"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-600 font-medium text-sm uppercase tracking-wider"
            >
              About United World Summit
            </motion.span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-6">
              Leading Global Business{" "}
              <span className="text-gold-500">Transformation</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {founderInfo.bio}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Award, label: "Expert Leadership" },
                { icon: Users, label: "Global Network" },
                { icon: Globe, label: "Market Access" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-3 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center"
                  >
                    <feature.icon size={22} className="text-gold-500" />
                  </motion.div>
                  <span className="text-navy-900 font-medium text-sm">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="secondary" size="lg" className="group">
                Learn More About Us
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
