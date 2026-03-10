import { useState, useCallback } from 'react'
import { Locale } from '@/data/portfolio'
import { translations } from '@/i18n'

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = localStorage.getItem('locale') as Locale
    return stored === 'fr' || stored === 'en' ? stored : 'en'
  })

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === 'en' ? 'fr' : 'en'
      localStorage.setItem('locale', next)
      return next
    })
  }, [])

  const tr = translations[locale]

  return { locale, toggleLocale, tr }
}
