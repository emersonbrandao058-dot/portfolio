"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Code2 } from "lucide-react";
import Container from "@/components/layout/Container";
import CTAButton from "@/components/ui/CTAButton";
import SocialLinks from "@/components/ui/SocialLinks";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import { personalInfo } from "@/lib/data";

const techStack = ["React", "Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL"];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Decorative animated grid */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:flex items-center justify-end pointer-events-none">
        <div className="relative w-full h-full">
          {/* Radial fade mask */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 80% 50%, transparent 30%, hsl(220,15%,5%) 80%)",
            }}
          />
          <AnimatedGrid
            className="absolute inset-0 opacity-60"
            columns={10}
            rows={12}
          />
        </div>
      </div>

      {/* Floating code card */}
      <motion.div
        className="absolute right-[8%] top-[20%] hidden xl:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <div className="glass rounded-2xl p-4 border border-surface-border/60 shadow-card w-72">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-1">hero.tsx</span>
          </div>
          <div className="font-mono text-xs space-y-1">
            <p>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-cyan-400">dev</span>{" "}
              <span className="text-foreground/60">=</span>{" "}
              <span className="text-foreground/50">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-emerald-400">name</span>
              <span className="text-foreground/50">:</span>{" "}
              <span className="text-amber-300/80">"Emerson"</span>
              <span className="text-foreground/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-emerald-400">role</span>
              <span className="text-foreground/50">:</span>{" "}
              <span className="text-amber-300/80">"Full Stack"</span>
              <span className="text-foreground/50">,</span>
            </p>
            <p className="pl-4">
              <span className="text-emerald-400">passion</span>
              <span className="text-foreground/50">:</span>{" "}
              <span className="text-amber-300/80">"build"</span>
              <span className="text-foreground/50">,</span>
            </p>
            <p>
              <span className="text-foreground/50">{"}"}</span>
              <span className="animate-pulse text-accent">|</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <Container className="relative z-10 py-32">
        <motion.div
          style={{ y }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full glass border border-surface-border"
          >
            <Sparkles size={12} className="text-accent animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">
              Disponível para novos projetos
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              <span className="text-foreground/90">Olá, sou</span>
              <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-3 mb-5"
          >
            <Code2 size={18} className="text-accent shrink-0" />
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {personalInfo.title}{" "}
              <span className="text-foreground/70 italic font-display">
                {personalInfo.subtitle}
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Tech stack chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.05 }}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated border border-surface-border text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <CTAButton href="/projetos" size="lg" showArrow>
              Ver projetos
            </CTAButton>
            <CTAButton href="/contato" variant="secondary" size="lg">
              Falar comigo
            </CTAButton>
          </motion.div>

          {/* Social + divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center gap-5 mt-10"
          >
            <SocialLinks />
            <div className="h-8 w-px bg-surface-border" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
            >
              {personalInfo.email}
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
