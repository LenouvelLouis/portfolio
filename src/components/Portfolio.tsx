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
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
          <h2 className="font-bold text-foreground">Louis Lenouvel</h2>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="w-10 h-10 flex items-center justify-center text-xl"
          >
            ☰
          </button>
        </header>

        {/* Desktop Sidebar */}
        <div className="hidden md:fixed md:left-0 md:top-0 md:w-64 md:h-screen md:z-40 md:block">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setMobileNavOpen(false)}
            />
            <div className="fixed top-16 left-0 right-0 bg-card border-b border-border z-40 md:hidden p-4 shadow-lg">
              <Navigation activeSection={activeSection} setActiveSection={(section) => {
                setActiveSection(section)
                setMobileNavOpen(false)
              }} />
            </div>
          </>
        )}

        {/* Main Content */}
        <main className="pt-16 md:pt-0 md:ml-64 w-full md:w-auto overflow-auto">
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
