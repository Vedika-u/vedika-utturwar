import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div
        className={`mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all sm:px-5 ${
          scrolled
            ? 'border-border-strong/70 bg-bg-raised/80 shadow-[0_8px_30px_-12px_rgba(124,92,214,0.35)] backdrop-blur-md'
            : 'border-border/70 bg-bg-raised/50 backdrop-blur-sm'
        }`}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-text shrink-0 pl-1">
          Vedika<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-text-muted transition-colors hover:bg-lavender-soft hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-3xl flex-col gap-1 rounded-3xl border border-border/70 bg-bg-raised/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-lavender-soft hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
