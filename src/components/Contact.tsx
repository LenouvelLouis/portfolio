import { useState } from 'react'
import { useLanguage } from './LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const content = {
    fr: {
      title: 'Me contacter',
      description: 'Intéressé par une collaboration ou une discussion sur les technologies web et l\'IA ? N\'hésitez pas à me contacter !',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Localisation',
      location: 'Île-de-France, France',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      messagePlaceholder: 'Votre message',
      submitButton: 'Envoyer',
    },
    en: {
      title: 'Contact',
      description: 'Interested in a collaboration or discussion about web technologies and AI? Feel free to reach out!',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      location: 'Île-de-France, France',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      submitButton: 'Send',
    },
  }

  const current = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="px-12 py-12 max-w-4xl">
      <h3 className="text-3xl font-bold text-foreground mb-8">{current.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {current.description}
          </p>
          <div className="space-y-4">
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={current.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder={current.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            placeholder={current.messagePlaceholder}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {current.submitButton}
          </button>
        </form>
      </div>
    </section>
  )
}
