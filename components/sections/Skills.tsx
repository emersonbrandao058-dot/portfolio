"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Terminal,
};

const colorMap: Record<string, { card: string; icon: string; dot: string }> = {
  emerald: {
    card: "hover:border-emerald-500/30 hover:bg-emerald-500/3",
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    dot: "bg-emerald-400",
  },
  cyan: {
    card: "hover:border-cyan-500/30 hover:bg-cyan-500/3",
    icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    dot: "bg-cyan-400",
  },
  violet: {
    card: "hover:border-violet-500/30 hover:bg-violet-500/3",
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    dot: "bg-violet-400",
  },
  amber: {
    card: "hover:border-amber-500/30 hover:bg-amber-500/3",
    icon: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    dot: "bg-amber-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <Container>
        <SectionTitle
          label="habilidades"
          title="Stack técnica"
          description="Tecnologias que uso para construir produtos reais."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon] || Terminal;
            const colors = colorMap[cat.color] || colorMap.emerald;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative p-6 rounded-2xl overflow-hidden",
                  "bg-surface-elevated border border-surface-border",
                  "transition-all duration-400",
                  colors.card
                )}
              >
                {/* Subtle gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-full h-full rounded-full blur-3xl",
                      `bg-${cat.color}-500/10`
                    )}
                  />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border",
                        colors.icon
                      )}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">
                        {catIndex.toString().padStart(2, "0")}
                      </p>
                      <h3 className="text-base font-medium text-foreground">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        label={skill}
                        index={catIndex * 10 + skillIndex}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-mono text-muted-foreground/50 mt-8"
        >
          // sempre aprendendo novas tecnologias
        </motion.p>
      </Container>
    </section>
  );
}
