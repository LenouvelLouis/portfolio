import { useLanguage } from './LanguageContext'
import { BASE } from './projectsData'

export default function Contact() {
  const { language } = useLanguage()

  const links = [
    { l: 'EMAIL', v: 'mr.lenouvel.louis@gmail.com', href: 'mailto:mr.lenouvel.louis@gmail.com' },
    { l: 'LINKEDIN', v: 'linkedin.com/in/louis-lenouvel', href: 'https://linkedin.com/in/louis-lenouvel' },
    { l: 'GITHUB', v: 'github.com/LenouvelLouis', href: 'https://github.com/LenouvelLouis' },
    {
      l: 'CV / PDF',
      v: language === 'fr' ? 'Télécharger (FR)' : 'Download (EN)',
      href: `${BASE}${language === 'fr' ? 'CV_Lenouvel_Louis_FR.pdf' : 'CV_Lenouvel_Louis_EN.pdf'}`,
    },
  ]

  return (
    <main className="px-6 md:px-10 pt-16 md:pt-[72px] pb-24 max-w-[1000px] mx-auto">
      <div className="flex gap-2.5 items-center mb-6 text-[11px] text-muted-foreground font-mono tracking-wider">
        <span className="w-5 h-px bg-muted-foreground" />
        <span>CONTACT</span>
      </div>
      <h1 className="font-serif text-5xl md:text-[88px] font-normal leading-[0.95] tracking-tight m-0 mb-8">
        {language === 'fr' ? (
          <>On <em className="text-burnt">discute</em> ?</>
        ) : (
          <>Let's <em className="text-burnt">talk</em>.</>
        )}
      </h1>
      <p className="text-lg text-muted-foreground max-w-[540px] leading-relaxed mb-12">
        {language === 'fr'
          ? "Disponible pour un CDI en Ingénierie IA / Data à partir de septembre 2026. Toujours partant pour échanger sur la data, l'IA ou un projet à impact."
          : "Available for a full-time AI / Data Engineering position from September 2026. Always up to chat about data, AI or any high-impact project."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
        {links.map((c) => (
          <a
            key={c.l}
            href={c.href}
            target={c.l !== 'EMAIL' ? '_blank' : undefined}
            rel={c.l !== 'EMAIL' ? 'noopener noreferrer' : undefined}
            className="bg-paper p-6 md:p-8 no-underline text-foreground flex flex-col gap-3 hover:bg-soft transition-colors"
          >
            <div className="text-[10px] font-mono text-muted-foreground tracking-wider">{c.l}</div>
            <div className="font-serif text-xl md:text-2xl">
              {c.v} <span className="text-burnt">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-muted-foreground font-mono">
        <span>© 2026 LOUIS LENOUVEL</span>
        <span>PARIS · UTC+1</span>
        <span>{language === 'fr' ? 'DISPONIBLE CDI' : 'OPEN FOR FULL-TIME'}</span>
      </div>
    </main>
  )
}
