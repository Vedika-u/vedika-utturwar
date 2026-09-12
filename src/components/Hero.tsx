import { motion, useReducedMotion } from 'framer-motion'
import { Bot, FileText, Sparkles } from 'lucide-react'
import { profile } from '../data/content'
import { Blob } from './Blob'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-28 lg:pt-16">
      <Blob color="lavender" size={340} className="-top-16 -left-20 sm:-top-24 sm:-left-10" />
      <Blob color="blue" size={280} className="top-32 -right-24 sm:top-10 sm:right-0" floatVariant="slower" />
      <Blob color="peach" size={220} className="bottom-0 left-1/3 hidden sm:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong/60 bg-bg-raised/70 px-3.5 py-1.5 font-mono text-xs text-text-muted backdrop-blur-sm"
          >
            <Sparkles size={13} className="text-accent" />
            {profile.year} IT undergraduate · {profile.cgpa} CGPA
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display mt-6 text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.05] font-semibold tracking-tight text-balance text-text"
          >
            Hi, I&rsquo;m Vedika <span className="inline-block">👋</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-lg font-medium text-text-muted sm:text-xl"
          >
            Software Engineer <span className="text-accent">•</span> AI Builder{' '}
            <span className="text-accent">•</span> Problem Solver
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            I build intelligent software systems with AI, automation, and modern web technologies.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.04] active:scale-[0.98]"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-raised px-5 py-2.5 text-sm font-semibold text-text transition-transform hover:scale-[1.04] hover:border-accent active:scale-[0.98]"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-raised px-5 py-2.5 text-sm font-semibold text-text transition-transform hover:scale-[1.04] hover:border-accent active:scale-[0.98]"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto hidden h-80 w-full max-w-sm sm:block lg:h-96"
        >
          <div className="absolute top-2 left-2 w-64 -rotate-6 rounded-2xl border border-border-strong/60 bg-bg-raised/90 p-4 shadow-xl backdrop-blur-sm animate-float-slow">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-peach" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            </div>
            <pre className="mt-3 overflow-hidden font-mono text-[11px] leading-relaxed text-text-muted">
              <span className="text-accent">async def</span> triage(event):{'\n'}
              {'  '}score = detect(event){'\n'}
              {'  '}<span className="text-accent">if</span> score.high:{'\n'}
              {'    '}<span className="text-accent">await</span> notify_human()
            </pre>
          </div>

          <div className="absolute right-0 bottom-8 w-52 rotate-6 rounded-2xl border border-border-strong/60 bg-lavender-soft p-4 shadow-xl animate-float-slower">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-raised text-accent">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-text">Agent online</p>
                <p className="text-[11px] text-text-muted">reasoning · 3 steps</p>
              </div>
            </div>
          </div>

          <div className="absolute right-6 top-0 rounded-full border border-border-strong/60 bg-mint-soft px-3 py-1.5 text-xs font-semibold text-text shadow-lg animate-float-slow">
            RBAC ✓
          </div>

          <div className="absolute bottom-0 left-8 rounded-full border border-border-strong/60 bg-peach-soft px-3 py-1.5 text-xs font-semibold text-text shadow-lg animate-float-slower">
            FastAPI
          </div>
        </motion.div>
      </div>
    </section>
  )
}
