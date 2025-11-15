import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { useLanguage } from './LanguageContext'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const { language } = useLanguage()

  const labels = {
    fr: {
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      cv: 'CV',
    },
    en: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cv: 'CV',
    },
  }

  const sections = [
    { id: 'about', label: labels[language].about },
    { id: 'projects', label: labels[language].projects },
    { id: 'skills', label: labels[language].skills },
    { id: 'contact', label: labels[language].contact },
  ]

  return (
    <aside className="w-full h-auto md:h-screen md:w-64 border-r border-border bg-card p-4 md:p-8 flex flex-col md:justify-between">
      <div>
        <div className="mb-6 md:mb-12 hidden md:block">
          <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">Louis Lenouvel</h1>
          <p className="text-xs md:text-sm text-muted-foreground">Full Stack Developer & AI Specialist</p>
        </div>

        <nav className="space-y-1 flex md:flex-col gap-2 md:gap-0 flex-wrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg transition-colors text-sm md:text-base flex-1 md:flex-none text-center md:text-left ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              {section.label}
            </button>
          ))}
          <a
            href="/CV Lenouvel Louis.pdf"
            download
            className="px-4 py-2 rounded-lg transition-colors text-sm md:text-base text-foreground hover:bg-muted flex-1 md:flex-none text-center md:text-left"
          >
            {labels[language].cv}
          </a>
        </nav>
      </div>

      <div className="flex gap-4 mt-6 md:mt-0">
        <a href="https://github.com/LenouvelLouis" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/louis-lenouvel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:mr.lenouvel.louis@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </aside>
  )
}
