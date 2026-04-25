import { useLanguage } from './LanguageContext'
import ProjectViz from './ProjectViz'
import { projects } from './projectsData'
import type { Project } from './projectsData'

interface CaseStudyProps {
  project: Project
  setPage: (page: string) => void
}

export default function CaseStudy({ project, setPage }: CaseStudyProps) {
  const { language } = useLanguage()
  const p = project

  const nextP = projects[(projects.findIndex((x) => x.n === p.n) + 1) % projects.length]

  return (
    <main className="px-6 md:px-10 pt-14 pb-24 max-w-[1200px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center mb-6 text-xs text-muted-foreground font-mono tracking-wide">
        <a onClick={() => setPage('work')} className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
          {language === 'fr' ? 'Projets' : 'Work'}
        </a>
        <span>/</span>
        <span className="text-foreground">{p.title}</span>
      </div>

      {/* Header */}
      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mb-12 items-end">
        <div>
          <div className="flex gap-2.5 items-center mb-5 text-[11px] font-mono text-burnt tracking-wider">
            <span>{p.n} / {p.tag.toUpperCase()}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{p.year} · {p.role}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-[80px] font-normal leading-[0.98] tracking-tight m-0">
            {p.title}
          </h1>
        </div>
        <p className="text-[17px] leading-relaxed m-0" style={{ textWrap: 'pretty' }}>
          {p.desc[language]}
        </p>
      </header>

      {/* Hero visual */}
      <div className="mb-16">
        <ProjectViz n={p.n} hue={p.hue} metric={p.metric} />
      </div>

      {/* Meta strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line mb-16 md:mb-[72px]">
        {[
          { l: language === 'fr' ? 'ANNÉE' : 'YEAR', v: p.year },
          { l: language === 'fr' ? 'RÔLE' : 'ROLE', v: p.role },
          { l: language === 'fr' ? 'CATÉGORIE' : 'CATEGORY', v: p.tag },
          { l: language === 'fr' ? 'IMPACT' : 'IMPACT', v: p.metric },
        ].map((m) => (
          <div key={m.l} className="bg-paper p-5">
            <div className="text-[10px] font-mono text-muted-foreground tracking-wider mb-2">{m.l}</div>
            <div className="font-serif text-xl md:text-[22px]">{m.v}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 mb-14">
        <div className="font-mono text-[10px] text-muted-foreground tracking-wider pt-2">
          01 / STACK
        </div>
        <div>
          <h2 className="font-serif text-3xl font-normal m-0 mb-4 tracking-tight">
            {language === 'fr' ? 'Technologies' : 'Tech stack'}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="text-[11px] font-mono px-2.5 py-1 border border-line text-muted-foreground bg-paper">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 mb-14">
        <div className="font-mono text-[10px] text-muted-foreground tracking-wider pt-2">
          02 / LIENS
        </div>
        <div className="flex flex-wrap gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-5 py-3 text-[13px] no-underline font-sans hover:opacity-90 transition-opacity"
            >
              GitHub →
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-foreground border border-foreground px-5 py-3 text-[13px] no-underline font-sans hover:bg-foreground hover:text-background transition-colors"
            >
              {language === 'fr' ? 'Voir le projet →' : 'View project →'}
            </a>
          )}
        </div>
      </section>

      {/* Next project */}
      <div
        onClick={() => setPage('work')}
        className="border-t border-b border-line py-8 cursor-pointer flex justify-between items-center hover:bg-soft/50 transition-colors"
      >
        <div>
          <div className="text-[11px] font-mono text-muted-foreground tracking-wider mb-2">
            {(language === 'fr' ? 'PROJET SUIVANT' : 'NEXT PROJECT')} {nextP.n}
          </div>
          <div className="font-serif text-3xl md:text-[44px] tracking-tight">{nextP.title}</div>
        </div>
        <div className="text-3xl text-burnt">→</div>
      </div>
    </main>
  )
}
