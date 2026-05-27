import { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour vos projets de développement web. Spécialisé en React, TypeScript et applications sur mesure. Devis gratuit et conseils personnalisés.',
  keywords: ['contact développeur', 'devis site web', 'développement web', 'React', 'TypeScript', 'Next.js', 'freelance', 'projet web', 'conseil technique'],
  openGraph: {
    title: 'Contact | JoeLabs — Développeur Web Freelance',
    description: 'Contactez-moi pour vos projets de développement web. Spécialisé en React et TypeScript. Devis gratuit.',
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    title: 'Contact | JoeLabs',
    description: 'Contactez-moi pour vos projets de développement web. Spécialisé en React et TypeScript.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
