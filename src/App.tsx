import { useLocale } from '@/hooks/useLocale'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ParticleBackground } from '@/components/ParticleBackground'

export default function App() {
  const { locale, toggleLocale, tr } = useLocale()

  return (
    <div className="relative min-h-screen bg-zinc-950 portfolio-bg">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar locale={locale} toggleLocale={toggleLocale} tr={tr} />
        <main>
          <Hero locale={locale} tr={tr} />
          <About locale={locale} tr={tr} />
          <Skills locale={locale} tr={tr} />
          <Projects locale={locale} tr={tr} />
          <Education locale={locale} tr={tr} />
          <Contact locale={locale} tr={tr} />
        </main>
        <Footer locale={locale} tr={tr} />
      </div>
    </div>
  )
}
