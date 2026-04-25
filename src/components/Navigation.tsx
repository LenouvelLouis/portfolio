import { useLanguage } from './LanguageContext'

interface NavigationProps {
  page: string
  setPage: (page: string) => void
}

export default function Navigation({ page, setPage }: NavigationProps) {
  const { language, setLanguage } = useLanguage()

  const items = [
    { k: 'home', fr: 'Accueil', en: 'Home' },
    { k: 'about', fr: 'À propos', en: 'About' },
    { k: 'work', fr: 'Projets', en: 'Work' },
    { k: 'contact', fr: 'Contact', en: 'Contact' },
  ]

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-line font-sans text-[13px] sticky top-0 bg-background z-10">
      <div
        onClick={() => setPage('home')}
        className="cursor-pointer flex items-center gap-2.5"
      >
        <div className="w-7 h-7 bg-foreground rounded-full flex items-center justify-center text-background font-serif text-lg italic">
          L
        </div>
        <span className="font-semibold hidden sm:inline">Louis Lenouvel</span>
        <span className="text-muted-foreground hidden md:inline">Data Engineer & AI</span>
      </div>
      <nav className="flex gap-4 md:gap-6 items-center">
        {items.map((it) => (
          <a
            key={it.k}
            onClick={() => setPage(it.k)}
            className={`cursor-pointer pb-0.5 transition-colors ${
              page === it.k
                ? 'text-foreground font-semibold border-b border-burnt'
                : 'text-muted-foreground border-b border-transparent hover:text-foreground'
            }`}
          >
            {language === 'fr' ? it.fr : it.en}
          </a>
        ))}
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="border border-line bg-transparent px-2.5 py-1 rounded-full cursor-pointer text-xs font-sans text-foreground hover:border-muted-foreground transition-colors"
        >
          {language.toUpperCase()}
        </button>
      </nav>
    </header>
  )
}
