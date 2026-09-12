import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { githubRepos, profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const LANG_COLOR: Record<string, string> = {
  Python: '#3776ab',
  TypeScript: '#3178c6',
  'C++': '#00599c',
}

export function GitHubActivity() {
  const { theme } = useTheme()
  const [statsFailed, setStatsFailed] = useState(false)
  const username = 'Vedika-u'
  const statsTheme = theme === 'dark' ? 'dark' : 'default'

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="07 / GitHub"
        title="Recent activity"
        description="A live look at the repos above, straight from GitHub."
      />

      {!statsFailed && (
        <Reveal className="mb-8 overflow-hidden rounded-2xl border border-border bg-bg-raised p-2">
          <img
            key={statsTheme}
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000&theme=${statsTheme}&hide=stars`}
            alt={`${profile.name}'s GitHub stats`}
            className="mx-auto w-full max-w-xl"
            onError={() => setStatsFailed(true)}
          />
        </Reveal>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {githubRepos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.04}>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-raised p-6 transition-colors hover:border-border-strong"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-sm font-medium text-text">{repo.name}</span>
                  <ArrowUpRight
                    size={15}
                    className="mt-0.5 shrink-0 text-text-faint transition-colors group-hover:text-text"
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
    </section>
  )
}
