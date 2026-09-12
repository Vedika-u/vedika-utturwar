import { Reveal } from './Reveal'

export function SectionHeading({
  index,
  title,
  description,
  align = 'left',
}: {
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={`mb-10 max-w-2xl sm:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="inline-block rounded-full bg-lavender-soft px-3 py-1 font-mono text-xs text-accent">
        {index}
      </span>
      <h2 className="font-display mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && <p className="mt-3 text-base leading-relaxed text-text-muted">{description}</p>}
    </Reveal>
  )
}
