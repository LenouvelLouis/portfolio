import { useLanguage } from './LanguageContext'
import Bullet from './Bullet'
import LineTrack from './LineTrack'
import { projects } from './projectsData'
import type { Project } from './projectsData'

interface CaseStudyProps {
  project: Project
  goHome: (section?: string) => void
}

export default function CaseStudy({ project: p, goHome }: CaseStudyProps) {
  const { t } = useLanguage()
  const i = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]

  return (
    <main>
      <div className="h-2 w-full" style={{ background: p.color }} aria-hidden="true" />
      <div className="mx-auto max-w-[1040px] px-4 pb-20 pt-8 sm:px-8 sm:pt-12">
        <button
          onClick={() => goHome('projets')}
          className="cursor-pointer border-0 bg-transparent p-0 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          ← {t({ fr: 'Tous les projets', en: 'All projects' })}
        </button>

        <header className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <Bullet code={p.code} color={p.color} ink={p.ink} size={72} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span>{p.year}</span>
              <span aria-hidden="true">·</span>
              <span>{t(p.context)}</span>
              {p.status && (
                <span className="rounded-full bg-signal px-2 py-0.5 text-[12px] font-semibold text-[#111a2b]">{t(p.status)}</span>
              )}
            </div>
            <h1 className="m-0 mt-1 text-[40px] font-extrabold leading-[1] tracking-[-0.035em] sm:text-6xl">{p.title}</h1>
            <p className="m-0 mt-5 max-w-[720px] text-[18px] leading-relaxed text-ink-2">{t(p.summary)}</p>
          </div>
        </header>

        <div className="mt-12 rounded-2xl border border-line bg-card px-4 py-8 sm:px-8">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            {t({ fr: 'Le tracé', en: 'The route' })}
          </div>
          <LineTrack stations={p.track} color={p.color} size="lg" animate />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_260px]">
          <section>
            <h2 className="m-0 text-2xl font-bold tracking-tight">{t({ fr: "Ce que j'ai fait", en: 'What I did' })}</h2>
            <ul className="m-0 mt-5 list-none space-y-4 p-0">
              {p.highlights.map((h, k) => (
                <li key={k} className="grid grid-cols-[18px_1fr] gap-3 text-[16px] leading-relaxed text-ink-2">
                  <span
                    className="mt-[7px] block h-3 w-3 rounded-full bg-card"
                    style={{ border: `3px solid ${p.color}` }}
                    aria-hidden="true"
                  />
                  <span>{t(h)}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="space-y-8">
            {p.figure && (
              <div className="rounded-2xl bg-board p-5 text-white">
                <div className="text-4xl font-extrabold tabular-nums tracking-tight text-signal">{p.figure.value}</div>
                <div className="mt-1 text-sm text-white/70">{t(p.figure.label)}</div>
              </div>
            )}
            <div>
              <h2 className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted">Stack</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-soft px-2 py-1 text-[13px] text-ink-2">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-4 py-2.5 text-center text-[15px] font-semibold text-paper no-underline transition-transform hover:-translate-y-px"
                >
                  {t({ fr: 'Code sur GitHub', en: 'Code on GitHub' })} ↗
                </a>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-4 py-2.5 text-center text-[15px] font-semibold text-ink no-underline transition-colors hover:border-ink"
                >
                  {t({ fr: 'Essayer la démo', en: 'Try the demo' })} ↗
                </a>
              )}
              {!p.github && !p.link && (
                <p className="m-0 text-sm leading-relaxed text-muted">
                  {t({
                    fr: "Projet interne : le code n'est pas public, mais j'en parle volontiers.",
                    en: "Internal project: the code isn't public, but I'm happy to walk you through it.",
                  })}
                </p>
              )}
            </div>
          </aside>
        </div>

        <nav className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {[
            { q: prev, dir: { fr: 'Ligne précédente', en: 'Previous line' }, arrow: '←' },
            { q: next, dir: { fr: 'Ligne suivante', en: 'Next line' }, arrow: '→' },
          ].map(({ q, dir, arrow }, k) => (
            <a
              key={k}
              href={`#/projets/${q.slug}`}
              className={`flex items-center gap-4 bg-card px-5 py-5 no-underline transition-colors hover:bg-soft ${
                k === 1 ? 'sm:flex-row-reverse sm:text-right' : ''
              }`}
            >
              <Bullet code={q.code} color={q.color} ink={q.ink} size={36} />
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] text-muted">
                  {k === 0 ? `${arrow} ` : ''}
                  {t(dir)}
                  {k === 1 ? ` ${arrow}` : ''}
                </span>
                <span className="block truncate text-lg font-bold">{q.title}</span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </main>
  )
}
