'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface UseScrollRevealOptions {
  delay?: number
  duration?: number
  once?: boolean
  y?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { delay = 0, duration = 0.5, once = true, y = 30 } = options
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: 'easeOut' as const },
    },
  }

  return {
    ref,
    variants,
    isInView,
  }
}

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function ScrollReveal({ children, className, delay = 0, duration = 0.5 }: ScrollRevealProps) {
  const { ref, variants } = useScrollReveal({ delay, duration })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={variants.visible}
      className={className}
    >
      {children}
    </motion.div>
  )
}