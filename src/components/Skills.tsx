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
  blue: 'border-blue-500/40 text-blue-200 hover:border-blue-400/70 hover:text-white',
  cyan: 'border-blue-400/30 text-blue-300 hover:border-blue-300/60 hover:text-white',
  gray: 'border-zinc-600/40 text-zinc-300 hover:border-zinc-400/60 hover:text-white',
  slate: 'border-zinc-500/30 text-zinc-400 hover:border-zinc-400/50 hover:text-zinc-200',
  zinc: 'border-zinc-700/40 text-zinc-500 hover:border-zinc-500/60 hover:text-zinc-300',
}

const categoryGradientMap: Record<string, string> = {
  blue: 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(30,64,175,0.08) 100%)',
  cyan: 'linear-gradient(135deg, rgba(96,165,250,0.14) 0%, rgba(59,130,246,0.06) 100%)',
  gray: 'linear-gradient(135deg, rgba(113,113,122,0.15) 0%, rgba(82,82,91,0.05) 100%)',
  slate: 'linear-gradient(135deg, rgba(100,116,139,0.12) 0%, rgba(71,85,105,0.05) 100%)',
  zinc: 'linear-gradient(135deg, rgba(82,82,91,0.12) 0%, rgba(63,63,70,0.04) 100%)',
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
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: cat.color === 'blue'
                        ? 'linear-gradient(135deg, #60a5fa, #2563eb)'
                        : cat.color === 'cyan'
                        ? 'linear-gradient(135deg, #93c5fd, #3b82f6)'
                        : 'linear-gradient(135deg, #a1a1aa, #52525b)',
                    }}
                  />
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                    {cat[locale]}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
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
                        'px-5 py-2.5 rounded-full border text-sm font-medium cursor-default transition-all duration-300',
                        categoryColorMap[cat.color]
                      )}
                      style={{ background: categoryGradientMap[cat.color] }}
                      whileHover={{ scale: 1.07, y: -3 }}
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
