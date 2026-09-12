import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowUpRight,
  ChevronDown,
  Lightbulb,
  type LucideIcon,
  Sparkles,
  User,
  Workflow,
  Wrench,
} from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../data/content'
import { Blob } from './Blob'
import { GithubIcon } from './icons'

type Tone = 'lavender' | 'blue' | 'peach' | 'pink' | 'mint'

const TONE = {
  lavender: { soft: 'bg-lavender-soft', text: 'text-accent', gradient: 'from-lavender-soft to-blue-soft' },
  blue: { soft: 'bg-blue-soft', text: 'text-accent', gradient: 'from-blue-soft to-mint-soft' },
  peach: { soft: 'bg-peach-soft', text: 'text-accent', gradient: 'from-peach-soft to-pink-soft' },
  pink: { soft: 'bg-pink-soft', text: 'text-accent', gradient: 'from-pink-soft to-lavender-soft' },
  mint: { soft: 'bg-mint-soft', text: 'text-accent', gradient: 'from-mint-soft to-blue-soft' },
} satisfies Record<Tone, { soft: string; text: string; gradient: string }>

function SectionLabel({ icon: Icon, tone, children }: { icon: LucideIcon; tone: Tone; children: React.ReactNode }) {
  const t = TONE[tone]
  return (
    <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wide text-text-faint uppercase">
      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${t.soft} ${t.text}`}>
        <Icon size={13} strokeWidth={2} />
      </span>
      {children}
    </h4>
  )
}

function Visual({ tone, icon: Icon, diagram }: { tone: Tone; icon: LucideIcon; diagram: React.ReactNode }) {
  const t = TONE[tone]
  return (
    <div
      className={`relative flex min-h-64 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br p-8 transition-transform duration-300 group-hover:scale-[1.015] ${t.gradient}`}
    >
      <Blob color={tone} size={180} className="-top-12 -right-12 opacity-50" />
      <div className="relative flex flex-col items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-raised/80 shadow-sm">
          <Icon size={26} className={t.text} strokeWidth={1.5} />
        </div>
        {diagram}
      </div>
    </div>
  )
}

export function ProjectCard({
  project,
  index,
  icon,
  tone,
  reverse,
  diagram,
  architecture,
}: {
  project: Project
  index: number
  icon: LucideIcon
  tone: Tone
  reverse?: boolean
  diagram: React.ReactNode
  architecture: React.ReactNode
}) {
  const t = TONE[tone]
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-3xl">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen((v) => !v)
          }
        }}
        className="group cursor-pointer rounded-3xl outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
      >
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Desktop-only visual column — placed left or right via order */}
          <div className={`hidden lg:block ${reverse ? 'lg:order-2' : ''}`}>
            <Visual tone={tone} icon={icon} diagram={diagram} />
          </div>

          <div className={reverse ? 'lg:order-1' : ''}>
            <span className="font-mono text-xs text-text-faint">
              {String(index).padStart(2, '0')} · {project.category}
            </span>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">{project.oneLiner}</p>

            {/* Mobile-only visual — sits between description and features */}
            <div className="my-6 lg:hidden">
              <Visual tone={tone} icon={icon} diagram={diagram} />
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.shortFeatures.map((f) => (
                <li key={f} className={`rounded-full px-3 py-1 text-xs font-medium text-text ${t.soft}`}>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack
                .flatMap((g) => g.items)
                .slice(0, 5)
                .map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border-strong/40 bg-bg px-2 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {item}
                  </span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text">
                {open ? 'Hide Case Study' : 'View Case Study'}
                <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
              </span>
              {project.links.slice(0, 1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-text"
                >
                  <GithubIcon size={14} />
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
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
            <div className="mt-8 rounded-3xl border border-border-strong/30 bg-bg-raised p-6 sm:p-8">
              <div className={`grid gap-6 rounded-2xl p-5 sm:grid-cols-2 sm:p-6 ${t.soft}`}>
                <div>
                  <SectionLabel icon={AlertCircle} tone={tone}>
                    Problem
                  </SectionLabel>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.problem}</p>
                </div>
                <div>
                  <SectionLabel icon={Lightbulb} tone={tone}>
                    Solution
                  </SectionLabel>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.solution}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-border-strong/30 pt-8">
                <SectionLabel icon={Workflow} tone={tone}>
                  Architecture
                </SectionLabel>
                <div className="mt-4">{architecture}</div>
              </div>

              <div className="mt-8 border-t border-border-strong/30 pt-8">
                <SectionLabel icon={Wrench} tone={tone}>
                  Technical Implementation
                </SectionLabel>
                <ul className="mt-3 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.soft} ring-1 ring-border-strong/40`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 rounded-2xl bg-bg p-4">
                  {project.stack.map((group) => (
                    <div key={group.label}>
                      <span className="text-[11px] tracking-wide text-text-faint uppercase">{group.label}</span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border-strong/40 bg-bg-raised px-2 py-1 font-mono text-[11px] text-text"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-6 border-t border-border-strong/30 pt-8 sm:grid-cols-2">
                <div>
                  <SectionLabel icon={User} tone={tone}>
                    My Contribution
                  </SectionLabel>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.role}</p>
                </div>
                <div>
                  <SectionLabel icon={Sparkles} tone={tone}>
                    Results &amp; Learnings
                  </SectionLabel>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.results}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border-strong/30 pt-6">
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
