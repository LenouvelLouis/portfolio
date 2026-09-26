import { useState } from 'react'
import { useLanguage } from './LanguageContext'
import Logo from './Logo'
import { BASE } from './projectsData'

const EMAIL = 'mr.lenouvel.louis@gmail.com'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const links = [
    { l: 'LinkedIn', v: 'in/louis-lenouvel', href: 'https://www.linkedin.com/in/louis-lenouvel/' },
    { l: 'GitHub', v: 'LenouvelLouis', href: 'https://github.com/LenouvelLouis' },
    { l: 'CV', v: 'Français (PDF)', href: `${BASE}CV_Lenouvel_Louis_FR.pdf` },
    { l: 'Resume', v: 'English (PDF)', href: `${BASE}CV_Lenouvel_Louis_EN.pdf` },
  ]

  return (
    <section id="contact" className="scroll-mt-20 bg-board text-white">
      <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-16 sm:px-8 sm:pt-24">
        <p className="m-0 font-mono text-[12px] tracking-[0.16em] text-signal">TERMINUS · CONTACT</p>
        <h2 className="m-0 mt-4 max-w-[900px] text-[40px] font-extrabold leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          {t({ fr: 'Envie de parler data ou ML ?', en: 'Want to talk data or ML?' })}
        </h2>
        <p className="m-0 mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/70">
          {t({
            fr: "Une question sur un projet, un retour, ou simplement l'envie d'échanger : le plus simple, c'est un mail.",
            en: 'A question about a project, some feedback, or just a chat: email is the easiest way to reach me.',
          })}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="break-all rounded-full bg-signal px-5 py-3 text-[15px] font-semibold text-[#111a2b] no-underline transition-transform hover:-translate-y-px sm:text-lg"
          >
            {EMAIL}
          </a>
          <button
            onClick={copy}
            className="cursor-pointer rounded-full border border-white/25 bg-transparent px-4 py-3 text-[15px] font-medium text-white transition-colors hover:border-white"
            aria-live="polite"
          >
            {copied ? t({ fr: 'Copié ✓', en: 'Copied ✓' }) : t({ fr: "Copier l'adresse", en: 'Copy address' })}
          </button>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((c) => (
            <a
              key={c.l}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-board-2 px-5 py-5 no-underline transition-colors hover:bg-[#223049]"
            >
              <span>
                <span className="block text-[13px] text-white/50">{c.l}</span>
                <span className="block text-[17px] font-semibold">{c.v}</span>
              </span>
              <span className="text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:text-signal" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2.5">
            <Logo size={20} className="[&_circle:first-child]:fill-white [&_path]:fill-[#111a2b]" />
            © 2026 Louis Lenouvel
          </span>
          <span>{t({ fr: 'Paris, France', en: 'Paris, France' })}</span>
          <span>{t({ fr: 'Fait main avec Astro et React', en: 'Handmade with Astro and React' })}</span>
        </footer>
      </div>
    </section>
  )
}
