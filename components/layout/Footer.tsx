import Link from "next/link";
import { Github, Linkedin, Instagram, Terminal, ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { personalInfo, navLinks } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: personalInfo.social.instagram, label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border/60 mt-24">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/30">
                <Terminal size={15} className="text-accent" />
              </div>
              <span className="font-display text-lg">
                <span>{personalInfo.firstName}</span>
                <span className="text-accent">.</span>
                <span className="text-muted-foreground text-sm font-body font-light">dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Desenvolvedor Full Stack construindo experiências digitais com código limpo e design intencional.
            </p>

            {/* Availability badge */}
            {personalInfo.availableForWork && (
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400 font-medium">Disponível para projetos</span>
              </div>
            )}
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-5">Navegação</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-5">Redes</p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-elevated border border-surface-border group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                      <Icon size={13} className="group-hover:text-accent transition-colors" />
                    </span>
                    {label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-surface-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} {personalInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Feito com <span className="text-accent">♥</span> e muito café
          </p>
        </div>
      </Container>
    </footer>
  );
}
