"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "navy" | "glass";
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        {
          "bg-white": variant === "default",
          "bg-white shadow-lg hover:shadow-2xl": variant === "elevated",
          "bg-white border border-gray-200 hover:border-gold-500/50": variant === "bordered",
          "bg-navy-800 text-white": variant === "navy",
          "bg-white/10 backdrop-blur-lg border border-white/20": variant === "glass",
        },
        glow && "hover:shadow-gold-500/20 hover:shadow-xl",
        className
      )}
    >
      {/* Gradient border effect on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-gold-500/20 via-transparent to-gold-500/20" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
