import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
