import { certifications, education } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="06 / Education &amp; Certifications" title="Academic record" />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-text-faint">Education</h3>
          <ol className="space-y-5 border-l border-border pl-6">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm font-medium text-text">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-text-muted">{e.institution}</p>
                  <p className="mt-1 font-mono text-xs text-text-faint">
                    {e.date} · {e.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-text-faint">Certifications</h3>
          <ol className="space-y-5 border-l border-border pl-6">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm font-medium text-text">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{c.detail}</p>
                  <p className="mt-1 font-mono text-xs text-text-faint">{c.date}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
