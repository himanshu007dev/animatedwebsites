import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { coaches, programs, testimonials, tiers } from '@/lib/site-data'
import heroAthlete from '@/assets/hero-athlete.jpg'
import programStrength from '@/assets/program-strength.jpg'
import programConditioning from '@/assets/program-conditioning.jpg'
import programMobility from '@/assets/program-mobility.jpg'
import coach1 from '@/assets/coach-1.jpg'
import coach2 from '@/assets/coach-2.jpg'
import coach3 from '@/assets/coach-3.jpg'
import ctaGym from '@/assets/cta-gym.jpg'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'PULSE — Strength Training That Compounds' },
      {
        name: 'description',
        content:
          'PULSE is a coached strength and conditioning system: five training tracks, adaptive weekly volume, and a dashboard that proves the work is landing.',
      },
      {
        property: 'og:title',
        content: 'PULSE — Strength Training That Compounds',
      },
      {
        property: 'og:description',
        content:
          'Five training tracks, adaptive programming, and a dashboard that shows every kilo you have added.',
      },
    ],
  }),
  component: Landing,
})

const coachPhotos = [coach1, coach2, coach3]

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Programs />
        <Method />
        <Coaches />
        <Results />
        <Membership />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}

function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative px-5 pb-10 pt-24 sm:px-8 sm:pt-28">
      <div
        aria-hidden
        className="aurora-blob pointer-events-none absolute -top-32 left-1/3 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl auto-rows-[minmax(0,auto)] grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[repeat(6,7.2rem)]">
        <Reveal className="tile group col-span-1 md:col-span-4 md:row-span-6">
          <div className="relative h-full min-h-[26rem] w-full overflow-hidden">
            <img
              src={heroAthlete}
              alt="Athlete pulling a heavy deadlift in a dark gym"
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
              style={{
                transform: `translate3d(0, ${offset * 0.12}px, 0) scale(1.12)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
            <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
              <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-glow">
                Strength · Conditioning · Longevity
              </p>
              <h1 className="font-display text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.82] tracking-tight">
                BUILT
                <br />
                <span className="text-glow">UNDER</span> LOAD
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Coached programming that adapts to the week you actually had.
                Heavy when you are ready, honest when you are not.
              </p>
              <div className="mt-8">
                <Link
                  to="/dashboard"
                  className="glow-button inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                >
                  <span className="relative z-10">Start training</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="tile col-span-1 md:col-span-2 md:row-span-2"
        >
          <div className="flex h-full flex-col justify-between p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Average 12-month total gain
            </p>
            <p className="font-display text-6xl leading-none text-foreground">
              <CountUp to={68} suffix="kg" />
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="tile col-span-1 md:col-span-2 md:row-span-2"
        >
          <div className="flex h-full flex-col justify-between gap-4 p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Members training now
            </p>
            <div>
              <p className="font-display text-6xl leading-none">
                <CountUp to={4218} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Across 32 states, 5 training tracks.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={280}
          className="tile group col-span-1 md:col-span-2 md:row-span-2"
        >
          <img
            src={programStrength}
            alt="Loaded barbell on a dark gym floor"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="relative flex h-full min-h-[9rem] flex-col justify-end p-6">
            <p className="font-display text-3xl leading-none">
              EVERY REP LOGGED
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Sets, tonnage and RPE, tracked automatically.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Marquee() {
  const words = [
    'SQUAT',
    'PULL',
    'PRESS',
    'SPRINT',
    'BREATHE',
    'RECOVER',
    'REPEAT',
  ]
  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex gap-10">
            {words.map((w) => (
              <span
                key={`${rep}-${w}`}
                className="font-display text-3xl tracking-[0.25em] text-muted-foreground/45"
              >
                {w}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Programs() {
  const images: Record<string, string> = {
    strength: programStrength,
    conditioning: programConditioning,
    mobility: programMobility,
  }

  const spans = [
    'md:col-span-4 md:row-span-2',
    'md:col-span-2 md:row-span-1',
    'md:col-span-2 md:row-span-1',
    'md:col-span-3 md:row-span-1',
    'md:col-span-3 md:row-span-1',
  ]

  return (
    <section id="programs" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Five tracks"
          title="PICK YOUR STIMULUS"
          copy="Each track is a full periodised system, not a workout list. Switch whenever your goal shifts."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[repeat(3,11rem)]">
          {programs.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className={`tile group col-span-1 ${spans[i]}`}
            >
              {images[p.id] && (
                <>
                  <img
                    src={images[p.id]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" />
                </>
              )}
              <div className="relative flex h-full min-h-[10rem] flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-4xl leading-none">
                    {p.name.toUpperCase()}
                  </h3>
                  <span className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-glow">
                    {p.sessions}
                  </span>
                </div>
                <div>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70">
                    {p.focus}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Method() {
  const steps = [
    {
      n: '01',
      title: 'ASSESS',
      copy: 'A 20-minute movement and strength baseline sets your starting loads — no guesswork.',
    },
    {
      n: '02',
      title: 'ADAPT',
      copy: 'Weekly volume shifts with your logged RPE and recovery. Bad week? The plan pulls back.',
    },
    {
      n: '03',
      title: 'ADVANCE',
      copy: 'Every block ends in a retest. You either moved the number or we change the approach.',
    },
  ]

  return (
    <section
      id="method"
      className="scroll-mt-20 border-y border-border px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="The method"
          title="THREE MOVES, REPEATED"
          copy="A loop we run every six weeks, for every member, on every track."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="tile">
              <div className="p-8">
                <span className="font-display text-7xl leading-none text-primary/45">
                  {s.n}
                </span>
                <h3 className="mt-6 font-display text-3xl leading-none">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Coaches() {
  return (
    <section id="coaches" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Who writes your week"
          title="THE COACHES"
          copy="Small team, deep specialisation. You are assigned one, not passed around."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={i * 110} className="tile group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={coachPhotos[i]}
                  alt={`${c.name}, ${c.role}`}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-glow">
                    {c.role}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-none">
                    {c.name.toUpperCase()}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm text-muted-foreground">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70">
                    {c.stat}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  const stats = [
    { label: 'Avg. squat gain / 6 months', to: 27, suffix: 'kg' },
    { label: 'Sessions completed', to: 1.42, suffix: 'M', decimals: 2 },
    { label: 'Members retained past year 1', to: 92, suffix: '%' },
  ]

  return (
    <section className="border-y border-border px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Receipts" title="THE NUMBERS MOVED" />
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="tile md:col-span-2"
            >
              <div className="p-8">
                <p className="font-display text-6xl leading-none text-foreground">
                  <CountUp
                    to={s.to}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={200 + i * 120}
              className="tile md:col-span-3"
            >
              <div className="flex h-full flex-col justify-between p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <p className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {t.name} · {t.meta}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Membership() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Membership"
          title="TWO WAYS IN"
          copy="Cancel any time. Both tiers include the full training dashboard."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="tile">
              <div
                className={`flex h-full flex-col p-8 ${
                  t.highlight ? 'bg-primary/10' : ''
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-4xl leading-none">
                    {t.name.toUpperCase()}
                  </h3>
                  <p className="font-display text-4xl leading-none text-glow">
                    {t.price}
                    <span className="ml-1 text-sm text-muted-foreground">
                      {t.period}
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t.blurb}</p>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/dashboard"
                  className={`mt-10 inline-flex justify-center rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-300 hover:scale-[1.02] ${
                    t.highlight
                      ? 'glow-button bg-primary text-primary-foreground'
                      : 'border border-border text-foreground hover:border-primary'
                  }`}
                >
                  <span className="relative z-10">Choose {t.name}</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <Reveal className="tile mx-auto max-w-7xl">
        <img
          src={ctaGym}
          alt=""
          aria-hidden
          loading="lazy"
          className="drift absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative flex flex-col items-start gap-6 p-10 sm:p-16">
          <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.85]">
            THE BAR IS
            <br />
            <span className="text-glow">STILL LOADED</span>
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Take the baseline assessment today and your first block is written
            tonight.
          </p>
          <Link
            to="/dashboard"
            className="glow-button rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">See the dashboard</span>
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <Reveal>
      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-glow">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.88]">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          {copy}
        </p>
      )}
    </Reveal>
  )
}
