import { capabilities } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const TONES = ['bg-lavender-soft', 'bg-blue-soft', 'bg-peach-soft', 'bg-pink-soft', 'bg-mint-soft', 'bg-lavender-soft']

export function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="04 · How I build"
        title="Engineering &amp; AI capabilities"
        description="Habits and design principles I apply when a system needs to be trusted, not just impressive in a demo."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={(i % 3) * 0.05}>
            <div
              className={`h-full rounded-3xl border border-border-strong/30 p-6 transition-transform hover:-translate-y-1 ${TONES[i % TONES.length]}`}
            >
              <span className="font-mono text-xs text-text-muted">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display mt-2 text-lg font-semibold text-text">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{cap.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
