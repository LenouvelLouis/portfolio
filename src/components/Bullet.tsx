interface BulletProps {
  code: string
  color: string
  ink: string
  size?: number
  className?: string
}

/* Pastille ronde façon indice de ligne */
export default function Bullet({ code, color, ink, size = 36, className = '' }: BulletProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold tabular-nums leading-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        color: ink,
        fontSize: code.length > 1 ? size * 0.42 : size * 0.5,
        letterSpacing: '-0.03em',
      }}
      aria-hidden="true"
    >
      {code}
    </span>
  )
}
