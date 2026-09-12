import { GraduationCap, Rocket, Trophy } from 'lucide-react'
import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading index="01 · About" title="A little about me" />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <Reveal>
          <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-lavender-soft via-blue-soft to-mint-soft" />
            <div className="absolute inset-3 rounded-4xl border border-border-strong/50 bg-bg-raised/60 backdrop-blur-sm" />
            <span className="font-display relative text-7xl font-semibold text-accent">V</span>
            <div className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/60 bg-bg-raised text-accent shadow-md animate-float-slow">
              <Rocket size={18} />
            </div>
            <div className="absolute -bottom-3 -left-3 flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/60 bg-bg-raised text-accent shadow-md animate-float-slower">
              <Trophy size={18} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="space-y-4">
          <p className="text-lg leading-relaxed text-text-muted">
            I&rsquo;m a {profile.year.toLowerCase()} IT student at Banasthali Vidyapeeth who likes turning messy,
            manual workflows into agentic systems that reason, verify, and act on their own — with a human always
            kept in the loop.
          </p>
          <p className="text-lg leading-relaxed text-text-muted">
            Across two hackathons I&rsquo;ve helped ship a SIEM-SOAR platform for banking security and an
            autonomous email agent — both as real, working systems built in 48 hours flat.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-peach-soft px-3.5 py-1.5 text-sm font-medium text-text">
              <GraduationCap size={15} />
              {profile.cgpa} CGPA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3.5 py-1.5 text-sm font-medium text-text">
              <Trophy size={15} />2 hackathons shipped
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-soft px-3.5 py-1.5 text-sm font-medium text-text">
              🇫🇷 Nationally ranked, Le Grand Concours
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
