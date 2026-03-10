import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { AnimatedSection, SectionHeader } from './AnimatedSection'
import { Locale } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface ProjectsProps {
  locale: Locale
  tr: {
    projects: {
      title: string
      subtitle: string
      tech: string
      viewAll: string
      showLess: string
      present: string
    }
  }
}

function ProjectCard({
  project,
  locale,
  tr,
  index,
}: {
  project: (typeof projects)[0]
  locale: Locale
  tr: ProjectsProps['tr']
  index: number
}) {
  return (
    <motion.article
      className="rounded-2xl p-6 group relative overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(24,24,27,0.95) 0%, rgba(15,15,18,0.98) 100%)',
        border: '1px solid rgba(63,63,70,0.5)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
    >
      {/* Gradient shimmer on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #60a5fa, #3b82f6, transparent)' }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>
        {project.featured && (
          <span
            className="shrink-0 text-xs px-2.5 py-0.5 rounded-full text-white font-medium"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', boxShadow: '0 0 12px rgba(59,130,246,0.4)' }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Calendar size={12} />
          <span>{project.period[locale]}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-blue-400/70">
          <Briefcase size={12} />
          <span>{project.type[locale]}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {project.description[locale]}
      </p>

      {/* Tech stack */}
      <div>
        <p className="text-xs text-zinc-600 mb-2 font-medium uppercase tracking-widest">{tr.projects.tech}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects({ locale, tr }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const visibleProjects = showAll ? projects : featured

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={tr.projects.title} subtitle={tr.projects.subtitle} />

        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              tr={tr}
              index={i}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-10 text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-all duration-200',
                showAll
                  ? 'border-zinc-700 text-zinc-400 hover:text-zinc-100 glass'
                  : 'border-blue-500/50 text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/15'
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? (
                <>
                  {tr.projects.showLess}
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  {tr.projects.viewAll}
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* Expand animation for extra projects */}
        <AnimatePresence>
          {showAll && rest.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
