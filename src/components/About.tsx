import { useLanguage } from './LanguageContext'
import type { T } from './projectsData'

interface Stop {
  when: T
  title: T
  org: string
  note: T
  color: string
  transfer?: T
  next?: boolean
}

const stops: Stop[] = [
  {
    when: { fr: '2021 → 2023', en: '2021 → 2023' },
    title: { fr: 'BUT Informatique', en: 'Computer Science degree (BUT)' },
    org: 'Université Paris Cité',
    note: {
      fr: "Les bases : algorithmique, Java, C++, bases de données, web. La plupart des lignes historiques viennent de là.",
      en: 'The foundations: algorithms, Java, C++, databases, web. Most of the heritage lines come from there.',
    },
    color: '#6b7280',
  },
  {
    when: { fr: '2023 → 2026', en: '2023 → 2026' },
    title: { fr: 'Cycle ingénieur, spécialité Data & IA', en: 'Engineering degree, Data & AI major' },
    org: 'ISEP Paris',
    note: {
      fr: 'Machine learning, deep learning, vision par ordinateur, et beaucoup de projets en équipe.',
      en: 'Machine learning, deep learning, computer vision, and a lot of team projects.',
    },
    color: '#1d4ed8',
  },
  {
    when: { fr: '2023 → 2026', en: '2023 → 2026' },
    title: { fr: 'Data Engineer', en: 'Data Engineer' },
    org: 'IKIGAI Games for Citizens',
    note: {
      fr: "Des jeux pédagogiques utilisés par des étudiants. J'y ai construit les pipelines de learning analytics (xAPI), la supervision et les sauvegardes de la plateforme, le suivi d'audience, puis le RAG souverain.",
      en: 'Educational games used by students. I built the learning analytics pipelines (xAPI), platform monitoring and backups, audience tracking, and then the sovereign RAG.',
    },
    color: '#e0312b',
  },
  {
    when: { fr: '2026', en: '2026' },
    title: { fr: "Semestre d'échange", en: 'Exchange semester' },
    org: 'Hanze University, Groningen (NL)',
    note: {
      fr: 'Cours en anglais, modélisation de systèmes énergétiques et projets en équipe internationale.',
      en: 'Courses in English, energy system modelling and international team projects.',
    },
    color: '#f5a100',
  },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="parcours" className="scroll-mt-20 border-t border-line bg-card">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            {t({ fr: 'Parcours', en: 'Path' })}
          </p>
          <h2 className="m-0 mt-3 text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            {t({ fr: "Le trajet jusqu'ici", en: 'The ride so far' })}
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-2">
            <p className="m-0">
              {t({
                fr: "J'ai commencé par le développement web en BUT informatique, puis j'ai travaillé trois ans comme data engineer chez IKIGAI.",
                en: 'I started with web development during my computer science degree, then worked three years as a data engineer at IKIGAI.',
              })}
            </p>
            <p className="m-0">
              {t({
                fr: "Aujourd'hui je travaille surtout sur du machine learning et du RAG. J'aime suivre un projet de bout en bout, des données jusqu'au déploiement.",
                en: 'Today I mostly work on machine learning and RAG. I like following a project from end to end, from the data to deployment.',
              })}
            </p>
            <p className="m-0 text-muted">
              {t({
                fr: "En dehors du code, je fais du sport, de l'urbex, et j'écoute beaucoup Tame Impala.",
                en: 'Outside of code, I do sport and urban exploring, and I listen to a lot of Tame Impala.',
              })}
            </p>
          </div>
        </div>

        <ol className="relative m-0 list-none p-0">
          {stops.map((s, i) => {
            const last = i === stops.length - 1
            return (
              <li key={i} className="relative grid grid-cols-[28px_1fr] gap-x-5 pb-10 last:pb-0">
                {/* rail vers la station suivante */}
                {!last && (
                  <span
                    className="absolute left-[11px] top-3 w-[6px] rounded-full"
                    style={{
                      bottom: -12,
                      background: stops[i + 1].next
                        ? 'repeating-linear-gradient(to bottom, var(--muted) 0 6px, transparent 6px 12px)'
                        : s.color,
                    }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative z-10 mt-0.5 block h-7 w-7 rounded-full bg-card"
                  style={{ border: `5px solid ${s.color}`, borderStyle: s.next ? 'dashed' : 'solid' }}
                  aria-hidden="true"
                />
                <div>
                  <div className="text-sm font-semibold tabular-nums text-muted">{t(s.when)}</div>
                  <h3 className="m-0 mt-1 text-xl font-bold tracking-tight sm:text-[22px]">{t(s.title)}</h3>
                  {s.org && <div className="mt-0.5 text-[15px] font-medium text-ink-2">{s.org}</div>}
                  <p className="m-0 mt-2 max-w-[560px] text-[15px] leading-relaxed text-muted">{t(s.note)}</p>
                  {s.transfer && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] text-ink-2">
                      <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#e0312b' }} aria-hidden="true" />
                      {t(s.transfer)}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
