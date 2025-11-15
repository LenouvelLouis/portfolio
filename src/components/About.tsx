import { useLanguage } from './LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: 'À propos',
      paragraphs: [
        'Apprenti Développeur Full Stack chez IKIGAI Games for Citizens à l\'ISEP Paris. Je contribue à la création et à l\'optimisation du portail web IKIGAI, qui offre un accès centralisé à une gamme de jeux éducatifs innovants pour les étudiants et le grand public.',
        'Actuellement en école d\'ingénieur informatique, je me spécialise en intelligence artificielle. Cette spécialisation me permet de renforcer mes compétences techniques et d\'apporter des solutions avancées et pertinentes à la digitalisation des services publics et industriels.',
        'Mes domaines d\'expertise incluent le développement full stack moderne, l\'IA/ML et la création de plateformes web innovantes. Je suis passionné par l\'utilité sociale et l\'intersection entre technologie et impact public.',
      ],
    },
    en: {
      title: 'About',
      paragraphs: [
        'Full Stack Developer Apprentice at IKIGAI Games for Citizens at ISEP Paris. I contribute to the creation and optimization of the IKIGAI web portal, which provides centralized access to a range of innovative educational games for students and the general public.',
        'Currently studying Computer Engineering, I specialize in Artificial Intelligence. This specialization allows me to strengthen my technical skills and provide advanced solutions for the digitalization of public and industrial services.',
        'My areas of expertise include modern full stack development, AI/ML, and the creation of innovative web platforms. I\'m passionate about social utility and the intersection between technology and public impact.',
      ],
    },
  }

  const current = content[language]

  return (
    <section className="px-12 py-12 max-w-4xl">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-4">{current.title}</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {current.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
