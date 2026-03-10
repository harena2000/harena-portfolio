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
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">
      {/* Floating pill navbar */}
      <motion.header
        className="pointer-events-auto w-full max-w-3xl"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={cn(
            'flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-500',
            scrolled
              ? 'border border-zinc-700/50 shadow-2xl shadow-black/40'
              : 'border border-white/5'
          )}
          style={{
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            backgroundColor: scrolled
              ? 'rgba(30, 30, 36, 0.72)'
              : 'rgba(30, 30, 36, 0.45)',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="text-sm font-bold gradient-text px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            HRM
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'relative px-4 py-1.5 text-sm rounded-full transition-all duration-200',
                  activeId === link.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-100'
                )}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(30,64,175,0.15))' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{tr.nav[link.id] ?? link.label[locale]}</span>
              </motion.button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <motion.button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full border border-zinc-700/60 text-zinc-400 hover:text-zinc-100 hover:border-blue-500/40 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={locale === 'en' ? 'text-blue-400' : 'text-zinc-500'}>EN</span>
              <span className="text-zinc-600">/</span>
              <span className={locale === 'fr' ? 'text-blue-400' : 'text-zinc-500'}>FR</span>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-1.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu — drops below the pill */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mt-2 rounded-2xl overflow-hidden border border-zinc-700/40 shadow-2xl shadow-black/40"
              style={{
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                backgroundColor: 'rgba(9, 9, 11, 0.75)',
              }}
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all',
                      activeId === link.id
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                    )}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {tr.nav[link.id] ?? link.label[locale]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
