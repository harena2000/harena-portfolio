import { motion } from 'framer-motion'
import { skills, skillCategories } from '@/data/portfolio'
import { AnimatedSection, SectionHeader } from './AnimatedSection'
import { Locale } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface SkillsProps {
  locale: Locale
  tr: { skills: { title: string; subtitle: string } }
}

const categoryColorMap: Record<string, string> = {
  blue: 'border-blue-500/30 text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50',
  cyan: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50',
  gray: 'border-zinc-500/30 text-zinc-300 bg-zinc-500/10 hover:bg-zinc-500/20 hover:border-zinc-400/50',
  slate: 'border-slate-500/30 text-slate-300 bg-slate-500/10 hover:bg-slate-500/20 hover:border-slate-400/50',
  zinc: 'border-zinc-600/30 text-zinc-400 bg-zinc-600/10 hover:bg-zinc-600/20 hover:border-zinc-500/50',
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
}

export function Skills({ locale, tr }: SkillsProps) {
  const categories = Object.entries(skillCategories) as [
    keyof typeof skillCategories,
    (typeof skillCategories)[keyof typeof skillCategories],
  ][]

  return (
    <AnimatedSection id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={tr.skills.title} subtitle={tr.skills.subtitle} />

        <div className="space-y-10">
          {categories.map(([catKey, cat]) => {
            const catSkills = skills.filter((s) => s.category === catKey)
            if (catSkills.length === 0) return null

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      'w-1.5 h-1.5 rounded-full',
                      cat.color === 'blue' ? 'bg-blue-400' :
                      cat.color === 'cyan' ? 'bg-cyan-400' :
                      'bg-zinc-500'
                    )}
                  />
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                    {cat[locale]}
                  </span>
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {catSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className={cn(
                        'px-5 py-2.5 rounded-full border text-sm font-medium cursor-default transition-all duration-200',
                        categoryColorMap[cat.color]
                      )}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
