import { Code2, Languages } from 'lucide-react'
import { milestones } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const TONE_BG: Record<string, string> = {
  lavender: 'bg-lavender-soft text-accent',
  blue: 'bg-blue-soft text-accent',
  peach: 'bg-peach-soft text-accent',
  pink: 'bg-pink-soft text-accent',
}

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="05 · Achievements"
        title="Where I've tested this under pressure"
        description="Hackathons, and a national language competition — different arenas, same discipline."
      />

      <div className="relative space-y-6 border-l-2 border-dashed border-border-strong/50 pl-6 sm:pl-10">
        {milestones.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.05}>
            <div className="relative">
              <span
                className={`absolute top-1 -left-[calc(1.5rem+9px)] flex h-8 w-8 items-center justify-center rounded-full shadow-sm sm:-left-[calc(2.5rem+9px)] ${TONE_BG[m.tone]}`}
              >
                {m.kind === 'Language' ? <Languages size={15} /> : <Code2 size={15} />}
              </span>
              <div className="rounded-3xl border border-border-strong/40 bg-bg-raised p-5 transition-transform hover:-translate-y-0.5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-text sm:text-lg">{m.title}</h3>
                  <span className="shrink-0 rounded-full bg-bg px-3 py-1 font-mono text-xs text-text-faint">
                    {m.date}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">{m.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
