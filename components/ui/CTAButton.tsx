"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-accent text-accent-foreground border border-accent hover:bg-accent/90 hover:shadow-glow-md active:scale-95",
  secondary:
    "bg-surface-elevated text-foreground border border-surface-border hover:border-accent/40 hover:bg-accent/5 hover:text-accent active:scale-95",
  ghost:
    "bg-transparent text-muted-foreground border border-transparent hover:text-foreground hover:border-surface-border active:scale-95",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  showArrow = false,
  external = false,
  className,
  disabled = false,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight size={14} className="shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
      )}
    </>
  );

  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block group">
        <Link href={href} className={classes} {...linkProps}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, "group")}
    >
      {content}
    </motion.button>
  );
}
