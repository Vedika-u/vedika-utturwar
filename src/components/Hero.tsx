import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--accent-tint),transparent)]"
      />

      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent"
        >
          Hi, I&rsquo;m {profile.name.split(' ')[0]} — {profile.role}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl md:text-6xl"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted"
        >
          Second-year IT undergraduate at Banasthali Vidyapeeth (9.61 CGPA), focused on{' '}
          <span className="text-text">{profile.focus}</span>.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowUpRight size={15} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <div className="mt-20 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-text-faint transition-colors hover:text-text-muted"
        >
          <ArrowDown size={18} className={reduceMotion ? '' : 'animate-bounce'} />
        </a>
      </div>
    </section>
  )
}
