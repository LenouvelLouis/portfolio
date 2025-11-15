import { useLanguage } from './LanguageContext'
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
          image: '/california-houses.jpg',
      },
      {
        title: 'Portail IKIGAI',
        description: 'Plateforme web centralisée offrant un accès à une gamme de jeux éducatifs innovants. Contribution à l\'optimisation et nouvelles fonctionnalités.',
        tags: ['Full Stack', 'React', 'Node.js', 'PostgreSQL'],
        year: '2023 - Présent',
        link: null,
        github: null,
        viewText: 'Voir le projet →',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
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
        image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8cfb2?w=800&q=80',
      },
      {
        title: 'IKIGAI Portal',
        description: 'Centralized web platform providing access to a range of innovative educational games. Contributing to optimization and new features.',
        tags: ['Full Stack', 'React', 'Node.js', 'PostgreSQL'],
        year: '2023 - Present',
        link: null,
        github: null,
        viewText: 'View project →',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      },
    ],
  }

  const projects = projectsContent[language]
  const title = language === 'fr' ? 'Projets' : 'Projects'

  return (
    <section className="px-4 md:px-12 py-12 max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{title}</h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg border border-border group h-64 md:h-80 hover:shadow-lg transition-shadow"
          >
            <img 
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors z-10" />
            
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                <h4 className="text-lg md:text-xl font-semibold text-white">{project.title}</h4>
                <span className="text-xs md:text-sm text-gray-200 whitespace-nowrap">{project.year}</span>
              </div>
              <p className="text-gray-100 mb-4 text-sm md:text-base line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 md:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs md:text-sm border border-accent/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-xs md:text-sm font-medium"
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
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-xs md:text-sm font-medium"
                  >
                    <Github size={16} />
                    {language === 'fr' ? 'Code' : 'Code'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
