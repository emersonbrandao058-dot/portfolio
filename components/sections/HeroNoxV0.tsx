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
import { projects } from "@/lib/data";
import styles from "./HeroNoxV0.module.css";

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
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 28, mass: 0.25 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 28, mass: 0.25 });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]);

  // V0.1: movimentos curtos. O scroll deve conduzir, não segurar o usuário.
  const copyY = useTransform(scrollYProgress, [0, 0.72, 1], [0, -8, -28]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 1, 0.2]);

  const noxY = useTransform(scrollYProgress, [0, 0.72, 1], [0, -8, -42]);
  const noxScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.99, 0.92]);
  const noxOpacity = useTransform(scrollYProgress, [0, 0.86, 1], [1, 1, 0.45]);

  const uiY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const uiX = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const motionY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const motionX = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const devY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const devX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const systemY = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const systemX = useTransform(scrollYProgress, [0, 1], [0, 26]);

  const projectY = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, 38]);
  const projectOpacity = useTransform(scrollYProgress, [0, 0.3, 0.88, 1], [0.7, 1, 1, 0.35]);

  const auraScale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1.04, 0.94]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.72, 0.62, 0.25]);

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
                style={shouldReduceMotion ? undefined : { scale: auraScale, opacity: auraOpacity }}
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
                  <div className={styles.noxBody}>
                    <div className={styles.noxShell} />
                    <div className={styles.noxFace} />
                    <span className={`${styles.noxEye} ${styles.noxEyeLeft}`} />
                    <span className={`${styles.noxEye} ${styles.noxEyeRight}`} />
                    <div className={styles.noxTorso} />
                    <div className={styles.noxLabel}>
                      <span>NOX</span>
                      <span>V0 / proxy</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className={styles.platform} aria-hidden="true" />

              <motion.div
                className={`${styles.panel} ${styles.uiPanel}`}
                style={shouldReduceMotion ? undefined : { x: uiX, y: uiY }}
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
              >
                <div className={styles.panelHeader}>
                  <Cpu size={15} aria-hidden="true" />
                  <span>Systems</span>
                </div>
                <p className={styles.panelBody}>Dados, APIs, lógica e estrutura por trás da interface.</p>
              </motion.div>

              <motion.div
                className={styles.projectPanelOuter}
                style={shouldReduceMotion ? undefined : { y: projectY, opacity: projectOpacity }}
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
          <p className={styles.workKicker}>Selected work / 01</p>

          <h2 id="selected-work-title" className={styles.workTitle}>
            Projeto primeiro. Efeito depois.
          </h2>

          <article className={styles.workCard}>
            <div
              className={styles.workVisual}
              role="img"
              aria-label={`Prévia do projeto ${featuredProject.title}`}
            />

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
          </article>

          <div className={styles.v0Note}>
            <Workflow size={14} aria-hidden="true" />
            <span>V0: composição, profundidade, mouse e narrativa de scroll.</span>
          </div>
        </div>
      </section>
    </>
  );
}
