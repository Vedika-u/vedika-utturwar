import { capabilities } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="04 / Engineering &amp; AI Capabilities"
        title="How I approach building AI systems"
        description="Beyond a list of tools — the habits and design principles I apply when the system needs to be trusted, not just impressive in a demo."
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={i * 0.04} className="h-full">
            <div className="h-full bg-bg-raised p-6 sm:p-7">
              <span className="font-mono text-xs text-text-faint">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-base font-semibold text-text">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{cap.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
