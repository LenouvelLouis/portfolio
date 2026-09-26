import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, T } from './projectsData'

interface Ctx {
  language: Lang
  setLanguage: (l: Lang) => void
  t: (v: T) => string
}

const LanguageContext = createContext<Ctx | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Lang>('fr')

  // Langue mémorisée, sinon langue du navigateur
  useEffect(() => {
    let initial: Lang = 'fr'
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'fr' || saved === 'en') initial = saved
      else if (!navigator.language.toLowerCase().startsWith('fr')) initial = 'en'
    } catch {
      /* stockage indisponible */
    }
    setLanguage(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('lang', language)
    } catch {
      /* stockage indisponible */
    }
  }, [language])

  const t = (v: T) => v[language]

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
