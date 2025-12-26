"use client";

import { motion, type Variants } from "framer-motion";
import {
  Fuel,
  Mountain,
  Landmark,
  Globe,
  MapPin,
  Package,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { sectors } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Fuel,
  Mountain,
  Landmark,
  Globe,
  MapPin,
  Package,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Sectors() {
  return (
    <section className="py-24 bg-gradient-navy overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-gold-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-gold-500/5 rounded-full"
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Sectors in Focus"
          subtitle="Connecting leaders across diverse industries to forge new opportunities"
          light
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {sectors.map((sector, index) => {
            const Icon = iconMap[sector.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-navy-800 rounded-2xl p-6 text-center h-full border border-navy-700 hover:border-gold-500 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-linear-to-t from-gold-500/20 via-transparent to-transparent" />
                  </div>

                  {/* Shine sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent" />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-14 h-14 mx-auto rounded-xl bg-navy-700 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300"
                  >
                    {Icon && (
                      <Icon
                        size={26}
                        className="text-gold-500 group-hover:text-navy-900 transition-colors duration-300"
                      />
                    )}
                  </motion.div>
                  <h3 className="relative text-sm font-medium text-white group-hover:text-gold-300 transition-colors">
                    {sector.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
