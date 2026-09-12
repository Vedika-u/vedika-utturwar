import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/content'
import { OrbitDeskDiagram } from './diagrams'

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-3xl border border-border-strong/40 bg-bg-raised transition-transform hover:-translate-y-0.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col items-start gap-3 p-6 text-left sm:p-7"
      >
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-mint-soft px-3 py-1 font-mono text-xs text-text-muted">
            {project.event} · {project.date}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-text-faint transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">{project.name}</h3>
        <p className="max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">{project.tagline}</p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-8 border-t border-border-strong/30 px-6 pb-8 pt-6 sm:px-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">Problem</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">Solution</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">Architecture</h4>
                <div className="mt-3">
                  <OrbitDeskDiagram />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">Key Features</h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">My Role</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.role}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-text-faint">Tech Stack</h4>
                <div className="mt-3 flex flex-wrap gap-x-8 gap-y-4">
                  {project.stack.map((group) => (
                    <div key={group.label}>
                      <span className="text-[11px] uppercase tracking-wide text-text-faint">{group.label}</span>
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

              <div className="flex flex-wrap gap-3 pt-1">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
