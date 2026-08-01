import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Programs', href: '/#programs' },
  { label: 'Method', href: '/#method' },
  { label: 'Coaches', href: '/#coaches' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="block h-5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover:h-6" />
          <span className="font-display text-2xl leading-none tracking-[0.2em] text-foreground">
            PULSE
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Link
          to="/dashboard"
          className="glow-button rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
        >
          <span className="relative z-10">Dashboard</span>
        </Link>
      </nav>
    </header>
  )
}
