import { useLanguage } from './LanguageContext'
import ProjectViz from './ProjectViz'
import { projects } from './projectsData'
import type { Project } from './projectsData'

interface ProjectsProps {
  openProject?: (p: Project) => void
}

export default function Projects({ openProject }: ProjectsProps) {
  const { language } = useLanguage()

  return (
    <main className="px-6 md:px-10 pt-16 md:pt-[72px] pb-24 max-w-[1400px] mx-auto">
      <div className="flex gap-2.5 items-center mb-6 text-[11px] text-muted-foreground font-mono tracking-wider">
        <span className="w-5 h-px bg-muted-foreground" />
        <span>PROJETS {projects.length} ENTRÉES</span>
      </div>
      <h1 className="font-serif text-4xl md:text-[64px] font-normal tracking-tight m-0 mb-14">
        {language === 'fr' ? (
          <>Choses que j'ai <em className="text-burnt">construites</em>.</>
        ) : (
          <>Things I've <em className="text-burnt">built</em>.</>
        )}
      </h1>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((p) => (
          <article
            key={p.n}
            onClick={() => openProject?.(p)}
            className="bg-paper border border-line grid grid-cols-1 md:grid-cols-[1fr_1.2fr] overflow-hidden cursor-pointer hover:border-muted-foreground transition-colors"
          >
            <ProjectViz n={p.n} hue={p.hue} metric={p.metric} />
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground tracking-wider mb-3">
                  <span>{p.n} / {p.tag.toUpperCase()}</span>
                  <span>{p.year} · {p.role.toUpperCase()}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-[40px] font-normal tracking-tight m-0 mb-4">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed m-0" style={{ textWrap: 'pretty' }}>
                  {p.desc[language]}
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-1 border border-line text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-burnt cursor-pointer whitespace-nowrap">
                  {language === 'fr' ? 'Étude de cas →' : 'Case study →'}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
