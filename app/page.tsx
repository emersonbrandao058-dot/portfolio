import HeroNoxV0 from "@/components/sections/HeroNoxV0";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroNoxV0 />
      <About />
      <Skills />
      <Projects featured />
      <Contact />
    </>
  );
}
