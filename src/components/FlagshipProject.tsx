import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/content'
import { Blob } from './Blob'
import { ActAwareDiagram, EmailAgentDiagram, OrbitDeskDiagram } from './diagrams'

const DIAGRAMS = {
  actAware: ActAwareDiagram,
  emailAgent: EmailAgentDiagram,
  orbitDesk: OrbitDeskDiagram,
}

type Tone = 'lavender' | 'blue' | 'peach' | 'pink' | 'mint'

const TONE = {
  lavender: { soft: 'bg-lavender-soft', text: 'text-accent', gradient: 'from-lavender-soft to-blue-soft' },
  blue: { soft: 'bg-blue-soft', text: 'text-accent', gradient: 'from-blue-soft to-mint-soft' },
  peach: { soft: 'bg-peach-soft', text: 'text-accent', gradient: 'from-peach-soft to-pink-soft' },
  pink: { soft: 'bg-pink-soft', text: 'text-accent', gradient: 'from-pink-soft to-lavender-soft' },
  mint: { soft: 'bg-mint-soft', text: 'text-accent', gradient: 'from-mint-soft to-blue-soft' },
} satisfies Record<Tone, { soft: string; text: string; gradient: string }>

export function FlagshipProject({
  project,
  index,
  icon: Icon,
  tone,
  reverse,
}: {
  project: Project
  index: number
  icon: LucideIcon
  tone: Tone
  reverse?: boolean
}) {
  const [open, setOpen] = useState(false)
  const Diagram = DIAGRAMS[project.diagram]
  const t = TONE[tone]

  return (
    <div className="overflow-hidden rounded-4xl border border-border-strong/30 bg-bg-raised sm:rounded-[2.5rem]">
      <div className="grid gap-0 lg:grid-cols-2">
        <div
          className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-linear-to-br p-8 sm:min-h-72 ${t.gradient} ${reverse ? 'lg:order-2' : ''}`}
        >
          <Blob color={tone} size={200} className="-top-10 -left-10 opacity-70" />
          <Blob color={tone} size={160} className="-right-8 -bottom-8 opacity-60" floatVariant="slower" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-bg-raised/80 shadow-lg backdrop-blur-sm sm:h-36 sm:w-36">
            <Icon size={52} className={t.text} strokeWidth={1.5} />
          </div>
          <span className="font-display absolute top-5 left-6 text-5xl font-bold text-bg-raised/70 sm:text-6xl">
            {String(index).padStart(2, '0')}
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <span className="font-mono text-xs text-text-faint">
            {project.event} · {project.date}
          </span>
          <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.flatMap((g) => g.items).slice(0, 6).map((item) => (
              <span key={item} className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${t.soft} text-text`}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              {open ? 'Hide details' : 'View Project'}
              <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-8 border-t border-border-strong/30 px-6 pt-6 pb-8 sm:px-8 sm:pb-10 lg:px-10">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">Problem</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">Solution</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">Architecture</h4>
                <div className="mt-3">
                  <Diagram />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">Key Features</h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${t.soft}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">My Role</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.role}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wide text-text-faint uppercase">Tech Stack</h4>
                <div className="mt-3 flex flex-wrap gap-x-8 gap-y-4">
                  {project.stack.map((group) => (
                    <div key={group.label}>
                      <span className="text-[11px] tracking-wide text-text-faint uppercase">{group.label}</span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border-strong/40 bg-bg px-2 py-1 font-mono text-[11px] text-text"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
