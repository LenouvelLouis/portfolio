interface ProjectVizProps {
  n: string
  hue: [string, string]
  metric: string
  small?: boolean
}

export default function ProjectViz({ n, hue, metric, small }: ProjectVizProps) {
  const s = parseInt(n) - 1

  return (
    <div
      className={small ? 'aspect-[16/10]' : 'aspect-[4/3]'}
      style={{
        background: `linear-gradient(135deg, ${hue[0]} 0%, ${hue[1]} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {/* 01 PowerShift — energy grid */}
        {s === 0 && (
          <>
            <g stroke="rgba(255,255,255,.3)" strokeWidth="1">
              <line x1="60" y1="80" x2="200" y2="60" />
              <line x1="200" y1="60" x2="340" y2="90" />
              <line x1="60" y1="80" x2="120" y2="180" />
              <line x1="200" y1="60" x2="200" y2="160" />
              <line x1="340" y1="90" x2="300" y2="200" />
              <line x1="120" y1="180" x2="200" y2="160" />
              <line x1="200" y1="160" x2="300" y2="200" />
              <line x1="120" y1="180" x2="200" y2="250" />
              <line x1="300" y1="200" x2="200" y2="250" />
            </g>
            {[[60,80],[200,60],[340,90],[120,180],[200,160],[300,200],[200,250]].map(([x,y],i)=>(
              <circle key={i} cx={x} cy={y} r={i<3?8:6} fill="rgba(255,255,255,.85)" />
            ))}
            <path d="M 0 270 Q 50 250 100 270 T 200 270 T 300 270 T 400 270" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" fill="none" />
          </>
        )}
        {/* 02 California Housing — diagonal lines + target */}
        {s === 1 && (
          <>
            <g stroke="rgba(255,255,255,.3)" strokeWidth="1" fill="none">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={i} x1={i * 35} y1="0" x2={i * 35 + 40} y2="300" />
              ))}
            </g>
            <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="1.5" />
            <circle cx="200" cy="150" r="30" fill="rgba(255,255,255,.9)" />
          </>
        )}
        {/* 03 MetroVision — scatter + wave */}
        {s === 2 && (
          <>
            {Array.from({ length: 40 }).map((_, i) => {
              const x = (i * 37) % 400
              const y = (i * 53) % 300
              return <circle key={i} cx={x} cy={y} r={2 + (i % 4)} fill="rgba(255,255,255,.7)" />
            })}
            <path d="M 0 150 Q 100 50 200 150 T 400 150" stroke="rgba(255,255,255,.9)" strokeWidth="2" fill="none" />
          </>
        )}
        {/* 04 Bee or Not to Bee — bar chart */}
        {s === 3 && (
          <>
            <g fill="rgba(255,255,255,.8)">
              {Array.from({ length: 8 }).map((_, i) => (
                <rect key={i} x={30 + i * 45} y={150 - (i % 3) * 30 - 20} width="28" height={(i % 3) * 30 + 60} />
              ))}
            </g>
            <line x1="0" y1="230" x2="400" y2="230" stroke="rgba(255,255,255,.9)" strokeWidth="1" />
          </>
        )}
        {/* 05 AI VR Learning — line chart */}
        {s === 4 && (
          <>
            <g stroke="rgba(255,255,255,.8)" strokeWidth="1.5" fill="none">
              <polyline points="20,200 80,140 140,170 200,90 260,120 320,60 380,100" />
              <polyline points="20,240 80,210 140,230 200,180 260,200 320,160 380,190" strokeDasharray="3,3" opacity="0.6" />
            </g>
            {[[80, 140], [200, 90], [320, 60]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#fff" />
            ))}
          </>
        )}
        {/* 06 Events-It — concentric circles */}
        {s === 5 && (
          <>
            <g stroke="rgba(255,255,255,.4)" strokeWidth="1" fill="none">
              {Array.from({ length: 6 }).map((_, i) => (
                <circle key={i} cx="200" cy="150" r={30 + i * 25} />
              ))}
            </g>
            <circle cx="200" cy="150" r="8" fill="rgba(255,255,255,.9)" />
          </>
        )}
        {/* 07 Portefeuille Financier + fallback — card grid */}
        {s >= 6 && (
          <>
            <g fill="rgba(255,255,255,.6)">
              {Array.from({ length: 20 }).map((_, i) => (
                <rect key={i} x={10 + (i % 5) * 80} y={20 + Math.floor(i / 5) * 70} width="60" height="50" rx="4" />
              ))}
            </g>
          </>
        )}
      </svg>
      <div className="absolute top-3 left-3 font-mono text-[10px] text-white/90 tracking-wider">
        FIG. {n}
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/90 tracking-wider">
        {metric}
      </div>
    </div>
  )
}
