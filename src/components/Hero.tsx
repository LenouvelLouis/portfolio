import { useLanguage } from './LanguageContext'

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
    <section className="relative px-4 md:px-12 py-12 md:py-20">
      <div className="absolute top-4 md:top-8 right-4 md:right-12 flex gap-2">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 md:px-4 py-1 md:py-2 rounded-lg font-medium text-sm md:text-base transition-all ${
            language === 'fr'
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 md:px-4 py-1 md:py-2 rounded-lg font-medium text-sm md:text-base transition-all ${
            language === 'en'
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'bg-muted text-muted-foreground hover:bg-secondary'
          }`}
        >
          EN
        </button>
      </div>

      <div className="max-w-4xl pt-12 md:pt-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {current.title}
        </h1>
        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-4 md:mb-6"></div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-accent mb-4 md:mb-6">
          {current.subtitle}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {current.description}
        </p>
      </div>
    </section>
  )
}
