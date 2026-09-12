import { achievements } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05 / Hackathons &amp; Achievements" title="Where I've tested this under pressure" />

      <div className="space-y-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-raised p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7">
              <div>
                <h3 className="text-base font-semibold text-text">{a.title}</h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-text-muted">{a.detail}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-text-faint sm:pt-1">{a.date}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
