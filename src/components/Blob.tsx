const COLORS = {
  lavender: 'bg-lavender-soft',
  blue: 'bg-blue-soft',
  peach: 'bg-peach-soft',
  pink: 'bg-pink-soft',
  mint: 'bg-mint-soft',
} as const

export function Blob({
  color,
  size = 320,
  className = '',
  floatVariant = 'slow',
}: {
  color: keyof typeof COLORS
  size?: number
  className?: string
  floatVariant?: 'slow' | 'slower'
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${COLORS[color]} ${
        floatVariant === 'slow' ? 'animate-float-slow' : 'animate-float-slower'
      } ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
