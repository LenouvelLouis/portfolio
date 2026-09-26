import { useLanguage } from './LanguageContext'
import Bullet from './Bullet'
import { projects } from './projectsData'
import type { T } from './projectsData'

// nom affiché -> noms utilisés dans les stacks des projets
const groups: { title: T; skills: [string, string[]?][] }[] = [
  {
    title: { fr: 'Langages', en: 'Languages' },
    skills: [['Python'], ['SQL', ['PostgreSQL', 'SQLite', 'MySQL', 'dbt']], ['Go'], ['TypeScript'], ['Java'], ['C#']],
  },
  {
    title: { fr: 'ML & GenAI', en: 'ML & GenAI' },
    skills: [
      ['scikit-learn'],
      ['TensorFlow'],
      ['PyTorch'],
      ['sentence-transformers'],
      ['ChromaDB'],
      ['Ollama'],
      ['MLflow'],
      ['OpenCV'],
      ['Gradio'],
    ],
  },
  {
    title: { fr: 'Data & backend', en: 'Data & backend' },
    skills: [['PostgreSQL'], ['SQLite'], ['Airflow'], ['dbt'], ['FastAPI'], ['pandas']],
  },
  {
    title: { fr: 'Infra & MLOps', en: 'Infra & MLOps' },
    skills: [
      ['Docker', ['Docker', 'Docker Compose']],
      ['Kubernetes'],
      ['CI/CD', ['GitHub Actions', 'GitLab CI']],
      ['Prometheus / Grafana', ['Prometheus', 'Grafana']],
      ['Evidently AI'],
      ['Linux / systemd', ['systemd']],
    ],
  },
  {
    title: { fr: 'Front', en: 'Front end' },
    skills: [['React'], ['Nuxt / Vue', ['Nuxt', 'Vue.js']], ['HTMX'], ['Tailwind'], ['Astro', ['__astro']]],
  },
]

const usedIn = (names: string[]) =>
  projects.filter((p) => p.stack.some((s) => names.some((n) => n.toLowerCase() === s.toLowerCase())))

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-24">
        <div>
          <div>
            <p className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted">Stack</p>
            <h2 className="m-0 mt-3 text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              {t({ fr: 'Les outils, et où je les ai utilisés', en: 'The tools, and where I used them' })}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title.en}>
              <h3 className="m-0 border-b-2 border-ink pb-2 text-base font-bold">{t(g.title)}</h3>
              <ul className="m-0 list-none p-0">
                {g.skills.map(([name, aliases]) => {
                  const ps = usedIn(aliases ?? [name])
                  return (
                    <li key={name} className="flex items-center justify-between gap-3 border-b border-line py-2.5">
                      <span className="text-[15px] font-medium">{name}</span>
                      <span className="flex flex-wrap justify-end gap-1">
                        {ps.map((p) => (
                          <a
                            key={p.slug}
                            href={`#/projets/${p.slug}`}
                            title={p.title}
                            aria-label={p.title}
                            className="rounded-full no-underline transition-transform hover:scale-110"
                          >
                            <Bullet code={p.code} color={p.color} ink={p.ink} size={20} />
                          </a>
                        ))}
                        {name === 'Astro' && (
                          <span className="text-[12px] text-muted">{t({ fr: 'ce site', en: 'this site' })}</span>
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
