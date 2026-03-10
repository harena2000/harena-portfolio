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
    <AnimatedSection id="about" className="py-24 md:py-32 section-about-bg">
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
                className="rounded-2xl p-6 text-center relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, rgba(30,64,175,0.15) 0%, rgba(15,23,42,0.8) 60%, rgba(59,130,246,0.08) 100%)',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.5)' } as Parameters<typeof motion.div>[0]['whileHover']}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12), transparent 70%)' }}
                />
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
