import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "dark" | "outline" | "gold-alt";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-gold-500 text-brown-950": variant === "gold",
          "bg-brown-950 text-white": variant === "dark",
          "border border-gold-500 text-gold-600": variant === "outline",
          "bg-gold-400 text-brown-950": variant === "gold-alt",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
