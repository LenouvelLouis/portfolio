import { useLanguage } from './LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const sections = [
    [
      '01',
      'BIO',
      language === 'fr'
        ? "Ingénieur diplômé de l'ISEP Paris, spécialisé en IA et Data Science. Je conçois et déploie des systèmes d'Intelligence Artificielle (Machine Learning, Deep Learning) appliqués à des problématiques métier."
        : "Engineering graduate from ISEP Paris, specialized in AI and Data Science. I design and deploy AI systems (Machine Learning, Deep Learning) applied to real-world business challenges.",
    ],
    [
      '02',
      language === 'fr' ? 'SPÉCIALITÉ' : 'FOCUS',
      language === 'fr'
        ? "Parallèlement, je me spécialise en Intelligence Artificielle, avec un intérêt marqué pour les pipelines NLP et les infrastructures de données hautement scalables."
        : "In parallel, I major in AI with a strong focus on NLP pipelines and highly scalable data infrastructures.",
    ],
    [
      '03',
      language === 'fr' ? 'VALEURS' : 'VALUES',
      language === 'fr'
        ? "Passionné par l'utilité sociale. Je crois que les meilleurs systèmes sont ceux qu'on comprend et qu'on peut maintenir."
        : "Passionate about social utility. The best systems are the ones you can understand and maintain.",
    ],
  ]

  const timeline = [
    {
      y: '2024 - ' + (language === 'fr' ? "aujourd'hui" : 'present'),
      r: 'Data Engineer',
      o: 'IKIGAI Games for Citizens',
    },
    {
      y: '2023 - 2026',
      r: language === 'fr' ? 'Diplôme Ingénieur · Spé. IA' : 'Engineering Degree · AI',
      o: 'ISEP Paris',
    },
  ]

  return (
    <main className="px-6 md:px-10 pt-16 md:pt-[72px] pb-24 max-w-[1100px] mx-auto">
      <div className="flex gap-2.5 items-center mb-6 text-[11px] text-muted-foreground font-mono tracking-wider">
        <span className="w-5 h-px bg-muted-foreground" />
        <span>À PROPOS / ABOUT</span>
      </div>
      <h1 className="font-serif text-4xl md:text-[64px] font-normal leading-[1.05] tracking-tight m-0 mb-12" style={{ textWrap: 'balance' }}>
        {language === 'fr' ? (
          <>Construire des <em className="text-burnt">systèmes de données</em> qu'on comprend et qu'on peut maintenir.</>
        ) : (
          <>Building <em className="text-burnt">data systems</em> you can read and maintain.</>
        )}
      </h1>

      {sections.map(([n, label, txt]) => (
        <div key={n} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 mb-10 text-base leading-[1.7]">
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider pt-2">
            {n} / {label}
          </div>
          <div>{txt}</div>
        </div>
      ))}

      <h2 className="font-serif text-4xl font-normal mt-16 md:mt-[72px] mb-6">
        {language === 'fr' ? 'Parcours' : 'Timeline'}
      </h2>
      <div className="border-t border-line">
        {timeline.map((e, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-2 md:gap-10 py-6 border-b border-line items-baseline">
            <div className="font-mono text-xs text-muted-foreground">{e.y}</div>
            <div className="font-serif text-xl">{e.r}</div>
            <div className="text-[13px] text-muted-foreground">{e.o}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
