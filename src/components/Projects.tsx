import { Bot, Bug, Mail, ShieldCheck } from 'lucide-react'
import { projects } from '../data/content'
import {
  ActAwareDiagram,
  ActAwareFlow,
  AgentPenTestDiagram,
  AgentPenTestFlow,
  EmailAgentDiagram,
  EmailAgentFlow,
  OrbitDeskDiagram,
  OrbitDeskFlow,
} from './diagrams'
import { GithubStrip } from './GitHubActivity'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const META = {
  'agent-penetration-test': { icon: Bug, tone: 'blue' as const, Flow: AgentPenTestFlow, Architecture: AgentPenTestDiagram },
  'act-aware': { icon: ShieldCheck, tone: 'lavender' as const, Flow: ActAwareFlow, Architecture: ActAwareDiagram },
  'email-productivity-agent': { icon: Mail, tone: 'peach' as const, Flow: EmailAgentFlow, Architecture: EmailAgentDiagram },
  orbitdesk: { icon: Bot, tone: 'mint' as const, Flow: OrbitDeskFlow, Architecture: OrbitDeskDiagram },
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="02 · Featured Projects"
        title="Systems built under real constraints"
        description="Each of these shipped as a working, benchmarked system — inside a hackathon, an assignment, or a self-directed build — not just a proposal. Open one for the full case study."
      />

      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, i) => {
          const meta = META[project.slug as keyof typeof META]
          const { Flow, Architecture } = meta
          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard
                project={project}
                index={i + 1}
                icon={meta.icon}
                tone={meta.tone}
                reverse={i % 2 === 1}
                diagram={<Flow />}
                architecture={<Architecture />}
              />
            </Reveal>
          )
        })}
      </div>

      <GithubStrip />
    </section>
  )
}
