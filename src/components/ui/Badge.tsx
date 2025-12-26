import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "gold" | "navy" | "outline";
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
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        {
          "bg-gold-500 text-navy-900": variant === "gold",
          "bg-navy-800 text-white": variant === "navy",
          "border border-gold-500 text-gold-500": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
