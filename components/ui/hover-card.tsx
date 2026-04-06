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
        borderColor: 'var(--color-accent)',
        boxShadow: '0 20px 40px -15px var(--color-accent-glow)',
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