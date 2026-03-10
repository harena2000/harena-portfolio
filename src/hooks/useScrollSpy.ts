import { useState, useEffect } from 'react'

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
