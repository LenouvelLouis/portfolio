interface LogoProps {
  size?: number
  className?: string
}

/* Pastille de ligne : un "L." dont le point est une station. */
export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" className="fill-ink" />
      <path d="M10.5 8h4.4v11.6h7.6V24H10.5z" className="fill-paper" />
      <circle cx="23.2" cy="10.4" r="2.9" className="fill-signal" />
    </svg>
  )
}
