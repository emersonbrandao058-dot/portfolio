export const personalInfo = {
  name: "Emerson Brandão",
  firstName: "Emerson",
  lastName: "Brandão",
  title: "Desenvolvedor Full Stack",
  subtitle: "em formação",
  tagline: "Construindo experiências digitais com código limpo e design intencional.",
  description:
    "Desenvolvedor Full Stack em formação, apaixonado por criar interfaces modernas e back-ends sólidos. Cada projeto é uma oportunidade de aprender e evoluir.",
  location: "Brasil",
  email: "emersonbrandao058@gmail.com",
  availableForWork: true,
  social: {
    github: "https://github.com/emersonbrandao058-dot",
    linkedin: "https://www.linkedin.com/in/emerson-brandao-b33839337",
    twitter: "",
    instagram: "https://www.instagram.com/brandao.emerson/",
  },
};

export const aboutHighlights = [
  {
    icon: "Code2",
    label: "Foco em qualidade",
    value: "Clean Code",
    description: "Código legível e sustentável",
  },
  {
    icon: "Layers",
    label: "Stack completa",
    value: "Full Stack",
    description: "Front-end e Back-end",
  },
  {
    icon: "Zap",
    label: "Aprendizado",
    value: "Contínuo",
    description: "Sempre evoluindo",
  },
  {
    icon: "Heart",
    label: "Paixão pelo que faz",
    value: "Dev",
    description: "Em cada linha de código",
  },
];

export const aboutText = [
  "Sou um desenvolvedor full stack em formação, focado em criar interfaces modernas e back-ends funcionais. Minha jornada é guiada pela curiosidade e pela vontade de entregar código de qualidade.",
  "Trabalho com tecnologias como React, Next.js e TypeScript no front-end, e exploro Python, Node.js e bancos de dados relacionais e não-relacionais no back-end.",
  "Cada projeto que desenvolvo é uma oportunidade de aprender algo novo e aplicar boas práticas de desenvolvimento.",
];

export type SkillCategory = {
  category: string;
  icon: string;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Front-end",
    icon: "Monitor",
    color: "emerald",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Back-end",
    icon: "Server",
    color: "cyan",
    skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    category: "Banco de Dados",
    icon: "Database",
    color: "violet",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: "Terminal",
    color: "amber",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Linux", "VS Code", "Figma"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "concept";
  gradient: string;
  year: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "pantherium",
    title: "Pantherium",
    description: "Projeto desenvolvido e publicado na Vercel. Acesse a demo para conferir.",
    longDescription:
      "Pantherium é um projeto web desenvolvido com foco em design e funcionalidade. Disponível online via Vercel.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Web", "Front-end"],
    github: "https://github.com/emersonbrandao058-dot/pantherium",
    live: "https://pantherium.vercel.app/",
    featured: true,
    status: "completed",
    gradient: "from-cyan-500/20 via-transparent to-transparent",
    year: "2024",
    image: "/images/pantherium.png",
  },
  {
    id: "meta-10",
    title: "META-10",
    description: "Projeto disponível no GitHub. Descrição completa no repositório.",
    longDescription:
      "META-10 é um projeto desenvolvido e disponibilizado no GitHub. Confira o repositório para mais detalhes sobre funcionalidades e tecnologias utilizadas.",
    stack: ["JavaScript", "HTML", "CSS"],
    tags: ["Web", "Front-end"],
    github: "https://github.com/emersonbrandao058-dot/META-10",
    live: undefined,
    featured: true,
    status: "completed",
    gradient: "from-violet-500/20 via-transparent to-transparent",
    year: "2024",
    image: "/images/meta10.png",
  },
  {
    id: "monitor-inteligente",
    title: "Monitor Inteligente",
    description: "Projeto disponível no GitHub. Descrição completa no repositório.",
    longDescription:
      "Monitor Inteligente é um projeto desenvolvido e disponibilizado no GitHub. Confira o repositório para mais detalhes sobre funcionalidades e tecnologias utilizadas.",
    stack: ["Python", "JavaScript"],
    tags: ["Monitoramento", "Back-end"],
    github: "https://github.com/emersonbrandao058-dot/MONITOR-INTELIGENTE",
    live: undefined,
    featured: true,
    status: "completed",
    gradient: "from-amber-500/20 via-transparent to-transparent",
    year: "2024",
    image: "/images/monitor-inteligente.png",
  },
];

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: "emersonbrandao058@gmail.com",
    href: "mailto:emersonbrandao058@gmail.com",
  },
  {
    icon: "Github",
    label: "GitHub",
    value: "@emersonbrandao058-dot",
    href: "https://github.com/emersonbrandao058-dot",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "emerson-brandao",
    href: "https://www.linkedin.com/in/emerson-brandao-b33839337",
  },
];
