"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type MouseEventHandler, type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold-outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  disabled,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-lg overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          // Variants
          "bg-gold-500 text-brown-950 hover:bg-gold-400 focus:ring-gold-500 hover:shadow-lg hover:shadow-gold-500/25":
            variant === "primary",
          "bg-brown-950 text-white hover:bg-brown-900 focus:ring-brown-800 hover:shadow-lg hover:shadow-brown-950/25":
            variant === "secondary",
          "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-brown-950 focus:ring-gold-500":
            variant === "outline",
          "text-gold-500 hover:text-gold-400 hover:bg-brown-950/50 focus:ring-gold-500":
            variant === "ghost",
          "border-2 border-gold-400 text-gold-500 hover:bg-gold-400 hover:text-brown-950 focus:ring-gold-400 bg-gold-50/10":
            variant === "gold-outline",
          // Sizes
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-base": size === "lg",
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {/* Shine effect on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </span>
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
}
