'use client'

import { useLanguage } from '@/hooks/use-language'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const { language } = useLanguage()

  const projectsContent = {
    fr: [
      {
        title: 'California Housing API',
        description: 'Application Gradio pour prédire la valeur médiane des maisons basée sur les caractéristiques. Déployée sur HuggingFace Spaces avec Machine Learning.',
        tags: ['Python', 'Machine Learning', 'Gradio', 'HuggingFace'],
        year: '2025',
        link: 'https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API',
        github: 'https://github.com/LenouvelLouis',
        viewText: 'Voir le projet →',
      },
      {
        title: 'Portail IKIGAI',
        description: 'Plateforme web centralisée offrant un accès à une gamme de jeux éducatifs innovants. Contribution à l\'optimisation et nouvelles fonctionnalités.',
        tags: ['Full Stack', 'React', 'Node.js', 'PostgreSQL'],
        year: '2023 - Présent',
        link: null,
        github: null,
        viewText: 'Voir le projet →',
      },
    ],
    en: [
      {
        title: 'California Housing API',
        description: 'Gradio application to predict median house values based on features. Deployed on HuggingFace Spaces with Machine Learning.',
        tags: ['Python', 'Machine Learning', 'Gradio', 'HuggingFace'],
        year: '2025',
        link: 'https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API',
        github: 'https://github.com/LenouvelLouis',
        viewText: 'View project →',
      },
      {
        title: 'IKIGAI Portal',
        description: 'Centralized web platform providing access to a range of innovative educational games. Contributing to optimization and new features.',
        tags: ['Full Stack', 'React', 'Node.js', 'PostgreSQL'],
        year: '2023 - Present',
        link: null,
        github: null,
        viewText: 'View project →',
      },
    ],
  }

  const projects = projectsContent[language]
  const title = language === 'fr' ? 'Projets' : 'Projects'

  return (
    <section className="px-12 py-12 max-w-4xl">
      <h3 className="text-3xl font-bold text-foreground mb-8">{title}</h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 items-center">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  {project.viewText}
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  {language === 'fr' ? 'Code' : 'Code'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
