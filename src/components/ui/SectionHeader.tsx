import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2
        className={cn(
          "text-lg md:text-xl lg:text-2xl font-bold mb-4",
          light ? "text-white" : "text-brown-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base max-w-3xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
