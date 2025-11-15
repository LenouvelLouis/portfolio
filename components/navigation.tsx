'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export default function Navigation({ activeSection, setActiveSection }) {
  const { language } = useLanguage()

  const labels = {
    fr: {
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
    en: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
  }

  const sections = [
    { id: 'about', label: labels[language].about },
    { id: 'projects', label: labels[language].projects },
    { id: 'skills', label: labels[language].skills },
    { id: 'contact', label: labels[language].contact },
  ]

  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-border bg-card p-8 flex flex-col justify-between">
      <div>
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-foreground mb-1">Louis Lenouvel</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer & AI Specialist</p>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/LenouvelLouis" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/louis-lenouvel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-accent transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </aside>
  )
}
