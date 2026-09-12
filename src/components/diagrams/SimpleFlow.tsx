import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Fragment } from 'react'

export type FlowNode = {
  label: string
  icon: LucideIcon
}

const TONE_NODE: Record<string, string> = {
  lavender: 'bg-lavender-soft text-accent',
  blue: 'bg-blue-soft text-accent',
  peach: 'bg-peach-soft text-accent',
  pink: 'bg-pink-soft text-accent',
  mint: 'bg-mint-soft text-accent',
}

export function SimpleFlow({
  nodes,
  tone = 'lavender',
}: {
  nodes: FlowNode[]
  tone?: 'lavender' | 'blue' | 'peach' | 'pink' | 'mint'
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="w-full max-w-sm">
      <motion.div
        className="flex items-center justify-center gap-1 sm:gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } } }}
      >
        {nodes.map((node, i) => {
          const Icon = node.icon
          return (
            <Fragment key={node.label}>
              <motion.div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm sm:h-12 sm:w-12 ${TONE_NODE[tone]}`}
                variants={{
                  hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon size={18} strokeWidth={1.75} />
              </motion.div>
              {i < nodes.length - 1 && (
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowRight size={12} className="shrink-0 text-text-faint/70" />
                </motion.div>
              )}
            </Fragment>
          )
        })}
      </motion.div>
      <p className="mt-3 text-center font-mono text-[11px] leading-relaxed text-text-muted">
        {nodes.map((n) => n.label).join(' → ')}
      </p>
    </div>
  )
}
