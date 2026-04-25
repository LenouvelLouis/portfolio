import { useState } from 'react'
import { LanguageProvider } from './LanguageContext'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import CaseStudy from './CaseStudy'
import { projects } from './projectsData'
import type { Project } from './projectsData'

export default function Portfolio() {
  const [page, setPage] = useState('home')
  const [project, setProject] = useState<Project>(projects[0])

  const openProject = (p: Project) => {
    setProject(p)
    setPage('case')
    window.scrollTo(0, 0)
  }

  const navigate = (p: string) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  return (
    <LanguageProvider>
      <div className="bg-background text-foreground min-h-screen font-sans">
        <Navigation page={page} setPage={navigate} />
        {page === 'home' && <Hero setPage={navigate} />}
        {page === 'about' && <About />}
        {page === 'work' && <Projects openProject={openProject} />}
        {page === 'contact' && <Contact />}
        {page === 'case' && <CaseStudy project={project} setPage={navigate} />}
      </div>
    </LanguageProvider>
  )
}
