import { useState } from 'react'
import { useLanguage } from './LanguageContext'
import Bullet from './Bullet'
import LineTrack from './LineTrack'
import { archives, categories, projects } from './projectsData'
import type { Category, Project } from './projectsData'

function Card({ p }: { p: Project }) {
  const { t } = useLanguage()
  const extra = p.stack.length - 5

  return (
    <a
      href={`#/projets/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-card p-5 no-underline transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_10px_30px_-18px_rgba(17,26,43,.45)] sm:p-6"
    >
      <div className="flex items-start gap-3.5">
        <Bullet code={p.code} color={p.color} ink={p.ink} size={40} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-muted">
            <span>{p.year}</span>
            <span aria-hidden="true">·</span>
            <span>{t(p.context)}</span>
            {p.status && (
              <span className="rounded-full bg-signal px-2 py-0.5 text-[11px] font-semibold text-[#111a2b]">
                {t(p.status)}
              </span>
            )}
          </div>
          <h3 className="m-0 mt-0.5 text-[22px] font-bold leading-tight tracking-tight sm:text-2xl">{p.title}</h3>
        </div>
        {p.figure && (
          <div className="hidden text-right sm:block">
            <div className="whitespace-nowrap text-lg font-extrabold tabular-nums tracking-tight">{p.figure.value}</div>
            <div className="max-w-[130px] text-[11.5px] leading-tight text-muted">{t(p.figure.label)}</div>
          </div>
        )}
      </div>

      <p className="m-0 mt-4 text-[15px] leading-relaxed text-ink-2">{t(p.summary)}</p>

      <div className="mt-6 mb-5">
        <LineTrack stations={p.track} color={p.color} />
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-line pt-4">
        <div className="flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((s) => (
            <span key={s} className="rounded-md bg-soft px-2 py-0.5 text-[12px] text-ink-2">
              {s}
            </span>
          ))}
          {extra > 0 && <span className="px-1 py-0.5 text-[12px] text-muted">+{extra}</span>}
        </div>
        <span className="whitespace-nowrap text-sm font-semibold text-ink transition-transform group-hover:translate-x-0.5">
          {t({ fr: 'Détails', en: 'Details' })} →
        </span>
      </div>
    </a>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = projects.filter((p) => filter === 'all' || p.cat.includes(filter))
  const limited = filter === 'all' && !showAll
  const list = limited ? filtered.filter((p) => p.featured) : filtered

  return (
    <section id="projets" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              {t({ fr: 'Projets', en: 'Work' })}
            </p>
            <h2 className="m-0 mt-3 text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              {t({ fr: 'Le plan du réseau', en: 'The network map' })}
            </h2>
          </div>
          <p className="m-0 max-w-[520px] text-[16px] leading-relaxed text-ink-2">
            {t({
              fr: "Chaque projet est une ligne, et chaque station une étape de son pipeline. Les terminus sont en noir : là où la donnée entre, là où elle ressort.",
              en: 'Each project is a line, and each station a step in its pipeline. Termini are in black: where data comes in, where it comes out.',
            })}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label={t({ fr: 'Filtrer', en: 'Filter' })}>
          {categories.map((c) => {
            const count = c.k === 'all' ? projects.length : projects.filter((p) => p.cat.includes(c.k as Category)).length
            const active = filter === c.k
            return (
              <button
                key={c.k}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c.k)}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active ? 'border-ink bg-ink text-paper' : 'border-line bg-card text-ink-2 hover:border-ink/40'
                }`}
              >
                {t(c.label)} <span className={active ? 'text-paper/60' : 'text-muted'}>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {list.map((p) => (
            <Card key={p.slug} p={p} />
          ))}
        </div>

        {limited && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="cursor-pointer rounded-full border border-ink/25 bg-transparent px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              {t({ fr: `Voir les ${projects.length - list.length} autres lignes`, en: `Show ${projects.length - list.length} more lines` })}
            </button>
          </div>
        )}

        {(filter === 'all' || filter === 'web') && (
          <div className="mt-16">
            <h3 className="m-0 text-lg font-bold tracking-tight">
              {t({ fr: 'Lignes historiques', en: 'Heritage lines' })}{' '}
              <span className="font-normal text-muted">
                {t({ fr: '· premiers projets, BUT et école', en: '· early university projects' })}
              </span>
            </h3>
            <ul className="m-0 mt-4 list-none divide-y divide-line border-y border-line p-0">
              {archives.map((a) => (
                <li key={a.title}>
                  <a
                    href={a.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-0.5 py-3 no-underline transition-colors hover:bg-soft/60 sm:grid-cols-[200px_1fr_140px_auto] sm:px-2"
                  >
                    <span className="font-semibold">{a.title}</span>
                    <span className="order-3 col-span-2 text-sm text-muted sm:order-none sm:col-span-1">{t(a.desc)}</span>
                    <span className="hidden text-sm text-ink-2 sm:block">{a.stack}</span>
                    <span className="text-sm text-muted" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
