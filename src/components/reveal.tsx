import type { ReactNode } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)

  return (
    <div
      ref={ref}
      className={cn('reveal', inView && 'reveal-in', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
