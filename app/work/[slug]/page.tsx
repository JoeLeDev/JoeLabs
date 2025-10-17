import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CASES } from '../cases'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return CASES.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = CASES.find((c) => c.slug === params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Projet introuvable | JoeLabs',
    }
  }

  return {
    title: `${caseStudy.title} — Étude de cas`,
    description: `${caseStudy.context} - ${caseStudy.objective}. Technologies utilisées : ${caseStudy.stack.join(', ')}. Performance et solutions techniques détaillées.`,
    keywords: [
      'étude de cas',
      'projet web',
      'développement',
      'Next.js',
      'TypeScript',
      caseStudy.client || '',
      ...caseStudy.stack,
    ].filter(Boolean),
    openGraph: {
      title: `${caseStudy.title} — Étude de cas | JoeLabs`,
      description: `${caseStudy.context} - ${caseStudy.objective}`,
      url: `https://portfolio-dev-2025.vercel.app/work/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.cover,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - Étude de cas`,
        },
      ],
    },
    twitter: {
      title: `${caseStudy.title} — Étude de cas`,
      description: `${caseStudy.context} - ${caseStudy.objective}`,
      images: [caseStudy.cover],
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = CASES.find((c) => c.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link
          href="/work"
          className="inline-flex items-center text-brand hover:underline mb-8"
        >
          ← Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            {caseStudy.title}
          </h1>
          {caseStudy.subtitle && (
            <p className="text-xl text-brand font-medium mb-4">
              {caseStudy.subtitle}
            </p>
          )}
          {(caseStudy.client || caseStudy.period) && (
            <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
              {caseStudy.client && (
                <span>
                  <strong>Client :</strong> {caseStudy.client}
                </span>
              )}
              {caseStudy.period && (
                <span>
                  <strong>Période :</strong> {caseStudy.period}
                </span>
              )}
            </div>
          )}
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            {caseStudy.context}
          </p>
        </div>

        {/* Cover image */}
        <div className="relative aspect-video w-full mb-16 rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
          <Image
            src={caseStudy.cover}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Main content with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Context & Objectives */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contexte & Objectifs</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Contexte</h3>
                  <p>{caseStudy.context}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">Objectif</h3>
                  <p>{caseStudy.objective}</p>
                </div>
              </div>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Défis</h2>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-brand font-bold mt-1">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Solutions</h2>
              <ul className="space-y-3">
                {caseStudy.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-brand font-bold mt-1">✓</span>
                    <span className="text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 text-white">Galerie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700"
                    >
                      <Image
                        src={image}
                        alt={`${caseStudy.title} - Image ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">Rôle</h3>
                <p className="text-gray-300 text-sm">{caseStudy.role}</p>
              </div>

              {/* Stack */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-white">Stack technique</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-brand bg-opacity-10 text-brand rounded-full border border-brand/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              {caseStudy.kpis.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-3 text-white">Résultats clés</h3>
                  <div className="space-y-3">
                    {caseStudy.kpis.map((kpi, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900 p-3 rounded-lg border border-slate-700"
                      >
                        <div className="text-2xl font-bold text-brand mb-1">
                          {kpi.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              {caseStudy.links && (
                <div className="space-y-3">
                  {caseStudy.links.live && (
                    <a
                      href={caseStudy.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-brand text-slate-900 text-center px-4 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium"
                    >
                      Voir le site →
                    </a>
                  )}
                  {caseStudy.links.github && (
                    <a
                      href={caseStudy.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border border-brand text-brand text-center px-4 py-3 rounded-lg hover:bg-brand hover:text-slate-900 transition-all font-medium"
                    >
                      Voir le code GitHub →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-slate-700">
          <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Note :</strong> Certains détails techniques et visuels peuvent être confidentiels ou simplifiés dans cette présentation publique.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand text-slate-900 px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium"
            >
              Discutons de votre projet →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

