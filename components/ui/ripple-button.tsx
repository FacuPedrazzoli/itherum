'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RippleButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function RippleButton({ children, className, variant = 'primary' }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  const variantStyles = {
    primary: {
      bg: 'var(--color-accent)',
      text: '#080c0a',
    },
    secondary: {
      bg: 'transparent',
      text: 'var(--color-text-primary)',
    },
    ghost: {
      bg: 'transparent',
      text: 'var(--color-text-muted)',
    },
  }

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn('relative overflow-hidden rounded-sm font-semibold px-6 py-3 transition-colors', className)}
      style={{
        backgroundColor: variantStyles[variant].bg,
        color: variantStyles[variant].text,
        border: variant === 'secondary' ? '1px solid var(--color-border)' : 'none',
      }}
      type="button"
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </motion.button>
  )
}