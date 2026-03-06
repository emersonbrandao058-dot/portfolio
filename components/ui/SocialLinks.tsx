"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const links = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: personalInfo.social.instagram, label: "Instagram" },
];

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
  direction?: "row" | "col";
}

export default function SocialLinks({
  className,
  size = "md",
  direction = "row",
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex gap-2",
        direction === "col" && "flex-col",
        className
      )}
    >
      {links.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "group flex items-center justify-center rounded-xl",
            "bg-surface-elevated border border-surface-border",
            "text-muted-foreground hover:text-accent",
            "hover:border-accent/40 hover:bg-accent/10",
            "transition-all duration-300",
            size === "sm" ? "w-8 h-8" : "w-10 h-10"
          )}
        >
          <Icon
            size={size === "sm" ? 14 : 16}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        </motion.a>
      ))}
    </div>
  );
}
