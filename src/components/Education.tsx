import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { education, spokenLanguages } from '@/data/portfolio'
import { AnimatedSection, SectionHeader } from './AnimatedSection'
import { Locale } from '@/data/portfolio'

interface EducationProps {
  locale: Locale
  tr: { education: { title: string; subtitle: string } }
}

export function Education({ locale, tr }: EducationProps) {
  return (
    <AnimatedSection id="education" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={tr.education.title} subtitle={tr.education.subtitle} />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
              <GraduationCap size={14} />
              <span>{locale === 'en' ? 'Academic Background' : 'Parcours Académique'}</span>
            </h3>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-zinc-950 shadow-lg shadow-blue-500/30" />

                  <div className="glass rounded-xl p-5 glow-hover">
                    <span className="text-xs text-blue-400 font-medium mb-2 block">{edu.period}</span>
                    <h4 className="text-zinc-100 font-semibold mb-0.5">{edu.degree[locale]}</h4>
                    <p className="text-zinc-500 text-sm mb-2">{edu.field[locale]}</p>
                    <p className="text-zinc-600 text-xs font-medium">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
              <BookOpen size={14} />
              <span>{locale === 'en' ? 'Languages' : 'Langues'}</span>
            </h3>

            <div className="space-y-4">
              {spokenLanguages.map((lang, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-5 glow-hover flex items-center justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-zinc-100 font-semibold">{lang.name[locale]}</span>
                  <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-medium">
                    {lang.level[locale]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
