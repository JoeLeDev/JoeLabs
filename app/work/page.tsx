import { CASES } from './cases'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Réalisations & études de cas',
  description: 'Découvrez mes réalisations : sites vitrines et applications web développés avec React, TypeScript et Next.js. Études de cas détaillées avec performances et solutions techniques.',
  keywords: ['portfolio développeur', 'études de cas', 'projets web', 'React', 'TypeScript', 'Next.js', 'sites vitrines', 'développement web', 'réalisations'],
  openGraph: {
    title: 'Réalisations & études de cas | JoeLabs',
    description: 'Découvrez mes réalisations : sites vitrines et applications web développés avec React et TypeScript.',
    url: `${SITE_URL}/work`,
  },
  twitter: {
    title: 'Réalisations & études de cas | JoeLabs',
    description: 'Découvrez mes réalisations : sites vitrines et applications web développés avec React et TypeScript.',
  },
}

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Réalisations</h1>
          <p className="text-xl text-gray-300">
            Études de cas et projets sélectionnés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {CASES.map((caseStudy, index) => (
            <ProjectCard key={caseStudy.slug} project={caseStudy} priority={index < 2} />
          ))}
        </div>
      </div>
    </div>
  )
}
