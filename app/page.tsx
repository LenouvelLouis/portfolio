'use client'

import { useState } from 'react'
import { LanguageProvider } from '@/hooks/use-language'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
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
