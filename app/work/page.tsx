import Image from 'next/image'
import Link from 'next/link'
import { CASES } from './cases'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Études de cas | JoeLabs',
  description: 'Découvrez mes projets Next.js : sites vitrines, portfolios et applications SaaS.',
}

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Work</h1>
          <p className="text-xl text-gray-300">
            Études de cas et projets sélectionnés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/work/${caseStudy.slug}`}
              className="group block bg-slate-900 rounded-lg border border-slate-700 overflow-hidden hover:shadow-brand/20 hover:border-brand/50 transition-all"
            >
              {/* Cover image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                <Image
                  src={caseStudy.cover}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-brand transition-colors">
                  {caseStudy.title}
                </h2>
                
                {caseStudy.subtitle && (
                  <p className="text-brand text-sm font-medium mb-3">
                    {caseStudy.subtitle}
                  </p>
                )}

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {caseStudy.context}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-slate-800 text-gray-300 border border-slate-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

