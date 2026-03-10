import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/portfolio'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Locale } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface NavbarProps {
  locale: Locale
  toggleLocale: () => void
  tr: { nav: Record<string, string> }
}

export function Navbar({ locale, toggleLocale, tr }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-zinc-800/50 py-3' : 'py-5'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-lg font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          HRM
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={cn(
                'px-4 py-2 text-sm rounded-lg transition-all duration-200 link-underline',
                activeId === link.id
                  ? 'text-blue-400 font-medium'
                  : 'text-zinc-400 hover:text-zinc-100'
              )}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {tr.nav[link.id] ?? link.label[locale]}
            </motion.button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <motion.button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={locale === 'en' ? 'text-blue-400' : 'text-zinc-500'}>EN</span>
            <span className="text-zinc-600">/</span>
            <span className={locale === 'fr' ? 'text-blue-400' : 'text-zinc-500'}>FR</span>
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-zinc-800/50 mt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    'w-full text-left px-4 py-3 text-sm rounded-lg transition-all',
                    activeId === link.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {tr.nav[link.id] ?? link.label[locale]}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
