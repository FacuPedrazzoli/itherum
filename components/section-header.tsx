'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function SectionHeader({ label, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`text-center mb-16 ${className}`}
    >
      <motion.span
        variants={itemVariants}
        className="inline-block text-xs font-medium uppercase tracking-widest mb-4"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
      >
        {label}
      </motion.span>
      <motion.h2
        variants={itemVariants}
        className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
        style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base"
          style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}