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
import { ArrowDownRight, Braces, Layers3, Workflow } from "lucide-react";
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
  const smoothX = useSpring(pointerX, { stiffness: 190, damping: 30, mass: 0.22 });
  const smoothY = useSpring(pointerY, { stiffness: 190, damping: 30, mass: 0.22 });

  const noxRotateY = useTransform(smoothX, [-0.5, 0.5], [-2.6, 2.6]);
  const noxRotateX = useTransform(smoothY, [-0.5, 0.5], [1.8, -1.8]);
  const projectRotateY = useTransform(smoothX, [-0.5, 0.5], [1.2, -1.2]);
  const projectRotateX = useTransform(smoothY, [-0.5, 0.5], [-0.8, 0.8]);

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 1, 0.3]);

  const noxY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const noxX = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const noxScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const noxOpacity = useTransform(scrollYProgress, [0, 0.86, 1], [1, 1, 0.62]);

  const interfaceX = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const interfaceY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const engineeringX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const engineeringY = useTransform(scrollYProgress, [0, 1], [0, 14]);

  const projectY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const projectX = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const projectScale = useTransform(scrollYProgress, [0, 0.65, 1], [0.96, 1, 1.035]);
  const projectOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [0.78, 1, 0.7]);

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
        <div className={styles.sticky} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
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
                Da interface à lógica, construo produtos digitais completos com atenção à experiência,
                estrutura e movimento.
              </p>

              <div className={styles.actions}>
                <a className={styles.primary} href="#selected-work">
                  Ver projetos <ArrowDownRight size={17} aria-hidden="true" />
                </a>
                <Link className={styles.secondary} href="/contato">Contato</Link>
              </div>
            </motion.div>

            <div className={styles.stage} aria-label="Nox e áreas de atuação">
              <motion.div
                className={styles.projectWindow}
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: projectX,
                        y: projectY,
                        scale: projectScale,
                        opacity: projectOpacity,
                        rotateX: projectRotateX,
                        rotateY: projectRotateY,
                      }
                }
              >
                <div className={styles.windowBar}>
                  <span /><span /><span />
                  <strong>selected-work / 01</strong>
                </div>
                <div className={styles.projectPreview} />
                <div className={styles.projectFooter}>
                  <div>
                    <span>Em destaque</span>
                    <strong>{featuredProject.title}</strong>
                  </div>
                  <span>{featuredProject.stack.slice(0, 3).join(" · ")}</span>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.signal} ${styles.interfaceSignal}`}
                style={shouldReduceMotion ? undefined : { x: interfaceX, y: interfaceY }}
              >
                <Layers3 size={15} aria-hidden="true" />
                <div>
                  <strong>Interface</strong>
                  <span>UI · UX · Motion</span>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.signal} ${styles.engineeringSignal}`}
                style={shouldReduceMotion ? undefined : { x: engineeringX, y: engineeringY }}
              >
                <Braces size={15} aria-hidden="true" />
                <div>
                  <strong>Engineering</strong>
                  <span>Logic · APIs · Systems</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.noxOuter}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { x: noxX, y: noxY, scale: noxScale, opacity: noxOpacity }
                }
              >
                <motion.div
                  className={styles.noxInner}
                  style={shouldReduceMotion ? undefined : { rotateX: noxRotateX, rotateY: noxRotateY }}
                >
                  <div className={styles.noxGlow} aria-hidden="true" />
                  <div className={styles.noxHood}>
                    <div className={styles.noxVoid} />
                  </div>
                  <div className={styles.noxShoulders} />
                  <div className={styles.noxTorso}>
                    <div className={styles.noxPocket} />
                  </div>
                  <div className={styles.noxArmLeft} />
                  <div className={styles.noxArmRight} />
                </motion.div>
                <div className={styles.noxCaption}>NOX — digital alter ego</div>
              </motion.div>

              <div className={styles.depthLine} aria-hidden="true" />
            </div>
          </div>

          <span className={styles.scrollHint}>Scroll para explorar</span>
          <div className={styles.progress} aria-hidden="true">
            <motion.div className={styles.progressBar} style={shouldReduceMotion ? undefined : { scaleX: scrollYProgress }} />
          </div>
        </div>
      </section>

      <section id="selected-work" className={styles.selectedWork} aria-labelledby="selected-work-title">
        <div className={styles.workInner}>
          <p className={styles.workKicker}>Selected work / 01</p>
          <h2 id="selected-work-title" className={styles.workTitle}>Projeto primeiro.<br />Efeito depois.</h2>

          <article className={styles.workCard}>
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
          </article>

          <div className={styles.v0Note}>
            <Workflow size={14} aria-hidden="true" />
            <span>V0.2 — narrativa e composição em validação.</span>
          </div>
        </div>
      </section>
    </>
  );
}
