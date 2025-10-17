import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour vos projets de développement web. Spécialisé en Next.js, TypeScript et React. Devis gratuit et conseils personnalisés pour votre site vitrine ou application web.',
  keywords: ['contact développeur', 'devis site web', 'développement web', 'Next.js', 'TypeScript', 'React', 'freelance', 'projet web', 'conseil technique'],
  openGraph: {
    title: 'Contact | JoeLabs — Développeur Web Freelance',
    description: 'Contactez-moi pour vos projets de développement web. Spécialisé en Next.js, TypeScript et React. Devis gratuit.',
    url: 'https://portfolio-dev-2025.vercel.app/contact',
  },
  twitter: {
    title: 'Contact | JoeLabs',
    description: 'Contactez-moi pour vos projets de développement web. Spécialisé en Next.js, TypeScript et React.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
