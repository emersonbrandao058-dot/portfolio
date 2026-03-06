"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  index?: number;
  className?: string;
}

export default function SkillBadge({ label, index = 0, className }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "group relative inline-flex items-center gap-1.5 px-3 py-1.5",
        "rounded-lg text-sm font-medium font-mono",
        "bg-surface-elevated border border-surface-border",
        "text-muted-foreground hover:text-foreground",
        "hover:border-accent/40 hover:bg-accent/5",
        "transition-all duration-300 cursor-default",
        className
      )}
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
