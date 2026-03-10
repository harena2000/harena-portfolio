import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { AnimatedSection, SectionHeader } from './AnimatedSection'
import { Locale } from '@/data/portfolio'

interface ContactProps {
  locale: Locale
  tr: {
    contact: {
      title: string
      subtitle: string
      email: string
      phone: string
      location: string
      message: string
    }
  }
}

export function Contact({ locale, tr }: ContactProps) {
  const items = [
    {
      icon: Mail,
      label: tr.contact.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: tr.contact.phone,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: tr.contact.location,
      value: personalInfo.address[locale],
      href: undefined,
    },
  ]

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={tr.contact.title} subtitle={tr.contact.subtitle} />

        <div className="max-w-2xl mx-auto">
          {/* Message */}
          <motion.p
            className="text-center text-zinc-400 text-base leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {tr.contact.message}
          </motion.p>

          {/* Contact cards */}
          <div className="space-y-4 mb-10">
            {items.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                className="glass rounded-xl p-5 flex items-center gap-4 glow-hover group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-600 font-medium uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-zinc-200 text-sm truncate">{value}</p>
                </div>
                {href && (
                  <motion.a
                    href={href}
                    className="shrink-0 p-2 rounded-lg text-zinc-600 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 text-sm transition-all duration-200 glass"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
