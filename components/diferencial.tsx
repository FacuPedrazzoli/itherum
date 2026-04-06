'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Brain, Shield, MessageSquare } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const items = [
  {
    icon: Zap,
    title: 'Velocidad real',
    body: 'La mayoría de los proyectos en 2 a 6 semanas. Rápido porque el proceso está afinado, no porque cortamos esquinas.',
  },
  {
    icon: Brain,
    title: 'Pensamiento de producto',
    body: 'No ejecutamos requerimientos a ciegas. Cuestionamos, proponemos y mejoramos lo que nos traés. Eso es lo que distingue una agencia de un taller de código.',
  },
  {
    icon: Shield,
    title: 'Código que dura',
    body: 'Tipado estricto, arquitectura documentada, decisiones explicadas. Tu próximo dev no va a querer matarnos. Te lo garantizamos.',
  },
  {
    icon: MessageSquare,
    title: 'Sin intermediarios',
    body: 'Hablás con quien construye. Sin account managers, sin malentendidos, sin "se lo paso al equipo". Comunicación directa desde el primer día.',
  },
]

function DiferencialItem({ icon: Icon, title, body }: { icon: typeof Zap; title: string; body: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative p-8 transition-all duration-300 cursor-default"
      style={{
        backgroundColor: hovered ? 'hsl(157 76% 61% / 0.03)' : 'var(--color-surface)',
        borderLeft: '2px solid hsl(157 76% 61% / 0.15)',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        size={22}
        className="mb-4"
        style={{ color: 'var(--color-accent)' }}
      />
      <h3
        className="font-heading font-bold text-base mb-3"
        style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
      >
        {body}
      </p>
    </div>
  )
}

export function Diferencial() {
  return (
    <section
      id="diferencial"
      className="py-24 md:py-32 relative"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                color: 'var(--color-accent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
              }}
            >
              Por qué Itherum
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Lo que nos hace distintos.
            </h2>
          </motion.div>

          {/* 2x2 grid with border lines effect */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '1px', backgroundColor: 'var(--color-border)' }}
          >
            {items.map((item) => (
              <DiferencialItem key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
