import { useLanguage } from './LanguageContext'

export default function Skills() {
  const { language } = useLanguage()

  const skillsContent = {
    fr: {
      title: 'Compétences',
      categories: [
          {
              category: 'Frontend',
              skills: [
                  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
                  'Astro', 'HTML/CSS', 'UI/UX', 'Responsive Design'
              ],
          },
          {
              category: 'Backend',
              skills: [
                  'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
                  'APIs REST', 'xAPI (Learning Record Store)', 'Swagger',
                  'Architecture Web', 'Authentication & Security'
              ],
          },
          {
              category: 'IA & ML',
              skills: [
                  'Python', 'Machine Learning', 'Deep Learning',
                  'Data Science', 'Gradio', 'HuggingFace',
                  'Computer Vision', 'Classification & Segmentation'
              ],
          },
          {
              category: 'VR & 3D',
              skills: [
                  'Unity (C#)', 'Meta Quest 3/3S', 'XR Interaction Toolkit',
                  'AI Recognition in VR', 'Passthrough & AR', 'VFX Basics'
              ],
          },
          {
              category: 'Tools & Platforms',
              skills: [
                  'Git', 'GitHub', 'Docker', 'CI/CD',
                  'Elasticsearch', 'Linux',
                  'Postman', 'Agile/Scrum'
              ],
          },
      ],
    },
    en: {
      title: 'Skills',
      categories: [
          {
              category: 'Frontend',
              skills: [
                  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
                  'Astro', 'HTML/CSS', 'UI/UX', 'Design Responsive'
              ],
          },
          {
              category: 'Backend',
              skills: [
                  'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
                  'APIs REST', 'xAPI (Learning Record Store)', 'Swagger',
                  'Architecture Web', 'Authentification & Sécurité'
              ],
          },
          {
              category: 'IA & ML',
              skills: [
                  'Python', 'Apprentissage Automatique', 'Deep Learning',
                  'Data Science', 'Gradio', 'HuggingFace',
                  'Vision par Ordinateur', 'Classification & Segmentation'
              ],
          },
          {
              category: 'VR & 3D',
              skills: [
                  'Unity (C#)', 'Meta Quest 3/3S', 'XR Interaction Toolkit',
                  'Reconnaissance IA en VR', 'Passthrough & Réalité Mixte', 'Bases VFX'
              ],
          },
          {
              category: 'Outils & Plateformes',
              skills: [
                  'Git', 'GitHub', 'Docker', 'CI/CD',
                  'Elasticsearch', 'Linux',
                  'Postman', 'Jira', 'Méthodes Agiles (Scrum)'
              ],
          },
      ],
    },
  }

  const current = skillsContent[language]

  return (
    <section className="px-12 py-12">
      <h3 className="text-3xl font-bold text-foreground mb-8">{current.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {current.categories.map((category, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-foreground mb-4">{category.category}</h4>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
