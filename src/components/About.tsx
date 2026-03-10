import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { AnimatedSection, SectionHeader } from './AnimatedSection'
import { Locale } from '@/data/portfolio'

interface AboutProps {
  locale: Locale
  tr: {
    about: {
      title: string
      subtitle: string
      yearsExp: string
      projects: string
      technologies: string
    }
  }
}

const stats = [
  { key: 'yearsExp', value: '4+' },
  { key: 'projects', value: '5+' },
  { key: 'technologies', value: '12+' },
]

export function About({ locale, tr }: AboutProps) {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={tr.about.title} subtitle={tr.about.subtitle} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              {personalInfo.summary[locale]}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                className="glass rounded-2xl p-6 text-center glow-hover"
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-zinc-500 text-xs leading-snug">
                  {tr.about[stat.key as keyof typeof tr.about]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
