import { about } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01 / About" title="Grounded in fundamentals, building toward autonomy" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="md:col-span-2">
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-bg-raised p-6 sm:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-wide text-text-faint">CGPA</dt>
              <dd className="mt-1 text-2xl font-semibold text-text">9.61</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-text-faint">Hackathons</dt>
              <dd className="mt-1 text-2xl font-semibold text-text">2</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-text-faint">Focus</dt>
              <dd className="mt-1 text-base font-medium text-text">Agentic &amp; Generative AI</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-text-faint">Based in</dt>
              <dd className="mt-1 text-base font-medium text-text">Rajasthan, India</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
