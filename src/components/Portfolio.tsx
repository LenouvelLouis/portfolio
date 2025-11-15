import { useState } from 'react'
import { LanguageProvider } from './LanguageContext'
import Navigation from './Navigation'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <LanguageProvider>
      <div className="flex min-h-screen bg-background">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 overflow-auto">
          <Hero />
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </LanguageProvider>
  )
}
