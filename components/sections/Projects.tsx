"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import CTAButton from "@/components/ui/CTAButton";
import { projects } from "@/lib/data";

interface ProjectsProps {
  featured?: boolean;
}

export default function Projects({ featured = false }: ProjectsProps) {
  const displayedProjects = featured
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <Container>
        {!featured && (
          <div /> // title is passed from page.tsx in standalone mode
        )}

        {featured && (
          <SectionTitle
            label="portfólio"
            title="Projetos em destaque"
            description="Aplicações que construí do conceito ao deploy."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              variant={project.featured ? "featured" : "default"}
            />
          ))}
        </div>

        {featured && projects.length > displayedProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <CTAButton href="/projetos" variant="secondary" size="lg" showArrow>
              Ver todos os projetos
            </CTAButton>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
