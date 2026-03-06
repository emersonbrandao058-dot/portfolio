import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import GlowBackground from "@/components/ui/GlowBackground";

export default function HomePage() {
  return (
    <>
      <GlowBackground />
      <Hero />
      <About />
      <Skills />
      <Projects featured />
      <Contact />
    </>
  );
}
