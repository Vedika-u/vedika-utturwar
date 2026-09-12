import { Mail, ShieldCheck } from 'lucide-react'
import { projects } from '../data/content'
import { FlagshipProject } from './FlagshipProject'
import { GithubStrip } from './GitHubActivity'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const FLAGSHIP_META = {
  'act-aware': { icon: ShieldCheck, tone: 'lavender' as const },
  'email-productivity-agent': { icon: Mail, tone: 'peach' as const },
}

export function Projects() {
  const flagships = projects.filter((p) => p.slug in FLAGSHIP_META)
  const others = projects.filter((p) => !(p.slug in FLAGSHIP_META))

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="02 · Featured Projects"
        title="Systems built under real constraints"
        description="Each of these shipped as a working system inside a hackathon or assignment window — not just a proposal."
      />

      <div className="space-y-8">
        {flagships.map((project, i) => {
          const meta = FLAGSHIP_META[project.slug as keyof typeof FLAGSHIP_META]
          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <FlagshipProject
                project={project}
                index={i + 1}
                icon={meta.icon}
                tone={meta.tone}
                reverse={i % 2 === 1}
              />
            </Reveal>
          )
        })}
      </div>

      {others.length > 0 && (
        <div className="mt-8 space-y-6">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}

      <GithubStrip />
    </section>
  )
}
