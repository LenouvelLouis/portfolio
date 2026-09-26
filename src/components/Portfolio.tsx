import { useCallback, useEffect, useState } from 'react'
import { LanguageProvider } from './LanguageContext'
import Navigation from './Navigation'
import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import CaseStudy from './CaseStudy'
import { byslug } from './projectsData'

// Routage par hash (#/projets/slug) : compatible GitHub Pages, et le bouton retour marche.
function readRoute(): string | null {
  const m = window.location.hash.match(/^#\/projets\/([\w-]+)/)
  return m && byslug(m[1]) ? m[1] : null
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Portfolio() {
  const [slug, setSlug] = useState<string | null>(null)
  const [pending, setPending] = useState<string | null>(null)

  useEffect(() => {
    const sync = () => {
      const next = readRoute()
      setSlug(next)
      if (next) window.scrollTo(0, 0)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  // Défilement vers une section une fois la page d'accueil affichée
  useEffect(() => {
    if (!slug && pending) {
      const id = pending
      setPending(null)
      requestAnimationFrame(() => scrollToId(id))
    }
  }, [slug, pending])

  const goHome = useCallback(
    (section?: string) => {
      if (slug) {
        history.pushState(null, '', '#/')
        setSlug(null)
        if (section) setPending(section)
        else window.scrollTo(0, 0)
      } else if (section) {
        scrollToId(section)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [slug],
  )

  const project = slug ? byslug(slug) : undefined

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink">
        <a
          href="#projets"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-[#111a2b]"
          onClick={(e) => {
            e.preventDefault()
            goHome('projets')
          }}
        >
          Aller aux projets
        </a>
        <Navigation goHome={() => goHome()} goSection={(id) => goHome(id)} />
        {project ? (
          <>
            <CaseStudy project={project} goHome={goHome} />
            <Contact />
          </>
        ) : (
          <main>
            <Hero goSection={(id) => goHome(id)} />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </main>
        )}
      </div>
    </LanguageProvider>
  )
}
