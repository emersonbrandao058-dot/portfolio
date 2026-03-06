import type { Metadata } from "next";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import GlowBackground from "@/components/ui/GlowBackground";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça mais sobre ${personalInfo.name}, desenvolvedor full stack em formação.`,
};

export default function SobrePage() {
  return (
    <>
      <GlowBackground variant="subtle" />
      <section className="pt-32 pb-16">
        <Container>
          <SectionTitle
            label="sobre mim"
            title="Quem sou eu"
            description="Um desenvolvedor movido por curiosidade, disciplina e paixão por criar coisas que funcionam."
          />
        </Container>
      </section>
      <About expanded />
      <Skills />
    </>
  );
}
