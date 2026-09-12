import { ArrowUpRight } from 'lucide-react'
import { githubRepos } from '../data/content'
import { Reveal } from './Reveal'
import { GithubIcon } from './icons'

const LANG_COLOR: Record<string, string> = {
  Python: '#3776ab',
  TypeScript: '#3178c6',
  'C++': '#00599c',
}

export function GithubStrip() {
  return (
    <div className="mt-16">
      <Reveal className="mb-6 flex items-center gap-2">
        <GithubIcon size={16} className="text-text-muted" />
        <h3 className="text-sm font-semibold text-text-muted">More on GitHub</h3>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {githubRepos.map((repo, i) => (
          <Reveal key={repo.name} delay={(i % 3) * 0.04}>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-border-strong/40 bg-bg-raised p-5 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-sm font-medium text-text">{repo.name}</span>
                  <ArrowUpRight
                    size={15}
                    className="mt-0.5 shrink-0 text-text-faint transition-colors group-hover:text-accent"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{repo.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: LANG_COLOR[repo.language] ?? 'var(--text-faint)' }}
                />
                <span className="text-xs text-text-faint">{repo.language}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
