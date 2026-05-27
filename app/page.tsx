import Link from 'next/link'
import { CASES } from './work/cases'
import Image from 'next/image'
import ProjectCard from '@/components/ProjectCard'
import { Metadata } from 'next'
import { OG_IMAGE, OG_IMAGE_ABSOLUTE, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Développeur web freelance spécialisé en React, TypeScript et applications web performantes. Création de sites vitrines, portfolios et projets sur mesure avec un focus SEO et performance.',
  keywords: ['développeur web freelance', 'React', 'TypeScript', 'Next.js', 'site vitrine', 'portfolio', 'application web', 'développement frontend', 'SEO', 'performance web'],
  openGraph: {
    title: 'JoeLabs — Développeur Web Freelance | Accueil',
    description: 'Transformez vos idées en applications web performantes. Expert React, TypeScript et développement sur mesure.',
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE_ABSOLUTE(),
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoeLabs — Développeur Web Freelance',
    description: 'Transformez vos idées en applications web performantes. Expert React et TypeScript.',
    images: [OG_IMAGE_ABSOLUTE()],
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-brand bg-opacity-10 text-brand rounded-full text-sm font-medium mb-6 animate-pulse">
            🚀 Développeur Web Freelance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up">
            Je transforme vos idées en{' '}
            <span className="text-brand animate-gradient bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">applications web performantes</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Développeur spécialisé en <strong className="text-white">React</strong> et <strong className="text-white">TypeScript</strong>.
            Je crée des sites vitrines et applications web optimisés pour la performance et le référencement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link
              href="/contact"
              className="bg-brand text-slate-900 px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium shadow-lg hover:scale-105"
            >
              Demander un devis
            </Link>
            <Link
              href="/work"
              className="border-2 border-brand text-brand px-8 py-4 rounded-lg hover:bg-brand hover:text-slate-900 transition-all duration-300 font-medium hover:scale-105"
            >
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              À propos de JoeLabs
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
              Je suis un développeur web freelance passionné par la création d&apos;expériences numériques modernes et performantes. 
              Mon approche allie <strong className="text-white">expertise technique</strong> et <strong className="text-white">sens du design</strong> pour transformer vos idées en solutions web qui marquent vos utilisateurs.
            </p>
            <p className="text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              Spécialisé en <strong className="text-brand">React</strong> et l&apos;écosystème moderne (Vite, Next.js),
              je privilégie la <strong className="text-brand">performance</strong>,
              l&apos;<strong className="text-brand">accessibilité</strong> et le <strong className="text-brand">SEO</strong> pour garantir le succès de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Formation & Parcours
              </h2>
              <p className="text-gray-300 text-lg">
                Mon parcours depuis mes débuts dans le développement web
              </p>
            </div>

            <div className="space-y-8">
              {/* Formation 1 - Master */}
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-brand/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand bg-opacity-10 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <span className="text-2xl">🎓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Master Full Stack & Sécurité</h3>
                      <span className="text-brand text-sm font-medium">2026-2028</span>
                    </div>
                    <p className="text-gray-300 mb-2">
                      <strong>LiveCampus</strong> - École Supérieure d&apos;informatique
                    </p>
                    <p className="text-gray-400 text-sm">
                      Spécialisation en architectures avancées, Cybersécurité, et gestion de projet. 
                      Approfondissement des technologies modernes et méthodologies de développement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Formation 2 - Bachelor */}
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-brand/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-left animation-delay-200">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand bg-opacity-10 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                      <span className="text-2xl">💻</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Bachelor Développement Web</h3>
                      <span className="text-brand text-sm font-medium">2022-2025</span>
                    </div>
                    <p className="text-gray-300 mb-2">
                      <strong>HETIC</strong> - Hautes Etudes de l&apos;Information et de la Communication
                    </p>
                    <p className="text-gray-400 text-sm">
                      Formation complète en développement web : Next.js, TypeScript, React, Node.js, bases de données, UI/UX design.
                      Projets pratiques et alternance en entreprise.
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>
        </div>
      </section>


      {/* Stack & Expertise */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stack Technique
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Les technologies que je maîtrise pour créer des applications web performantes et modernes
              </p>
            </div>

            {/* Technologies principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'React',
                  description: 'Interfaces utilisateur modernes',
                  logo: (
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
                {
                  name: 'TypeScript',
                  description: 'JavaScript typé et robuste',
                  logo: (
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
                {
                  name: 'Vite',
                  description: 'Build rapide pour SPA React',
                  logo: (
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                      alt="Vite"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
                {
                  name: 'Next.js',
                  description: 'React full-stack et SEO avancé',
                  logo: (
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
                {
                  name: 'Node.js',
                  description: 'Backend JavaScript',
                  logo: (
                    <Image
                      src="https://nodejs.org/static/images/logo.svg"
                      alt="Node.js"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
                {
                  name: 'PostgreSQL',
                  description: 'Base de données relationnelle',
                  logo: (
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ),
                },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-brand/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies secondaires */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Outils & Technologies complémentaires</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tailwind CSS', 'Prisma', 'MongoDB',
                  'Git', 'Figma', 'Vercel', 'Resend', 'Docker', 'Jest',
                ].map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800 border border-slate-600 text-gray-300 text-sm rounded-full hover:border-brand hover:text-brand transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Projets récents
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Une sélection de mes réalisations
              </p>
              <Link
                href="/work"
                className="text-brand hover:underline font-medium"
              >
                Voir tous les projets →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-stretch">
              {CASES.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={index === 0}
                  className="hover:scale-[1.02] animate-fade-in-up"
                />
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link
                href="/work"
                className="inline-block text-brand hover:underline font-medium"
              >
                Voir tous les projets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Prise de contact
              </h2>
              <p className="text-gray-300 text-lg">
                Un processus simple et transparent pour votre sérénité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Découverte',
                  description: 'Échange sur vos besoins, objectifs et contraintes. Établissement d\'un devis détaillé.',
                },
                {
                  step: '02',
                  title: 'Conception',
                  description: 'Création de la structure et du design. Validation des maquettes avant développement.',
                },
                {
                  step: '03',
                  title: 'Développement',
                  description: 'Code propre et optimisé. Suivi régulier avec démos intermédiaires.',
                },
                {
                  step: '04',
                  title: 'Livraison',
                  description: 'Tests, mise en ligne et formation. Support post-livraison assuré.',
                },
              ].map((phase) => (
                <div key={phase.step} className="animate-fade-in-up" style={{ animationDelay: `${parseInt(phase.step) * 150}ms` }}>
                  <div className="w-16 h-16 bg-brand bg-opacity-10 text-brand rounded-full flex items-center justify-center text-2xl font-bold mb-4 hover:scale-110 hover:rotate-6 transition-all duration-300">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-brand transition-colors duration-300">{phase.title}</h3>
                  <p className="text-gray-400 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand to-emerald-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discutons de vos besoins et trouvons ensemble la meilleure solution pour votre business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium shadow-lg hover:scale-105 animate-bounce-subtle"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/work"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium hover:scale-105"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

