"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <div className="h-px w-6 bg-accent" />
        <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">
          {label}
        </span>
        <div className="h-px w-6 bg-accent" />
      </div>
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl text-foreground/95 leading-tight mb-4",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
