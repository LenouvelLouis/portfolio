import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageContext'
import Logo from './Logo'
import { BASE } from './projectsData'

interface NavigationProps {
  goSection: (id: string) => void
  goHome: () => void
}

export default function Navigation({ goSection, goHome }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const items = [
    { id: 'projets', label: { fr: 'Projets', en: 'Work' } },
    { id: 'parcours', label: { fr: 'Parcours', en: 'Path' } },
    { id: 'stack', label: { fr: 'Stack', en: 'Stack' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ]

  const cv = `${BASE}${language === 'fr' ? 'CV_Lenouvel_Louis_FR.pdf' : 'CV_Lenouvel_Louis_EN.pdf'}`

  return (
    <header
      className={`sticky top-0 z-30 bg-paper/90 backdrop-blur transition-[border-color] ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            goHome()
          }}
          className="flex items-center gap-2.5 no-underline"
          aria-label="Louis Lenouvel, accueil"
        >
          <Logo size={30} />
          <span className="text-[15px] font-bold tracking-tight">
            Louis Lenouvel
          </span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center md:flex">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => goSection(it.id)}
                className="cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium text-ink-2 transition-colors hover:bg-soft hover:text-ink"
              >
                {t(it.label)}
              </button>
            ))}
          </div>
          <div className="ml-1 flex rounded-full border border-line p-0.5 text-xs font-semibold" role="group" aria-label="Langue">
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                aria-pressed={language === l}
                className={`cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors ${
                  language === l ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-block rounded-full bg-signal px-3.5 py-1.5 text-sm font-semibold text-[#111a2b] no-underline transition-transform hover:-translate-y-px"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}
