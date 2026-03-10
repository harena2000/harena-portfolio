import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { Locale } from '@/data/portfolio'

interface HeroProps {
  locale: Locale
  tr: {
    hero: { greeting: string; cta: string; contact: string; scrollDown: string }
  }
}

const TITLES = {
  en: ['Mobile Developer', 'Web Developer', 'Flutter Expert', 'GIS Developer'],
  fr: ['Développeur Mobile', 'Développeur Web', 'Expert Flutter', 'Développeur SIG'],
}

export function Hero({ locale, tr }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = TITLES[locale]
  const currentTitle = titles[titleIndex]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(() => setDisplayed(currentTitle.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentTitle.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentTitle, titles.length])

  // Reset typewriter when locale changes
  useEffect(() => {
    setDisplayed('')
    setIsDeleting(false)
    setTitleIndex(0)
  }, [locale])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg grid-pattern noise">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(30,64,175,0.14) 0%, transparent 70%)' }}
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-48 h-48 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)' }}
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">
        {/* Avatar */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
        >
          <div className="relative">
            {/* Outer rotating gradient ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #3b82f6, #1d4ed8, #1e3a8a, #3b82f6)', opacity: 0.7 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/60 to-blue-700/60 blur-xl scale-125" />
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-zinc-950 shadow-2xl"
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-zinc-950 animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="text-zinc-500 text-sm md:text-base mb-2 tracking-widest uppercase font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {tr.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="gradient-text-wide">{personalInfo.firstName}</span>
          <br />
          <span className="gradient-text">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          className="h-10 flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-lg md:text-2xl text-blue-400 font-mono font-medium typewriter-cursor">
            {displayed}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 gradient-btn text-white font-medium rounded-full transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tr.hero.cta}
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 border border-zinc-700 hover:border-blue-500/50 text-zinc-300 hover:text-zinc-100 font-medium rounded-full transition-all duration-200 glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tr.hero.contact}
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-4 justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={18} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs tracking-widest uppercase">{tr.hero.scrollDown}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
