'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, FolderOpen, Heart } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500
          const startTime = performance.now()

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(eased * value)
            setDisplay(String(current))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="select-none">
      <div 
        className="font-heading font-extrabold leading-[1] mb-2"
        style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--color-accent)',
          letterSpacing: '-0.04em',
          opacity: 0.15,
        }}
      >
        {display}{suffix}
      </div>
      <span 
        className="text-sm uppercase tracking-widest font-medium"
        style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
      >
        {label}
      </span>
    </div>
  )
}

const stats = [
  { value: 7, suffix: '+', label: 'Años de experiencia', icon: Clock },
  { value: 50, suffix: '+', label: 'Proyectos entregados', icon: FolderOpen },
  { value: 99, suffix: '%', label: 'Clientes satisfechos', icon: Heart },
]

const pillars = [
  {
    title: 'Criterio humano primero',
    body: 'Usamos IA para ser más eficientes. Pero el análisis estratégico, la arquitectura y el pulido visual siempre pasan por nuestro ojo. No entregamos nada que no hayamos cuestionado y probado.',
  },
  {
    title: 'Diseño que resuelve',
    body: 'No hacemos interfaces lindas. Hacemos interfaces que funcionan. Si un usuario no entiende qué hacer en los primeros 3 segundos, el diseño falló. Punto.',
  },
  {
    title: 'Código con visión de futuro',
    body: 'No parcheamos hoy para que explote mañana. Tu inversión en software debe ser un activo real para tu empresa, no un gasto constante en reparaciones.',
  },
]

export function Pilares() {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Accent gradient line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Stats row */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16"
          >
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <motion.div
                key={label}
                className="text-center p-4 md:p-6 rounded-xl relative group cursor-default"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'var(--color-accent)',
                  boxShadow: '0 12px 40px -12px var(--color-accent-glow)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-3">
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                </div>
                <AnimatedStat value={value} suffix={suffix} label={label} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pillars row */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                color: 'var(--color-accent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
              }}
            >
              Nuestro enfoque
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Tres principios. Sin excepciones.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="relative px-6 md:px-10 pb-8 md:pb-0"
              >
                {idx < pillars.length - 1 && (
                  <div
                    className="hidden md:block absolute top-0 right-0 bottom-0 w-px"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  />
                )}
                {idx < pillars.length - 1 && (
                  <div
                    className="md:hidden absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  />
                )}

                <div 
                  className="w-8 h-0.5 mb-6"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />

                <h3
                  className="font-heading font-bold text-lg mb-3"
                  style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
                >
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}