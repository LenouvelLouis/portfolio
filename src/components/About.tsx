import { useLanguage } from './LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
      fr: {
          title: 'À propos',
          paragraphs: [
              'Apprenti Data Ingénieur chez IKIGAI Games for Citizens (ISEP Paris). Je suis en charge de l\'optimisation du portail web IKIGAI, notamment via le développement d\'API performantes (Python/FastAPI) et la mise en place de pipelines ETL robustes.',
              'Parallèlement, je me spécialise en Intelligence Artificielle. Cette formation me confère une expertise technique et analytique, avec un intérêt marqué pour les pipelines orientés Traitement Automatique du Langage Naturel (NLP) et les infrastructures de données hautement scalables.',
              'Mes domaines d\'expertise incluent l\'Ingénierie de la Donnée (ETL/DevOps) et l\'IA/ML. Je suis passionné par l\'utilité sociale et la création de solutions technologiques à fort impact public.',
          ],
      },
      en: {
          title: 'About',
          paragraphs: [
              'Data Engineer Apprentice at IKIGAI Games for Citizens (ISEP Paris). I am responsible for optimizing the IKIGAI web portal, notably through the development of high-performance APIs (Python/FastAPI) and the implementation of robust ETL pipelines.',
              'Concurrently, I am specializing in Artificial Intelligence. This specialization provides me with technical and analytical expertise, with a strong interest in Natural Language Processing (NLP)-oriented pipelines and highly scalable data infrastructures.',
              'My areas of expertise include Data Engineering (ETL/DevOps) and AI/ML. I am passionate about social utility and creating technological solutions with significant public impact.',
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
