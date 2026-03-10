import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { Locale } from '@/data/portfolio'

interface FooterProps {
  locale: Locale
  tr: { footer: { made: string; by: string } }
}

export function Footer({ tr }: FooterProps) {
  return (
    <motion.footer
      className="border-t border-zinc-800/50 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-zinc-600 text-sm flex items-center gap-1.5">
          {tr.footer.made}{' '}
          <Heart size={12} className="text-red-500 fill-red-500" />
          {' '}{tr.footer.by}{' '}
          <span className="text-zinc-400 font-medium">{personalInfo.firstName}</span>
        </p>
        <p className="text-zinc-700 text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </motion.footer>
  )
}
