import { useLanguage } from './LanguageContext'
import { BASE, projects } from './projectsData'

interface HeroProps {
  goSection: (id: string) => void
}

export default function Hero({ goSection }: HeroProps) {
  const { t } = useLanguage()

  const facts = [
    { v: '3', l: { fr: "ans d'expérience en data engineering, en production", en: 'years of data engineering experience, in production' } },
    { v: String(projects.length), l: { fr: 'projets détaillés plus bas, du RAG au MLOps', en: 'projects detailed below, from RAG to MLOps' } },
    { v: 'FR · EN', l: { fr: "je travaille dans les deux langues", en: 'I work in both languages' } },
  ]

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <p className="m-0 mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-[13px] font-medium text-ink-2">
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
            Data & ML Engineer · Paris
          </p>
          <h1 className="m-0 text-[42px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-[64px] lg:text-[76px]">
            {t({
              fr: 'Je construis des pipelines de données,',
              en: 'I build data pipelines,',
            })}{' '}
            <span className="text-muted">
              {t({ fr: 'et les modèles qui roulent dessus.', en: 'and the models that run on them.' })}
            </span>
          </h1>
          <p className="m-0 mt-7 max-w-[560px] text-[17px] leading-relaxed text-ink-2 sm:text-lg">
            {t({
              fr: "Diplômé de l'ISEP en 2026. J'ai passé trois ans chez IKIGAI comme data engineer, à faire tourner des pipelines de données en production. Aujourd'hui je travaille surtout sur du machine learning et de la GenAI, avec la même obsession : que ça marche encore dans six mois.",
              en: "ISEP graduate, class of 2026. I spent three years at IKIGAI as a data engineer, keeping data pipelines running in production. These days I mostly work on machine learning and GenAI, with the same obsession: it should still work six months from now.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => goSection('projets')}
              className="cursor-pointer rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-paper transition-transform hover:-translate-y-px"
            >
              {t({ fr: 'Voir les projets', en: 'See the work' })} ↓
            </button>
            <button
              onClick={() => goSection('contact')}
              className="cursor-pointer rounded-full border border-ink/25 bg-transparent px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              {t({ fr: 'Me contacter', en: 'Get in touch' })}
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
          <div className="overflow-hidden rounded-2xl bg-soft">
            <img
              src={`${BASE}portrait.jpg`}
              alt="Louis Lenouvel"
              width={1200}
              height={1600}
              className="block aspect-[4/4.2] w-full object-cover"
              style={{ objectPosition: '50% 38%' }}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <dl className="m-0 mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.v} className="bg-card px-5 py-5">
            <dt className="text-3xl font-extrabold tracking-tight">{f.v}</dt>
            <dd className="m-0 mt-1 text-sm text-muted">{t(f.l)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
