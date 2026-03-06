"use client";

import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
  variant?: "default" | "subtle" | "hero";
  className?: string;
}

export default function GlowBackground({
  variant = "default",
  className,
}: GlowBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none overflow-hidden z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main glow orb — top left */}
      <div
        className={cn(
          "orb",
          variant === "hero"
            ? "w-[600px] h-[600px] -top-48 -left-32 bg-accent/8 animate-glow-pulse"
            : variant === "subtle"
            ? "w-[400px] h-[400px] -top-32 -left-24 bg-accent/5"
            : "w-[500px] h-[500px] -top-40 -left-28 bg-accent/7 animate-glow-pulse"
        )}
      />

      {/* Secondary orb — bottom right */}
      <div
        className={cn(
          "orb",
          variant === "hero"
            ? "w-[500px] h-[500px] -bottom-32 -right-32 bg-violet-500/6 animate-glow-pulse"
            : variant === "subtle"
            ? "w-[350px] h-[350px] -bottom-24 -right-24 bg-violet-500/4"
            : "w-[450px] h-[450px] -bottom-28 -right-28 bg-violet-500/5 animate-glow-pulse"
        )}
        style={{ animationDelay: "1.5s" }}
      />

      {/* Subtle center vignette */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
