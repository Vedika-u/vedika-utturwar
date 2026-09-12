import { Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { profile } from '../data/content'
import { Blob } from './Blob'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <Blob color="mint" size={260} className="top-10 -right-16 opacity-70" />
      <SectionHeading
        index="07 · Contact"
        title="Let's talk"
        description="Open to internships, collaborations, and roles building agentic AI or backend systems."
      />

      <div className="relative grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-lavender-soft p-6 sm:p-7">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm font-medium text-text transition-transform hover:translate-x-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-raised/80">
                  <Mail size={15} className="text-accent" />
                </span>
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-text transition-transform hover:translate-x-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-raised/80">
                  <LinkedinIcon size={15} className="text-accent" />
                </span>
                linkedin.com/in/vedika-utturwar
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-text transition-transform hover:translate-x-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-raised/80">
                  <GithubIcon size={15} className="text-accent" />
                </span>
                github.com/Vedika-u
              </a>
            </div>
            <p className="text-xs leading-relaxed text-text-muted">
              The form opens a pre-filled email in your mail client — nothing is stored or sent anywhere else.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-border-strong/40 bg-bg-raised p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-text-faint">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border-strong/50 bg-bg px-3 py-2 text-sm text-text outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-text-faint">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border-strong/50 bg-bg px-3 py-2 text-sm text-text outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-text-faint">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-none rounded-xl border border-border-strong/50 bg-bg px-3 py-2 text-sm text-text outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              Send message
              <Send size={14} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
