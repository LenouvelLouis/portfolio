import { useLanguage } from './LanguageContext'
import ProjectViz from './ProjectViz'
import { projects, BASE } from './projectsData'

interface HeroProps {
  setPage: (page: string) => void
}

export default function Hero({ setPage }: HeroProps) {
  const { language } = useLanguage()

  return (
    <main className="px-6 md:px-10 pt-16 md:pt-[72px] pb-24 max-w-[1400px] mx-auto">
      {/* Hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-start mb-24">
        <div>
          <div className="flex gap-2.5 items-center mb-8 text-[11px] text-muted-foreground font-mono tracking-wider">
            <span className="w-5 h-px bg-muted-foreground" />
            <span>PORTFOLIO 2026</span>
          </div>
          <h1 className="font-serif text-6xl md:text-[88px] leading-[0.95] font-normal tracking-tight m-0">
            Data Engineer<br />
            <span className="italic text-burnt">& AI</span> craft.
          </h1>
          <p className="text-lg leading-relaxed mt-8 max-w-[440px]" style={{ textWrap: 'pretty' }}>
            {language === 'fr'
              ? "Ingénieur diplômé de l'ISEP, spécialisé en IA et Data Science. Je conçois et déploie des systèmes d'Intelligence Artificielle appliqués à des problématiques métier. À la recherche d'un CDI en Ingénierie IA / Data."
              : "Engineering graduate from ISEP, specialized in AI and Data Science. I design and deploy AI systems for real-world business challenges. Looking for a full-time position in AI / Data Engineering."}
          </p>
          <div className="flex gap-2.5 mt-8">
            <button
              onClick={() => setPage('work')}
              className="bg-foreground text-background border-none px-5 py-3 text-[13px] cursor-pointer font-sans hover:opacity-90 transition-opacity"
            >
              {language === 'fr' ? 'Voir les projets →' : 'See projects →'}
            </button>
            <button
              onClick={() => setPage('contact')}
              className="bg-transparent text-foreground border border-foreground px-5 py-3 text-[13px] cursor-pointer font-sans hover:bg-foreground hover:text-background transition-colors"
            >
              {language === 'fr' ? 'Me contacter' : 'Get in touch'}
            </button>
          </div>
        </div>

        {/* Portrait card */}
        <div className="bg-paper border border-line p-5">
          <div className="aspect-[4/5] bg-soft relative overflow-hidden">
            {/* Real portrait photo */}
            <img
              src={`${BASE}portrait.jpg`}
              alt="Louis Lenouvel"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            {/* Decorative dashed orbit overlay (kept from SVG) */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 500"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <circle cx="200" cy="250" r="180" fill="none" stroke="#c2410c" strokeWidth="1" strokeDasharray="2,3" opacity="0.55" />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <div className="text-muted-foreground mb-1">BASED</div>
              <div>Paris, FR</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">ROLE</div>
              <div>Data Eng. @ IKIGAI</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">EDU</div>
              <div>ISEP · Diplômé IA</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">STATUS</div>
              <div className="text-burnt">
                ● {language === 'fr' ? 'Dispo CDI' : 'Open for full-time'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NOW ticker */}
      <div className="py-6 border-t border-b border-line flex gap-12 text-xs font-mono text-muted-foreground overflow-hidden whitespace-nowrap">
        <span><span className="text-burnt">●</span> NOW {language === 'fr' ? 'Pipelines NLP chez IKIGAI' : 'NLP pipelines at IKIGAI'}</span>
        <span>→ {language === 'fr' ? 'Diplômé ISEP 2026' : 'ISEP Graduate 2026'}</span>
        <span>→ {language === 'fr' ? 'Lecture · Designing Data-Intensive Apps' : 'Reading · DDIA'}</span>
        <span>→ 2026 / Paris, FR</span>
      </div>

      {/* Project grid */}
      <div className="mt-20">
        <div className="flex justify-between items-baseline mb-7">
          <h2 className="font-serif text-4xl font-normal tracking-tight m-0">
            {language === 'fr' ? 'Projets récents' : 'Recent work'}
          </h2>
          <a onClick={() => setPage('work')} className="cursor-pointer text-burnt text-[13px] hover:opacity-80 transition-opacity">
            {language === 'fr' ? 'Tout voir →' : 'See all →'}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((p) => (
            <div
              key={p.n}
              onClick={() => setPage('work')}
              className="bg-paper border border-line cursor-pointer overflow-hidden hover:border-muted-foreground transition-colors"
            >
              <ProjectViz n={p.n} hue={p.hue} metric={p.metric} small />
              <div className="p-5">
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-2.5 tracking-wider">
                  <span>{p.n} / {p.tag.toUpperCase()}</span>
                  <span>{p.year}</span>
                </div>
                <div className="font-serif text-[26px] font-normal mb-2">{p.title}</div>
                <div className="text-[13px] text-muted-foreground leading-relaxed">{p.desc[language]}</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 border border-line text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills quick view */}
      <div className="mt-20 pt-8 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
          <div className="font-serif text-[22px] italic">
            {language === 'fr' ? 'Compétences clés' : 'Core skills'}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              ['Python', 'FastAPI', 'SQL', 'Airflow'],
              ['PyTorch', 'Transformers', 'spaCy', 'FAISS'],
              ['Docker', 'K8s', 'Terraform', 'AWS'],
              ['dbt', 'Kafka', 'Postgres', 'Parquet'],
            ].map((col, i) => (
              <div key={i}>
                {col.map((s) => (
                  <div key={s} className="py-1">{s}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
