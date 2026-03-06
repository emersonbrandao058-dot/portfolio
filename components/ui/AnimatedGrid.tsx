"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
  columns?: number;
  rows?: number;
}

export default function AnimatedGrid({
  className,
  columns = 8,
  rows = 6,
}: AnimatedGridProps) {
  const cells = Array.from({ length: columns * rows }, (_, i) => i);

  return (
    <div
      className={cn(
        "grid gap-px pointer-events-none select-none",
        className
      )}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      aria-hidden="true"
    >
      {cells.map((i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-sm bg-accent/5 border border-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 6,
            repeat: Infinity,
            repeatDelay: Math.random() * 8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
