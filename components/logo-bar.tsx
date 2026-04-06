'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: 'Grupo Deltacentro', role: 'Sector Construcción' },
  { name: 'Nexo Health', role: 'Healthtech' },
  { name: 'Arrua Impermeabilizaciones', role: 'PyME Industrial' },
  { name: 'Mono Living', role: 'Proptech' },
  { name: 'TechGrid Operations', role: 'SaaS B2B' },
]

const stats = [
  { value: 20, suffix: '+', label: 'Proyectos' },
  { value: 100, suffix: '%', label: 'Entregados' },
  { value: 24, suffix: 'h', label: 'Tiempo de respuesta' },
]

function AnimatedValue({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * value)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return <span>{display}{suffix}</span>
}

export function LogoBar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="py-20 md:py-24"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center pt-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              className="p-4 rounded-xl transition-all duration-300"
              whileHover={{
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <p 
                className="font-heading font-bold text-2xl md:text-3xl"
                style={{ color: 'var(--color-accent)' }}
              >
                <AnimatedValue value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p 
                className="text-sm mt-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}