import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn('relative', className)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text-wide mb-3">{title}</h2>
      {subtitle && (
        <p className="text-zinc-500 text-base">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto flex items-center justify-center gap-1">
        <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #60a5fa, #2563eb)' }} />
        <div className="w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e3a8a)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)' }} />
      </div>
    </div>
  )
}
