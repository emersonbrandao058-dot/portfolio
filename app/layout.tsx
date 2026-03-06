import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — Desenvolvedor Full Stack`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "desenvolvedor full stack",
    "react",
    "next.js",
    "typescript",
    "python",
    "emerson brandão",
    "portfólio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${personalInfo.name} — Desenvolvedor Full Stack`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Desenvolvedor Full Stack`,
    description: personalInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <div className="scanline" aria-hidden="true" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
