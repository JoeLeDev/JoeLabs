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
  cover: string;
  gallery?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "capitaine-depan-serrurier",
    title: "Capitaine Depan' — Serrurier Île-de-France",
    subtitle: "Site vitrine • Urgence 24/7, services, devis & contact",
    client: "Capitaine Depan'",
    period: "2026",
    context:
      "Site one-page pour un serrurier dépanneur en Île-de-France : identité visuelle forte (mascotte, thème sombre et orange), présentation des prestations, parcours de conversion (appel, WhatsApp, demande de devis) et formulaire de contact structuré.",
    objective:
      "Générer des leads qualifiés (urgences et devis planifiés), rassurer sur la réactivité 24/7 et la transparence tarifaire, tout en offrant une expérience mobile fluide pour les situations d'urgence.",
    role:
      "Conception et développement full-stack : SPA React/Vite one-page, API devis (Express en local, serverless Vercel en prod), intégration Resend, SEO schema.org, bannière cookies et déploiement.",
    stack: [
      "React 18",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Vercel",
    ],
    kpis: [
      { label: "Sections livrées", value: "Accueil, Services, Atouts, Devis, Contact" },
      { label: "SEO", value: "Open Graph + schema.org Locksmith" },
      { label: "Canaux de contact", value: "Téléphone, WhatsApp, formulaire e-mail" },
    ],
    challenges: [
      "Hiérarchiser l'urgence (appel immédiat) vs la demande de devis planifiée",
      "Envoi fiable des demandes de devis en production (API + Resend)",
      "Conformité RGPD (cookies, mentions légales) sans bloquer la conversion mobile",
    ],
    solutions: [
      "Hero avec CTAs multiples + bouton d'appel fixe sur mobile",
      "Route serverless `api/send-devis` sur Vercel, variables d'environnement Resend",
      "Bannière cookies (analytics opt-in), animations au scroll, pages légales dédiées",
    ],
    liveUrl: "https://capitaine-depan.vercel.app/",
    repoUrl: "https://github.com/JoeLeDev/Capitaine_Depan",
    cover: "/work/capitaine-depan-accueil.png",
    gallery: [
      "/work/capitaine-depan-accueil.png",
      "/work/capitaine-depan-services.png",
      "/work/capitaine-depan-process.png",
      "/work/capitaine-depan-devis.png",
    ],
  },
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
    cover: "/work/advalis-accueil.png",
    gallery: [
      "/work/advalis-accueil.png",
      "/work/advalis-savoir-faire.png",
      "/work/advalis-secteurs.png",
      "/work/advalis-kairos.png",
    ],
  }
];

