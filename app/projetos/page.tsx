import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import GlowBackground from "@/components/ui/GlowBackground";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos",
  description: `Projetos desenvolvidos por ${personalInfo.name} — aplicações web full stack.`,
};

export default function ProjetosPage() {
  return (
    <>
      <GlowBackground variant="subtle" />
      <section className="pt-32 pb-16">
        <Container>
          <SectionTitle
            label="portfólio"
            title="Projetos em destaque"
            description="Aplicações que construí do zero, combinando design e engenharia."
          />
        </Container>
      </section>
      <Projects />
    </>
  );
}
