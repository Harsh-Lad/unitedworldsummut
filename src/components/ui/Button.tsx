"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode, type MouseEventHandler } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
          "bg-gold-500 text-navy-900 hover:bg-gold-400 focus:ring-gold-500 hover:shadow-lg hover:shadow-gold-500/25":
            variant === "primary",
          "bg-navy-800 text-white hover:bg-navy-700 focus:ring-navy-700 hover:shadow-lg hover:shadow-navy-800/25":
            variant === "secondary",
          "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 focus:ring-gold-500":
            variant === "outline",
          "text-gold-500 hover:text-gold-400 hover:bg-navy-800/50 focus:ring-gold-500":
            variant === "ghost",
          // Sizes
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
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
