import { useLanguage } from './LanguageContext'

const EN: Record<string, string> = {
  Nettoyage: 'Cleaning',
  Prédiction: 'Prediction',
  'Export JSON': 'JSON export',
  Outils: 'Tools',
  'Garde-fou': 'Guardrail',
  Données: 'Data',
  Entraînement: 'Training',
  Météo: 'Weather',
  Réseau: 'Grid',
  Éval: 'Eval',
  Ligne: 'Line',
  Scène: 'Scene',
  Routeur: 'Router',
  Contrôleurs: 'Controllers',
  Modèles: 'Models',
  Vues: 'Views',
  Comptes: 'Accounts',
  Graphiques: 'Charts',
  'Classif.': 'Classif.',
  Régression: 'Regression',
}

interface LineTrackProps {
  stations: string[]
  color: string
  size?: 'sm' | 'lg'
  animate?: boolean
}

/* Le pipeline d'un projet dessiné comme un tracé de ligne. */
export default function LineTrack({ stations, color, size = 'sm', animate = false }: LineTrackProps) {
  const { language } = useLanguage()
  const lg = size === 'lg'
  const label = (s: string) => (language === 'en' ? EN[s] ?? s : s)
  const bar = lg ? 8 : 5
  const dot = lg ? 18 : 11

  const vertical = lg && (
    <ol className="m-0 list-none p-0 sm:hidden" aria-label="pipeline">
      {stations.map((s, i) => {
        const terminus = i === 0 || i === stations.length - 1
        const last = i === stations.length - 1
        return (
          <li key={s + i} className="relative flex items-center gap-3 pb-4 last:pb-0">
            {!last && (
              <span className="absolute left-[7px] top-3 h-full w-[5px]" style={{ background: color }} aria-hidden="true" />
            )}
            <span
              className="relative block h-[19px] w-[19px] shrink-0 rounded-full bg-card"
              style={{ border: `4px solid ${terminus ? 'var(--ink)' : color}` }}
              aria-hidden="true"
            />
            <span className={`text-[15px] ${terminus ? 'font-semibold text-ink' : 'text-ink-2'}`}>{label(s)}</span>
          </li>
        )
      })}
    </ol>
  )

  return (
    <>
    {vertical}
    <div className={`relative ${lg ? 'hidden sm:block' : ''}`} role="list" aria-label="pipeline">
      {/* rail : du centre de la première station au centre de la dernière */}
      <div
        className="absolute"
        style={{
          top: dot / 2 - bar / 2,
          left: `calc(${50 / stations.length}%)`,
          right: `calc(${50 / stations.length}%)`,
          height: bar,
          borderRadius: bar,
          overflow: 'hidden',
        }}
      >
        <div className={`h-full w-full ${animate ? 'track-draw' : ''}`} style={{ background: color }} />
      </div>
      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${stations.length}, minmax(0, 1fr))` }}>
        {stations.map((s, i) => {
          const terminus = i === 0 || i === stations.length - 1
          return (
            <div key={s + i} role="listitem" className="flex flex-col items-center text-center">
              <span
                className="block rounded-full bg-card"
                style={{
                  width: dot,
                  height: dot,
                  border: `${lg ? 4 : 3}px solid ${terminus ? 'var(--ink)' : color}`,
                }}
              />
              <span
                className={`mt-2 px-0.5 leading-tight ${
                  lg ? 'text-[13px] sm:text-sm' : 'text-[10.5px]'
                } ${terminus ? 'font-semibold text-ink' : `text-muted ${lg ? '' : 'hidden min-[520px]:block'}`}`}
              >
                {label(s)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
