"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  Braces,
  Cpu,
  Layers3,
  Move3D,
  Sparkles,
  Workflow,
} from "lucide-react";
import { personalInfo, projects } from "@/lib/data";
import styles from "./HeroNoxV0.module.css";

const panelTransition = { type: "spring", stiffness: 140, damping: 20 } as const;

export default function HeroNoxV0() {
  const sceneRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.4 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const copyY = useTransform(scrollYProgress, [0, 0.58, 0.88], [0, -32, -110]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0]);

  const noxY = useTransform(scrollYProgress, [0, 0.68, 1], [0, -28, -170]);
  const noxScale = useTransform(scrollYProgress, [0, 0.62, 1], [1, 1.03, 0.78]);
  const noxOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);

  const uiY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const uiX = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const motionY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const motionX = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const devY = useTransform(scrollYProgress, [0, 1], [0, 115]);
  const devX = useTransform(scrollYProgress, [0, 1], [0, -82]);
  const systemY = useTransform(scrollYProgress, [0, 1], [0, 142]);
  const systemX = useTransform(scrollYProgress, [0, 1], [0, 92]);
  const projectY = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const projectOpacity = useTransform(scrollYProgress, [0.08, 0.78, 1], [0.45, 1, 0]);

  const auraScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1.14, 0.72]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [0.9, 0.65, 0]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <>
      <section ref={sceneRef} className={styles.scene} aria-labelledby="hero-v0-title">
        <div
          className={styles.sticky}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className={styles.viewport}>
            <motion.div
              className={styles.copy}
              style={shouldReduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
            >
              <p className={styles.eyebrow}>Emerson Brandão · Brasil · 2026</p>

              <h1 id="hero-v0-title" className={styles.title}>
                Full-stack
                <span className={styles.titleAccent}>developer</span>
              </h1>

              <p className={styles.description}>
                Código, interface e movimento no mesmo sistema. Construo produtos digitais com
                intenção visual, estrutura sólida e atenção à experiência real de quem usa.
              </p>

              <div className={styles.actions}>
                <a className={styles.primary} href="#selected-work">
                  Ver projetos
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <Link className={styles.secondary} href="/contato">
                  Falar comigo
                </Link>
              </div>
            </motion.div>

            <div className={styles.stage} aria-label="Mapa visual das áreas de atuação">
              <motion.div
                className={styles.aura}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { scale: auraScale, opacity: auraOpacity }
                }
                aria-hidden="true"
              />

              <motion.div
                className={styles.noxOuter}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: noxY, scale: noxScale, opacity: noxOpacity }
                }
              >
                <motion.div
                  className={styles.noxInner}
                  style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
                >
                  <div className="absolute inset-[6%] overflow-hidden rounded-[44%_44%_38%_38%] border border-white/15 bg-[radial-gradient(circle_at_50%_20%,rgba(139,124,255,.42),transparent_24%),radial-gradient(circle_at_50%_45%,rgba(65,105,255,.30),transparent_36%),linear-gradient(160deg,rgba(30,33,48,.92),rgba(7,9,15,.96))] shadow-[0_30px_90px_rgba(0,0,0,.5)]">
                    <div className="absolute inset-[8%] rounded-[42%_42%_36%_36%] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,.08),rgba(255,255,255,.01))]" />
                    <div className="absolute left-1/2 top-[22%] h-[20%] w-[42%] -translate-x-1/2 rounded-[45%_45%_38%_38%] border border-indigo-300/25 bg-black/35 shadow-[0_0_35px_rgba(86,112,255,.2)]" />
                    <div className="absolute left-[34%] top-[31%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_14px_rgba(129,140,248,.95)]" />
                    <div className="absolute right-[34%] top-[31%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_14px_rgba(129,140,248,.95)]" />
                    <div className="absolute left-1/2 top-[50%] h-[31%] w-[52%] -translate-x-1/2 rounded-[44%_44%_28%_28%] border border-white/10 bg-[linear-gradient(180deg,rgba(65,105,255,.14),rgba(255,255,255,.015))]" />
                    <div className="absolute inset-x-[18%] bottom-[7%] flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[.24em] text-white/45">
                      <span>NOX</span>
                      <span>V0 / proxy</span>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-[4%] rounded-[46%_46%_40%_40%] border border-indigo-400/20"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 0 rgba(99,102,241,0)",
                              "0 0 42px rgba(99,102,241,.18)",
                              "0 0 0 rgba(99,102,241,0)",
                            ],
                          }
                    }
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              <div className={styles.platform} aria-hidden="true" />

              <motion.div
                className={`${styles.panel} ${styles.uiPanel}`}
                style={shouldReduceMotion ? undefined : { x: uiX, y: uiY }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={panelTransition}
              >
                <div className={styles.panelHeader}>
                  <Layers3 size={15} aria-hidden="true" />
                  <span>UI / UX</span>
                </div>
                <p className={styles.panelBody}>Hierarquia, interface, fluxo e intenção visual.</p>
              </motion.div>

              <motion.div
                className={`${styles.panel} ${styles.motionPanel}`}
                style={shouldReduceMotion ? undefined : { x: motionX, y: motionY }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={panelTransition}
              >
                <div className={styles.panelHeader}>
                  <Move3D size={15} aria-hidden="true" />
                  <span>Motion</span>
                </div>
                <p className={styles.panelBody}>Scroll, microinterações e narrativa em movimento.</p>
              </motion.div>

              <motion.div
                className={`${styles.panel} ${styles.devPanel}`}
                style={shouldReduceMotion ? undefined : { x: devX, y: devY }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={panelTransition}
              >
                <div className={styles.panelHeader}>
                  <Braces size={15} aria-hidden="true" />
                  <span>Development</span>
                </div>
                <p className={styles.panelBody}>React, Next.js, TypeScript e integrações web.</p>
              </motion.div>

              <motion.div
                className={`${styles.panel} ${styles.systemPanel}`}
                style={shouldReduceMotion ? undefined : { x: systemX, y: systemY }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={panelTransition}
              >
                <div className={styles.panelHeader}>
                  <Cpu size={15} aria-hidden="true" />
                  <span>Systems</span>
                </div>
                <p className={styles.panelBody}>Dados, APIs, lógica e estrutura por trás da interface.</p>
              </motion.div>

              <motion.div
                className={styles.projectPanelOuter}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: projectY, opacity: projectOpacity }
                }
              >
                <div className={styles.projectPanel}>
                  <div className={styles.projectPreview}>
                    <div className={styles.projectMeta}>
                      <div>
                        <strong>{featuredProject.title}</strong>
                        <span>{featuredProject.stack.slice(0, 3).join(" · ")}</span>
                      </div>
                      <Sparkles size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <span className={styles.scrollHint}>Scroll para explorar</span>
          <div className={styles.progress} aria-hidden="true">
            <motion.div
              className={styles.progressBar}
              style={shouldReduceMotion ? undefined : { scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </section>

      <section id="selected-work" className={styles.selectedWork} aria-labelledby="selected-work-title">
        <div className={styles.workInner}>
          <motion.p
            className={styles.workKicker}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Selected work / 01
          </motion.p>

          <motion.h2
            id="selected-work-title"
            className={styles.workTitle}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 26 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Projeto primeiro. Efeito depois.
          </motion.h2>

          <motion.article
            className={styles.workCard}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 34, scale: 0.985 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.workVisual} role="img" aria-label={`Prévia do projeto ${featuredProject.title}`} />

            <div className={styles.workCopy}>
              <span className={styles.workIndex}>01 / {featuredProject.year}</span>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.longDescription}</p>
              <a
                href={featuredProject.live ?? featuredProject.github ?? "/projetos"}
                target={featuredProject.live || featuredProject.github ? "_blank" : undefined}
                rel={featuredProject.live || featuredProject.github ? "noreferrer" : undefined}
              >
                Abrir projeto ↗
              </a>
            </div>
          </motion.article>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono text-white/35">
            <Workflow size={14} aria-hidden="true" />
            <span>V0: composição, profundidade, mouse e narrativa de scroll.</span>
            <span aria-hidden="true">/</span>
            <span>3D definitivo entra depois da validação visual.</span>
          </div>
        </div>
      </section>
    </>
  );
}
