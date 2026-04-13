export type KPI = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  client?: string;
  period?: string;
  context: string;
  objective: string;
  role: string;
  stack: string[];
  kpis: KPI[];
  challenges: string[];
  solutions: string[];
  links?: {
    live?: string;
    github?: string;
  };
  cover: string;
  gallery?: string[];
};

export const CASES: CaseStudy[] = [
  
  {
    slug: "portfolio-photographe-sarah",
    title: "Portfolio Photographe — Sarah",
    subtitle: "Next.js • Galeries optimisées, SEO & pages projets",
    client: "Sarah (photographe)",
    period: "2025",
    context: "Portfolio pro présentant séries et projets, avec fidélité visuelle, navigation fluide et partage social soigné.",
    objective: "Optimiser l'exploration des séries, préserver la qualité photo et assurer un SEO solide.",
    role: "Dév front Next.js : architecture pages, composant Gallery, optimisation images, métadonnées SEO, accessibilité.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Next/Image"],
    kpis: [
      { label: "Perf (desktop)", value: "> 95" },
      { label: "CLS", value: "< 0.05" },
      { label: "Poids page galerie", value: "< 1 Mo (lazy)" }
    ],
    challenges: [
      "Qualité photo vs vitesse",
      "Éviter CLS dans les grilles",
      "Plein écran ergonomique (touch/keyboard)"
    ],
    solutions: [
      "Next/Image (ratios connus, placeholders blur)",
      "Masonry/justified grid avec réservations d'espace",
      "Lightbox accessible, préchargement intelligent"
    ],
    links: {},
    cover: "/work/Sarah.png",
    gallery: ["/work/Sarah.png", "/work/Sarah.png", "/work/Sarah.png"]
  },
  {
    slug: "advalis-saas",
    title: "Advalis Conseil — Site vitrine",
    subtitle: "Cabinet de conseil • Heros par rubrique, offre Kairos, articles & contact",
    client: "Advalis Conseil",
    period: "2025 — 2026",
    context:
      "Site vitrine pour le cabinet Advalis Conseil : présentation du savoir-faire, des secteurs d’intervention, de la rubrique Inspirations (articles), FAQ, formulaire de contact (Resend) et page dédiée « Activation projet » (Kairos) avec formats collectif et individuel.",
    objective:
      "Offrir une image premium et lisible, une navigation claire entre les grandes parties du site, et des parcours vers la prise de contact / réservation, tout en gardant de bonnes performances et un code maintenable.",
    role:
      "Développement front Next.js (App Router) : intégration UI (heros full-width, grilles, mise en page éditoriale), composants réutilisables, formulaire contact + route API, configuration des contenus centralisée (sessions Kairos, etc.), déploiement.",
    stack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Resend",
    ],
    kpis: [
      { label: "Rubriques livrées", value: "Accueil, Savoir-faire, Secteurs, Inspirations, À propos, FAQ, Contact" },
      { label: "Offre dédiée", value: "Page Kairos (/activation)" },
      { label: "Perf (desktop)", value: "Objectif Lighthouse élevé" },
    ],
    challenges: [
      "Varier les heros (plein écran, compositions avec visuels) tout en restant cohérent avec la charte",
      "Contenus éditoriaux évolutifs (articles, dates de sessions) sans surcharge technique pour le client",
      "Formulaire de contact fiable en production (email transactionnel)",
    ],
    solutions: [
      "Système de pages et sections réutilisables, tokens couleur / typo dans le thème Tailwind",
      "Données structurées en config (ex. sessions d’activation) pour mise à jour simple",
      "Route API Next.js + Resend, variables d’environnement pour la prod",
    ],
    links: {
      live: "https://advalis.fr",
      github: "https://github.com/JoeLeDev/Advalis",
    },
    cover: "/work/advalis-accueil.png",
    gallery: [
      "/work/advalis-accueil.png",
      "/work/advalis-savoir-faire.png",
      "/work/advalis-secteurs.png",
      "/work/advalis-kairos.png",
    ],
  }
];

