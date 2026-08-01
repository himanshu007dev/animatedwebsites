import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { SiteFooter } from '@/components/site-footer'
import {
  personalRecords,
  recentSessions,
  rings,
  todaySession,
  volumeByWeek,
  weeks,
  type SetEntry,
} from '@/lib/dashboard-data'

export const Route = createFileRoute('/dashboard')({
  head: () => ({
    meta: [
      { title: 'Training Dashboard — PULSE' },
      {
        name: 'description',
        content:
          "A live demo of the PULSE training dashboard: today's session, weekly volume, progress rings, personal records and recent sessions.",
      },
      { property: 'og:title', content: 'Training Dashboard — PULSE' },
      {
        property: 'og:description',
        content:
          'Tick off sets, switch weeks and watch volume, intensity and recovery respond in this interactive demo.',
      },
    ],
  }),
  component: Dashboard,
})

function Dashboard() {
  const [sets, setSets] = useState<SetEntry[]>(todaySession.sets)
  const [week, setWeek] = useState<string>(weeks[1] ?? 'Week 2')

  const done = sets.filter((s) => s.done).length
  const progress = Math.round((done / sets.length) * 100)
  const volume: { day: string; value: number }[] = volumeByWeek[week] ?? []
  const maxVolume = useMemo(
    () => Math.max(...volume.map((v) => v.value), 1),
    [volume],
  )
  const total = volume.reduce((a, b) => a + b.value, 0)

  const toggle = (id: string) =>
    setSets((prev) =>
      prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)),
    )

  return (
    <div className="min-h-screen bg-background">
      <div
        aria-hidden
        className="aurora-blob pointer-events-none fixed -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[150px]"
      />
      <header className="relative border-b border-border px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="block h-5 w-1.5 rounded-full bg-primary" />
            <span className="font-display text-2xl leading-none tracking-[0.2em]">
              PULSE
            </span>
          </Link>
          <span className="rounded-full border border-border px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            live data · resets on reload
          </span>
        </div>
      </header>

      <main className="relative px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-glow">
              Friday · Block 3
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.88]">
              GOOD SESSION AHEAD
            </h1>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-6">
            {/* Today's session */}
            <Reveal className="tile md:col-span-3 md:row-span-2">
              <div className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                      {todaySession.block} · {todaySession.duration}
                    </p>
                    <h2 className="mt-2 font-display text-4xl leading-none">
                      {todaySession.title.toUpperCase()}
                    </h2>
                  </div>
                  <span className="font-display text-4xl leading-none text-glow">
                    {progress}%
                  </span>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <ul className="mt-6 space-y-2">
                  {sets.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => toggle(s.id)}
                        aria-pressed={s.done}
                        className="flex w-full items-center gap-4 rounded-xl border border-border px-4 py-3 text-left transition-all duration-300 hover:border-primary/60 hover:bg-secondary/40"
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-300 ${
                            s.done
                              ? 'border-primary bg-primary'
                              : 'border-border'
                          }`}
                        >
                          {s.done && (
                            <svg
                              viewBox="0 0 12 12"
                              className="h-3 w-3"
                              aria-hidden
                            >
                              <path
                                d="M2 6.5 4.8 9 10 3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary-foreground"
                              />
                            </svg>
                          )}
                        </span>
                        <span
                          className={`flex-1 text-sm transition-colors ${
                            s.done
                              ? 'text-muted-foreground line-through'
                              : 'text-foreground'
                          }`}
                        >
                          {s.label}
                        </span>
                        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {s.target}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Volume chart */}
            <Reveal delay={90} className="tile md:col-span-3">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                      Tonnage · {week}
                    </p>
                    <p className="mt-2 font-display text-4xl leading-none">
                      <CountUp to={total} decimals={1} suffix="t" />
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {weeks.map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWeek(w)}
                        className={`rounded-full px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.15em] transition-colors ${
                          w === week
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {w.replace('Week ', 'W')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex h-40 items-stretch gap-2">
                  {volume.map((d) => (
                    <div
                      key={d.day}
                      className="flex h-full flex-1 flex-col items-center gap-2"
                    >
                      <div className="flex w-full flex-1 items-end">
                        <div
                          className="w-full rounded-t-md bg-gradient-to-t from-primary/40 to-glow transition-all duration-700 ease-out"
                          style={{
                            height: `${Math.max((d.value / maxVolume) * 100, 2)}%`,
                          }}
                        />
                      </div>
                      <span className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {d.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Rings */}
            <Reveal delay={150} className="tile md:col-span-3">
              <div className="grid grid-cols-3 gap-4 p-6 sm:p-8">
                {rings.map((r) => (
                  <ProgressRing key={r.label} label={r.label} value={r.value} />
                ))}
              </div>
            </Reveal>

            {/* Streak */}
            <Reveal delay={200} className="tile md:col-span-2">
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Current streak
                </p>
                <div>
                  <p className="font-display text-6xl leading-none text-glow">
                    <CountUp to={23} />
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    weeks without a missed key session
                  </p>
                </div>
                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-8 flex-1 rounded-sm transition-colors ${
                        i > 1 ? 'bg-primary/70' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* PRs */}
            <Reveal delay={250} className="tile md:col-span-4">
              <div className="p-6 sm:p-8">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Personal records
                </p>
                <ul className="mt-5 divide-y divide-border">
                  {personalRecords.map((pr) => (
                    <li
                      key={pr.lift}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <span className="text-sm">{pr.lift}</span>
                      <span className="flex items-center gap-4">
                        <span className="font-display text-2xl leading-none">
                          {pr.value}
                        </span>
                        <span className="rounded-full bg-primary/15 px-2 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-glow">
                          {pr.delta}
                        </span>
                        <span className="hidden text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground sm:inline">
                          {pr.when}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Recent sessions */}
            <Reveal delay={300} className="tile md:col-span-6">
              <div className="p-6 sm:p-8">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Recent sessions
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {recentSessions.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-border p-4 transition-colors hover:border-primary/60"
                    >
                      <p className="text-sm">{s.name}</p>
                      <p className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {s.date} · {s.tonnage} · RPE {s.rpe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to site
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function ProgressRing({ label, value }: { label: string; value: number }) {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            strokeWidth="6"
            className="stroke-muted"
          />
          <circle
            cx="40"
            cy="40"
            r={r}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            className="stroke-primary transition-all duration-1000 ease-out"
            strokeDasharray={c}
            strokeDashoffset={c - (value / 100) * c}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-2xl">
          <CountUp to={value} suffix="%" />
        </span>
      </div>
      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
