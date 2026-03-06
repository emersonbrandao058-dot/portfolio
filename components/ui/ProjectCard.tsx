"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { statusLabels, statusColors } from "@/lib/utils";
import type { Project } from "@/lib/data";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "featured";
}

function ProjectImagePlaceholder({ gradient }: { gradient: string }) {
  return (
    <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-20">
          <ImageOff size={28} className="text-foreground" />
          <span className="text-xs font-mono text-foreground/70">imagem em breve</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index = 0,
  variant = "default",
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden",
        "bg-surface-elevated border border-surface-border",
        "hover:border-accent/30 transition-all duration-500",
        "hover:shadow-card-hover hover:-translate-y-1",
      )}
    >
      {/* Image header */}
      <div className="relative h-52 overflow-hidden bg-surface">
        {project.image && !imgError ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          </>
        ) : (
          <ProjectImagePlaceholder gradient={project.gradient} />
        )}

        {/* Year badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs font-mono text-foreground/50 bg-background/50 backdrop-blur-sm px-2 py-1 rounded">
            {project.year}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute bottom-4 left-4 z-10">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm",
              statusColors[project.status]
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-lg bg-accent/8 border border-accent/15 text-accent/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-surface-border/60">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group/link"
            >
              <Github size={13} />
              <span>Código</span>
              <ArrowUpRight
                size={11}
                className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all"
              />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors group/link ml-auto"
            >
              <ExternalLink size={13} />
              <span>Ver projeto</span>
              <ArrowUpRight
                size={11}
                className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

