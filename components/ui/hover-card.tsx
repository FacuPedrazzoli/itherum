'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -4,
        borderColor: 'hsl(157 76% 61% / 0.25)',
        boxShadow: '0 20px 40px -15px hsl(157 30% 4% / 0.15)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' as const }}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
      }}
    >
      {children}
    </motion.div>
  )
}