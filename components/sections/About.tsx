"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Heart, MapPin, Calendar, Coffee } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { personalInfo, aboutText, aboutHighlights } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Zap,
  Heart,
};

interface AboutProps {
  expanded?: boolean;
}

export default function About({ expanded = false }: AboutProps) {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <Container>
        {!expanded && (
          <SectionTitle
            label="sobre"
            title="Quem está por trás do código"
            description="Uma combinação de técnica, criatividade e foco em entregar o que importa."
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              {aboutText.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { icon: MapPin, label: personalInfo.location },
                { icon: Calendar, label: "Sempre aprendendo" },
                { icon: Coffee, label: "Café ++ Code" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon size={14} className="text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <CTAButton href="/sobre" variant="secondary" showArrow>
                Saiba mais sobre mim
              </CTAButton>
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {aboutHighlights.map((item, i) => {
              const Icon = iconMap[item.icon] || Code2;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={cn(
                    "relative group p-6 rounded-2xl overflow-hidden",
                    "bg-surface-elevated border border-surface-border",
                    "hover:border-accent/30 transition-all duration-400 cursor-default",
                    i === 0 && "col-span-2 sm:col-span-1"
                  )}
                >
                  {/* Gradient bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 mb-4">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <p className="text-3xl font-display text-foreground mb-1">
                      {item.value}
                    </p>
                    <p className="text-sm font-medium text-foreground/70 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="col-span-2 relative group p-5 rounded-2xl overflow-hidden bg-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Disponível para projetos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Aberto a freelance e oportunidades CLT
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
