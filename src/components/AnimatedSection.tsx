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
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-zinc-500 text-base">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
    </div>
  )
}
