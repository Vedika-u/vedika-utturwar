import {
  Bot,
  Braces,
  Cpu,
  Database,
  FileCode2,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Workflow,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Tone = 'lavender' | 'blue' | 'peach' | 'pink' | 'mint'

const TONE_BG: Record<Tone, string> = {
  lavender: 'bg-lavender-soft',
  blue: 'bg-blue-soft',
  peach: 'bg-peach-soft',
  pink: 'bg-pink-soft',
  mint: 'bg-mint-soft',
}

const TOOLS: { label: string; icon: ComponentType<{ size?: number }>; tone: Tone }[] = [
  { label: 'Python', icon: SquareTerminal, tone: 'lavender' },
  { label: 'C++', icon: Braces, tone: 'blue' },
  { label: 'C', icon: FileCode2, tone: 'peach' },
  { label: 'JavaScript', icon: Braces, tone: 'pink' },
  { label: 'React', icon: Layers, tone: 'mint' },
  { label: 'FastAPI', icon: Server, tone: 'lavender' },
  { label: 'MySQL', icon: Database, tone: 'blue' },
  { label: 'Elasticsearch', icon: Database, tone: 'peach' },
  { label: 'Agentic AI', icon: Bot, tone: 'pink' },
  { label: 'Generative AI', icon: Sparkles, tone: 'mint' },
  { label: 'LLMs', icon: Cpu, tone: 'lavender' },
  { label: 'Cybersecurity', icon: ShieldCheck, tone: 'blue' },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading index="03 · Skills" title="My toolbox" description="What I reach for when I'm building." />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {TOOLS.map((tool, i) => {
          const Icon = tool.icon
          return (
            <Reveal key={tool.label} delay={(i % 4) * 0.04}>
              <div
                className={`group flex h-full flex-col items-center gap-3 rounded-3xl border border-border-strong/40 p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-lg sm:p-6 ${TONE_BG[tool.tone]}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bg-raised/70 text-text shadow-sm transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <span className="text-sm font-semibold text-text">{tool.label}</span>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1} className="mt-4">
        <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong/60 p-4 text-sm text-text-muted">
          <Workflow size={15} className="text-accent" />
          <Network size={15} className="text-accent -ml-1" />
          plus workflow automation, RAG pipelines, and RBAC-aware system design
        </div>
      </Reveal>
    </section>
  )
}
