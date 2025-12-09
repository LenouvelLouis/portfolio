import { useLanguage } from './LanguageContext'

export default function Hero() {
  const { language, setLanguage } = useLanguage()

  const content = {
      fr: {
          title: 'Louis Lenouvel',
          subtitle: 'Data Ingénieur & Spécialiste IA',
          description: 'Data Ingénieur chez IKIGAI Games, spécialisé en IA. Passionné par les pipelines NLP et la construction d’infrastructures de données hautement scalables.',
      },
      en: {
          title: 'Louis Lenouvel',
          subtitle: 'Data Engineer & AI Specialist',
          description: 'Data Engineer at IKIGAI Games, specialized in AI. Passionate about NLP-oriented pipelines and building highly scalable data infrastructures.',
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
