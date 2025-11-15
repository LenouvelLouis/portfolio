'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export default function Hero() {
  const { language, setLanguage } = useLanguage()

  const content = {
    fr: {
      title: 'Louis Lenouvel',
      subtitle: 'Développeur Full Stack & Spécialiste IA',
      description: 'Développeur Full Stack chez Ikigai - Games for Citizens, spécialisé en intelligence artificielle avec une passion pour créer des solutions numériques innovantes et utiles à la société.',
    },
    en: {
      title: 'Louis Lenouvel',
      subtitle: 'Full Stack Developer & AI Specialist',
      description: 'Full Stack Developer at Ikigai - Games for Citizens, specialized in artificial intelligence with a passion for creating innovative digital solutions that benefit society.',
    },
  }

  const current = content[language]

  return (
    <section className="relative px-12 py-20">
      <div className="absolute top-8 right-12 flex gap-2">
        <button
          onClick={() => setLanguage('fr')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            language === 'fr'
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            language === 'en'
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
        >
          EN
        </button>
      </div>

      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {current.title}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-6">
          {current.subtitle}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {current.description}
        </p>
      </div>
    </section>
  )
}
