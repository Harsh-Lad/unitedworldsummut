"use client";

import { motion } from "framer-motion";
import { Briefcase, Leaf, Heart, LucideIcon, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { highlights } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Leaf,
  Heart,
};

export default function Highlights() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeader
          title="Summit Highlights"
          subtitle="Driving meaningful change through focused initiatives and global collaboration"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <motion.div
                  className="relative h-full text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold-500/10 rotate-45 group-hover:bg-gold-500/20 transition-colors" />
                  </div>

                  {/* Icon container with pulse effect */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative w-20 h-20 mx-auto rounded-2xl bg-navy-900 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-all duration-300"
                  >
                    {Icon && (
                      <Icon
                        size={32}
                        className="text-gold-500 group-hover:text-navy-900 transition-colors duration-300"
                      />
                    )}
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-gold-500/50"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-center justify-center gap-2 text-gold-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Sparkles size={16} />
                    Learn More
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
