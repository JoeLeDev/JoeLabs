import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy } from '@/app/work/cases'

type ProjectCardProps = {
  project: CaseStudy
  priority?: boolean
  className?: string
}

export default function ProjectCard({ project, priority = false, className = '' }: ProjectCardProps) {
  const stackPreview = project.stack.slice(0, 4).join(' · ')

  return (
    <article
      className={`group flex h-full flex-col bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-brand/20 hover:border-brand/50 transition-all duration-300 ${className}`}
    >
      <Link href={`/work/${project.slug}`} className="flex flex-1 flex-col min-h-0">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-800">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
            priority={priority}
          />
        </div>

        <div className="flex flex-1 flex-col p-6 pb-4">
          <div className="mb-3 min-h-[3.25rem] flex items-start">
            {project.sector ? (
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide leading-snug text-brand bg-brand/10 border border-brand/30 rounded-full line-clamp-2">
                {project.sector}
              </span>
            ) : null}
          </div>

          <h3 className="mb-2 min-h-[3.5rem] text-xl font-bold leading-snug text-white line-clamp-2 group-hover:text-brand transition-colors">
            {project.title}
          </h3>

          <p className="mb-3 min-h-[2.75rem] text-sm font-medium leading-snug text-brand line-clamp-2">
            {project.subtitle ?? '\u00A0'}
          </p>

          <p className="mb-3 min-h-[2.5rem] flex-1 text-sm leading-relaxed text-gray-400 line-clamp-2">
            {project.context}
          </p>

          <p className="min-h-[1.25rem] text-xs text-gray-500 line-clamp-1">{stackPreview}</p>
        </div>
      </Link>

      <div className="mt-auto flex shrink-0 flex-wrap items-center gap-4 border-t border-slate-800 px-6 pb-6 pt-4">
        <Link
          href={`/work/${project.slug}`}
          className="text-sm font-medium text-brand hover:underline"
        >
          Étude de cas →
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-brand transition-colors"
          >
            Voir le site ↗
          </a>
        )}
      </div>
    </article>
  )
}
