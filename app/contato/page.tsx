import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import GlowBackground from "@/components/ui/GlowBackground";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com ${personalInfo.name}.`,
};

export default function ContatoPage() {
  return (
    <>
      <GlowBackground variant="subtle" />
      <Contact expanded />
    </>
  );
}
