"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  overlay?: boolean;
  overlayText?: string;
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  overlay = false,
  overlayText,
}: PlaceholderImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-navy-800", className)}>
      {/* Loading skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute inset-0 bg-linear-to-r from-navy-800 via-navy-700 to-navy-800"
        />
      )}

      {/* Shimmer effect */}
      {isLoading && (
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      )}

      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-all duration-700",
            isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
          <span className="text-gray-500 text-sm">{alt}</span>
        </div>
      )}

      {/* Hover overlay */}
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-navy-900/60 flex items-center justify-center transition-opacity"
        >
          {overlayText && (
            <span className="text-white font-medium text-sm">{overlayText}</span>
          )}
        </motion.div>
      )}
    </div>
  );
}
