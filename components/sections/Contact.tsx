"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send, MessageSquare } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { personalInfo, contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Github,
  Linkedin,
};

interface ContactProps {
  expanded?: boolean;
}

export default function Contact({ expanded = false }: ContactProps) {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/4 blur-[100px] rounded-full" />
      </div>

      <Container size={expanded ? "lg" : "md"}>
        <SectionTitle
          label="contato"
          title="Vamos construir algo juntos"
          description="Estou aberto a novas oportunidades, parcerias e projetos interessantes. Me manda uma mensagem."
          align="center"
        />

        {/* Main CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-surface-elevated border border-surface-border p-8 md:p-12 text-center mb-8"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="relative z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mx-auto mb-6">
              <MessageSquare size={28} className="text-accent" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Se você tem um projeto em mente ou quer bater um papo sobre tecnologia,
              estou disponível para conversar.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton
                href={`mailto:${personalInfo.email}`}
                size="lg"
                icon={<Send size={16} />}
                external
              >
                Enviar email
              </CTAButton>
              <CTAButton
                href={personalInfo.social.linkedin}
                variant="secondary"
                size="lg"
                icon={<Linkedin size={16} />}
                external
              >
                LinkedIn
              </CTAButton>
            </div>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactInfo.map((item, i) => {
            const Icon = iconMap[item.icon] || Mail;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-2xl bg-surface-elevated border border-surface-border hover:border-accent/30 transition-all duration-300 text-left overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground font-medium truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-10 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Geralmente respondo em até 24 horas
        </motion.div>
      </Container>
    </section>
  );
}
