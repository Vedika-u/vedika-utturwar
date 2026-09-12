import { projects } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="02 / Featured Projects"
        title="Systems built under real constraints"
        description="Each of these shipped as a working system inside a hackathon or assignment window — not just a proposal. Expand a project to see the architecture, my specific role, and the stack."
      />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
