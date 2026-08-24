"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import Container from "./Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/[0.07] bg-[#08090c]/95"
          : "border-transparent bg-[#08090c]/55"
      }`}
    >
      <Container>
        <nav className="flex h-[66px] items-center justify-between">
          <Link href="/" className="group flex items-baseline gap-2" aria-label="Página inicial">
            <span className="text-sm font-semibold tracking-[-0.02em] text-white/95">
              {personalInfo.name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/30 sm:inline">
              Full-stack developer
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-[13px] transition-colors ${
                      active ? "text-white" : "text-white/48 hover:text-white/82"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-0 -bottom-[1px] h-px bg-[#6f84ff]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/contato"
              className="text-[12px] uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
            >
              Contato ↗
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center border border-white/10 text-white/70 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/[0.07] bg-[#08090c] md:hidden"
          >
            <Container className="py-5">
              <ul className="flex flex-col">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between border-b border-white/[0.06] py-4 text-sm ${
                          active ? "text-white" : "text-white/50"
                        }`}
                      >
                        {link.label}
                        <span className="text-[#6f84ff]">↗</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
