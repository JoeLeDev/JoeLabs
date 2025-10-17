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
    slug: "andre-deco",
    title: "André Déco",
    subtitle: "Vitrine artisan • Services, réalisations, contact",
    client: "André Déco",
    period: "2025",
    context: "Site vitrine pour artisan décoration/rénovation : présentation des prestations, mise en avant des réalisations (galerie), capture de leads via formulaire.",
    objective: "Fournir un site rapide et clair pour convertir des demandes locales, optimisé SEO de base et mobile-first.",
    role: "Dév Next.js & intégration UI (design sobre, responsive, SEO technique et performance).",
    stack: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "Next/Image"],
    kpis: [
      { label: "Lighthouse (desktop)", value: "> 95" },
      { label: "Poids page d'accueil", value: "< 1 Mo (lazy images)" }
    ],
    challenges: [
      "Montrer des visuels de qualité sans ralentir le site",
      "Clarifier l'offre et les CTA",
      "SEO local de base"
    ],
    solutions: [
      "Next/Image (WebP/AVIF, blur, sizes responsives)",
      "Sections services + preuves (réalisations) + CTA clair",
      "Balises méta/OG + schema.org LocalBusiness"
    ],
    links: {},
    cover: "/work/Andre.png",
    gallery: ["/work/Andre.png", "/work/Andre.png", "/work/Andre.png"]
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
    links: {},
    cover: "/work/Sarah.png",
    gallery: ["/work/Sarah.png", "/work/Sarah.png", "/work/Sarah.png"]
  },
  {
    slug: "advalis-saas",
    title: "Advalis — SaaS de conseil",
    subtitle: "MVP • Onboarding client, offres & pipeline commercial",
    client: "Advalis",
    period: "2025",
    context: "Création d'un MVP SaaS : gestion des offres/prestations, suivi des demandes (pipeline), espace client simplifié.",
    objective: "Livrer un socle produit exploitable : auth & rôles, modèles extensibles, vues pipeline et client.",
    role: "Dév full-stack Next.js : modélisation, auth/roles, écrans pipeline, composants UI, perfs et SEO.",
    stack: ["Next.js 14 (Full-stack)", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    kpis: [
      { label: "Livraison MVP", value: "3 sprints" },
      { label: "Pages core", value: "Onboarding + Pipeline + Espace client" },
      { label: "Perf (desktop)", value: "> 95" }
    ],
    challenges: [
      "RBAC simple mais évolutif",
      "Prioriser time-to-value du MVP",
      "Perfs sur listes filtrées/triées"
    ],
    solutions: [
      "RBAC minimal (admin/consultant/client) + guards/policies",
      "Backlog priorisé (Kano) en user stories",
      "Pagination + requêtes sélectives, virtualisation"
    ],
    links: {},
    cover: "/work/Advalis.png",
    gallery: ["/work/Advalis.png", "/work/Advalis.png", "/work/Advalis.png"]
  }
];

