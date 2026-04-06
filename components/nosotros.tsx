'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Zap, MessageCircle } from 'lucide-react'
import Image from 'next/image'

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
    <div ref={ref} className="text-center">
      <div 
        className="font-heading font-extrabold leading-[1] mb-2"
        style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: 'var(--color-accent)',
          letterSpacing: '-0.04em',
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
  { value: 7, suffix: '+', label: 'Años de experiencia' },
  { value: 20, suffix: '+', label: 'Proyectos entregados' },
  { value: 98, suffix: '%', label: 'Tasa de retención' },
]

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Construir software que resuelve problemas reales. No vendemos código, vendemos resultados que impactan en tu negocio.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description: 'Ser la referencia en Argentina de desarrollo de producto digital donde la calidad y la honestidad no son negociables.',
  },
  {
    icon: Heart,
    title: 'Por qué lo hacemos',
    description: 'Después de años viendo cómo el software se convierte en deuda técnica, decidimos hacer las cosas diferente. Bien desde el primer día.',
  },
  {
    icon: Zap,
    title: 'Cómo lo hacemos',
    description: 'Con criterio humano primero. IA como herramienta, no como reemplazo. Cada decisión pasa por nuestro análisis estratégico.',
  },
]

export function Nosotros() {
  return (
    <section
      id="nosotros"
      className="pt-2 pb-12 md:pt-4 md:pb-20 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="relative w-48 h-48">
              <Image
                src="/logo-sin-fondo.svg"
                alt="Itherum"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
              color: 'var(--color-accent)',
              border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
            }}
          >
            Nuestra historia
          </span>

          <h2
            className="font-heading font-extrabold text-4xl md:text-5xl mb-6"
            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
          >
            Nacimos para hacer software que dura
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Itherum nació en Argentina con una filosofía simple: la tecnología debe resolver problemas reales, no crear nuevos.
          </p>

          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Después de años trabajando en empresas y viendo cómo el software se convertía en deuda técnica, decidimos hacer las cosas diferente. No vendemos horas de código. Vendemos soluciones que funcionan, se mantienen y hacen crecer tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
              }}
            >
              <AnimatedStat value={value} suffix={suffix} label={label} />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3
            className="text-2xl font-bold text-center mb-10"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Lo que nos define
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-xl relative group"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                >
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>

                <h4
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {title}
                </h4>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
