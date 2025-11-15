'use client'

import { useLanguage } from '@/hooks/use-language'

export default function Skills() {
  const { language } = useLanguage()

  const skillsContent = {
    fr: {
      title: 'Compétences',
      categories: [
        {
          category: 'Frontend',
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
        },
        {
          category: 'Backend',
          skills: ['Node.js', 'PostgreSQL', 'APIs REST', 'Architecture Web','MariaDB'],
        },
        {
          category: 'IA & ML',
          skills: ['Machine Learning', 'Data Science', 'Python', 'Gradio', 'HuggingFace'],
        },
        {
          category: 'Tools & Platforms',
          skills: ['Git', 'GitHub', 'HuggingFace', 'Linux', "GitLab"],
        },
      ],
    },
    en: {
      title: 'Skills',
      categories: [
        {
          category: 'Frontend',
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
        },
        {
          category: 'Backend',
          skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'Web Architecture','MariaDB'],
        },
        {
          category: 'AI & ML',
          skills: ['Machine Learning', 'Data Science', 'Python', 'Gradio', 'HuggingFace'],
        },
        {
          category: 'Tools & Platforms',
          skills: ['Git', 'GitHub', 'HuggingFace', 'Vercel', 'Linux', "GitLab"],
        },
      ],
    },
  }

  const current = skillsContent[language]

  return (
    <section className="px-12 py-12 max-w-4xl">
      <h3 className="text-3xl font-bold text-foreground mb-8">{current.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
