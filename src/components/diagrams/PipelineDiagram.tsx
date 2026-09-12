import { ArrowDown, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export type Stage = {
  label: string
  sublabel?: string
  badge?: string
  icon?: ReactNode
}

const TONE_BADGE: Record<string, string> = {
  lavender: 'bg-lavender-soft text-accent',
  blue: 'bg-blue-soft text-accent',
  peach: 'bg-peach-soft text-accent',
  pink: 'bg-pink-soft text-accent',
  mint: 'bg-mint-soft text-accent',
}

export function PipelineDiagram({
  stages,
  caption,
  tone = 'lavender',
}: {
  stages: Stage[]
  caption?: string
  tone?: 'lavender' | 'blue' | 'peach' | 'pink' | 'mint'
}) {
  return (
    <figure className="rounded-3xl border border-border-strong/40 bg-bg-raised p-5 sm:p-8">
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch md:gap-2">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex min-w-0 flex-col items-center md:flex-1 md:flex-row">
            <div className="flex w-full min-w-0 flex-col items-center gap-1 rounded-2xl border border-border-strong/50 bg-bg px-3 py-3.5 text-center">
              {stage.icon && <div className="mb-1 text-accent">{stage.icon}</div>}
              <span className="text-xs font-semibold leading-snug text-text sm:text-sm">{stage.label}</span>
              {stage.sublabel && (
                <span className="font-mono text-[11px] leading-snug text-text-faint">{stage.sublabel}</span>
              )}
              {stage.badge && (
                <span className={`mt-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${TONE_BADGE[tone]}`}>
                  {stage.badge}
                </span>
              )}
            </div>

            {i < stages.length - 1 && (
              <div className="flex shrink-0 items-center justify-center py-1 text-text-faint md:px-1 md:py-0">
                <ArrowDown size={16} className="md:hidden" />
                <ArrowRight size={16} className="hidden md:block" />
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && <figcaption className="mt-5 text-xs leading-relaxed text-text-faint">{caption}</figcaption>}
    </figure>
  )
}
