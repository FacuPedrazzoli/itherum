'use client'

import { useCallback, useState, useEffect, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const testimonials = [
  {
    quote:
      'Nos entregaron el dashboard en 3 semanas. Funciona perfecto y el equipo lo adoptó de inmediato. Sin sorpresas en el camino.',
    initials: 'LP',
    name: 'Lucas Pereyra',
    role: 'Gerente de Operaciones · TechGrid SA',
  },
  {
    quote:
      'Por fin un equipo que dice "eso no conviene hacerlo así" en vez de simplemente ejecutar lo que pedís. Eso vale oro.',
    initials: 'VM',
    name: 'Valentina Moreno',
    role: 'CEO · NovaStart',
  },
  {
    quote:
      'La comunicación fue lo mejor. En todo momento supimos en qué estado estaba el proyecto. Sin reuniones innecesarias.',
    initials: 'MG',
    name: 'Martín Gutiérrez',
    role: 'CTO · Finloop',
  },
]

const Stars = memo(function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
      ))}
    </div>
  )
})

export function Testimonios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    containScroll: 'trimSnaps',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    setSelectedIndex(emblaApi.selectedScrollSnap())

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || isPaused) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, isPaused])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  return (
    <section
      id="testimonios"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: 'var(--color-bg)' }}
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
              Lo que dicen
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Sin testimonios genéricos.
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}
            >
              Personas reales, proyectos reales.
            </p>
          </motion.div>

          {/* Mobile carousel with embla */}
          <div 
            className="relative md:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5">
                {testimonials.map((t, index) => (
                  <div
                    key={`${t.name}-${index}`}
                    className="itherum-card rounded-xl p-8 min-w-[280px] snap-center flex flex-col relative"
                  >
                    {/* Decorative quote mark */}
                    <Quote 
                      size={48} 
                      className="absolute top-4 right-4 opacity-[0.05]" 
                      style={{ color: 'var(--color-accent)' }} 
                    />
                    
                    <Stars />
                    <p
                      className="text-sm leading-relaxed flex-1 mb-6"
                      style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                      <motion.div
                        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold"
                        style={{ 
                          backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)', 
                          color: 'var(--color-accent)',
                          boxShadow: '0 0 0 2px transparent',
                        }}
                        whileHover={{ boxShadow: '0 0 0 2px var(--color-accent)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {t.initials}
                      </motion.div>
                      <div>
                        <p
                          className="font-heading font-semibold text-sm"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {t.name}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === selectedIndex ? 'var(--color-accent)' : 'var(--color-border)',
                    transform: index === selectedIndex ? 'scale(1.3)' : 'scale(1)',
                  }}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <motion.div
            variants={containerVariants}
            className="hidden md:grid md:grid-cols-3 gap-5"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={`${t.name}-${index}`}
                variants={itemVariants}
                className="relative flex flex-col p-7 rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderTop: '2px solid var(--color-accent)',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px -12px var(--color-accent-glow)',
                  borderColor: 'var(--color-accent)',
                }}
              >
                {/* Decorative quote mark */}
                <Quote 
                  size={64} 
                  className="absolute top-4 right-4 opacity-[0.04]" 
                  style={{ color: 'var(--color-accent)' }} 
                />
                
                <Stars />
                <p
                  className="text-sm leading-relaxed flex-1 mb-5 italic relative z-10"
                  style={{ color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.8 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 relative z-10" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-base font-semibold"
                    style={{ 
                      backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)', 
                      color: 'var(--color-accent)',
                      border: '1px solid var(--color-border)',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: 'var(--color-accent)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.initials}
                  </motion.div>
                  <div>
                    <p
                      className="font-heading font-semibold text-sm"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
