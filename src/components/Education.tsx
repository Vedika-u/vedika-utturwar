import { GraduationCap } from 'lucide-react'
import { education, profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  const [current, ...past] = education

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading index="06 · Education" title="Academic record" />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-lavender-soft via-blue-soft to-mint-soft p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Currently</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-text sm:text-2xl">{current.degree}</h3>
                <p className="mt-1 text-sm text-text-muted">{current.institution}</p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-bg-raised/80 text-accent shadow-sm">
                <GraduationCap size={26} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-6">
              <div>
                <p className="font-display text-5xl font-bold text-text">{profile.cgpa}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-text-muted uppercase">CGPA</p>
              </div>
              <div className="rounded-full bg-bg-raised/70 px-4 py-2 text-sm font-medium text-text">
                {current.date}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="space-y-4">
          {past.map((e) => (
            <div
              key={e.degree}
              className="flex items-center justify-between gap-4 rounded-2xl border border-border-strong/40 bg-bg-raised p-5"
            >
              <div>
                <p className="text-sm font-semibold text-text">{e.degree}</p>
                <p className="mt-0.5 text-sm text-text-muted">{e.institution}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm font-semibold text-text">{e.detail}</p>
                <p className="font-mono text-xs text-text-faint">{e.date}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
