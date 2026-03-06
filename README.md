# Emerson Brandão — Portfolio Premium

Portfolio pessoal desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)
- **DM Serif Display + DM Sans + JetBrains Mono** (tipografia)

## Design

- Dark premium com paleta esmeralda / violeta
- Glassmorphism e depth layers
- Animações suaves com Framer Motion
- Grid pattern + orbs de glow
- Scanline effect sutil
- Totalmente responsivo (mobile, tablet, desktop)

## Estrutura

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout com metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Estilos globais + CSS variables
│   ├── sobre/page.tsx
│   ├── projetos/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Nav fixa com blur + active state
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Section principal com code card flutuante
│   │   ├── About.tsx       # Sobre com stats cards
│   │   ├── Skills.tsx      # Grid de habilidades por categoria
│   │   ├── Projects.tsx    # Grid de projetos
│   │   └── Contact.tsx     # CTA + cards de contato
│   └── ui/
│       ├── GlowBackground.tsx
│       ├── SectionTitle.tsx
│       ├── CTAButton.tsx
│       ├── SkillBadge.tsx
│       ├── ProjectCard.tsx
│       ├── SocialLinks.tsx
│       └── AnimatedGrid.tsx
├── lib/
│   ├── data.ts             # Dados centralizados
│   └── utils.ts            # cn(), helpers
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento
npm run dev

# 3. Acesse
# http://localhost:3000
```

## Build para produção

```bash
npm run build
npm start
```

## Deploy recomendado

Deploy na [Vercel](https://vercel.com) — integração nativa com Next.js:

```bash
npx vercel
```

## Personalização

Edite `lib/data.ts` para atualizar:
- Informações pessoais
- Links sociais
- Projetos
- Skills
- Contato

Edite `app/globals.css` para ajustar as CSS variables de cor.
