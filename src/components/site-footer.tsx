import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="block h-5 w-1.5 rounded-full bg-primary" />
          <span className="font-display text-2xl leading-none tracking-[0.2em]">
            PULSE
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Training that compounds · Est. 2006
        </p>
        <Link
          to="/dashboard"
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Open dashboard
        </Link>
      </div>
    </footer>
  )
}
