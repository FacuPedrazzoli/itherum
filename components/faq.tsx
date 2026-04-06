'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const faqs = [
  {
    q: '¿Cuánto tarda un proyecto típico?',
    a: 'Depende del scope. Landings: 1-2 semanas. Dashboards o apps medianas: 3-6 semanas. SaaS completo: 2-3 meses. Antes de arrancar, definimos juntos el alcance y la fecha de entrega. Sin sorpresas.',
  },
  {
    q: '¿Trabajan con clientes de cualquier país?',
    a: 'Sí. Trabajamos 100% remoto con clientes en Argentina, resto de LATAM, España y Estados Unidos. Nos adaptamos a distintos husos horarios sin problema.',
  },
  {
    q: '¿Qué pasa si necesito cambios después de la entrega?',
    a: 'Incluimos una ronda de ajustes post-entrega en todos los proyectos. Para cambios mayores o mantenimiento continuo, tenemos planes de retención mensual.',
  },
  {
    q: '¿Usan inteligencia artificial para desarrollar?',
    a: 'Sí, como herramienta de aceleración. Pero cada decisión de arquitectura, cada línea crítica y cada interfaz pasa por revisión humana. Entregamos calidad, no código generado sin criterio.',
  },
  {
    q: '¿Cómo arrancamos?',
    a: 'Con una llamada de 30 minutos sin compromiso. Nos contás el proyecto, nosotros hacemos las preguntas necesarias y en 48hs te mandamos una propuesta concreta. Sin formularios de 20 campos.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 relative"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
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
              className="inline-block text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}
            >
              Preguntas frecuentes
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Las preguntas que todos hacen.
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="py-1"
                  style={{ borderBottomColor: 'var(--color-border)' }}
                >
                  <AccordionTrigger
                    className="font-heading font-semibold text-base text-left hover:no-underline"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm leading-relaxed pb-4"
                    style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
