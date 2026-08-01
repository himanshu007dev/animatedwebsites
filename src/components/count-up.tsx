import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

export function CountUp({
  to,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  to: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4)
  const [value, setValue] = useState(0)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(to * eased)
      if (p < 1) frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
