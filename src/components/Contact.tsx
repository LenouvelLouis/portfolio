import { useLanguage } from './LanguageContext'

export default function Contact() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: 'Me contacter',
      description: 'Intéressé par une collaboration ou une discussion sur les technologies web et l\'IA ? N\'hésitez pas à me contacter !',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Localisation',
      location: 'Île-de-France, France',
      emailLabel: 'Email',
    },
    en: {
      title: 'Contact',
      description: 'Interested in a collaboration or discussion about web technologies and AI? Feel free to reach out!',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      location: 'Île-de-France, France',
      emailLabel: 'Email',
    },
  }

  const current = content[language]

  return (
    <section className="px-12 py-12 max-w-4xl">
      <h3 className="text-3xl font-bold text-foreground mb-8">{current.title}</h3>
      <div className="space-y-4">
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {current.description}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">{current.emailLabel}</p>
            <a 
              href="mailto:mr.lenouvel.louis@gmail.com" 
              className="text-accent hover:text-accent/80 transition-colors"
            >
              mr.lenouvel.louis@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{current.linkedinLabel}</p>
            <a href="https://linkedin.com/in/louis-lenouvel" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
              linkedin.com/in/louis-lenouvel
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{current.githubLabel}</p>
            <a href="https://github.com/LenouvelLouis" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
              github.com/LenouvelLouis
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{current.locationLabel}</p>
            <p className="text-foreground">{current.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
