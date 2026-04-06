'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const WORDS = ['Construimos', 'tecnología', 'con', 'sentido', 'común.']

function AnimatedHeadline() {
  const [showSecondLine, setShowSecondLine] = useState(false)

  return (
    <h1
      className="font-heading font-black text-[clamp(2rem,8vw,9rem)] leading-[0.95] tracking-[-0.04em] mb-8 px-2"
      style={{ color: 'var(--color-text-primary)' }}
    >
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
          {WORDS.slice(0, 2).map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block will-change-transform"
            >
              {word === 'tecnología' ? (
                <span 
                  className="inline-block bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-text-primary)] to-[var(--color-accent)] bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent"
                  style={{ 
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {word}
                </span>
              ) : word}
            </motion.span>
          ))}
        </div>
        <AnimatePresence>
          {showSecondLine && (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 will-change-transform"
            >
              {WORDS.slice(2).map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    duration: 0.7, 
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </h1>
  )
}

function FloatingParticle({ delay, duration, size, startX, startY, willChange }: {
  delay: number
  duration: number
  size: number
  startX: number
  startY: number
  willChange?: boolean
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        backgroundColor: 'var(--color-accent)',
        opacity: 0.15,
        filter: 'blur(1px)',
        willChange: willChange ? 'transform' : 'auto',
      }}
      animate={{
        y: [0, -120, 0],
        x: [0, 40, 0],
        opacity: [0.1, 0.25, 0.1],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const orbAnimations = [
  { name: 'orb1', duration: '20s' },
  { name: 'orb2', duration: '25s' },
  { name: 'orb3', duration: '22s' },
  { name: 'orb4', duration: '18s' },
  { name: 'orb5', duration: '28s' },
]

function MeshGradient() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mql.matches)
    const handler = () => setReducedMotion(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const handleVisibility = () => setIsVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  const orbs = [
    { x: '20%', y: '30%', size: 600, color: 'hsl(157 76% 61% / 0.12)', anim: 'orb1' },
    { x: '70%', y: '20%', size: 500, color: 'hsl(270 60% 50% / 0.06)', anim: 'orb2' },
    { x: '80%', y: '70%', size: 550, color: 'hsl(200 70% 50% / 0.05)', anim: 'orb3' },
    { x: '15%', y: '75%', size: 480, color: 'hsl(157 76% 61% / 0.08)', anim: 'orb4' },
    { x: '50%', y: '50%', size: 700, color: 'hsl(157 50% 50% / 0.04)', anim: 'orb5' },
  ]

  return (
    <>
      <style>{`
        @keyframes orb1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-45%, -55%) scale(1.1); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-55%, -45%) scale(1.05); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -52%) scale(1.08); }
        }
        @keyframes orb4 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-52%, -48%) scale(1.1); }
        }
        @keyframes orb5 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-46%, -54%) scale(1.06); }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              background: orb.color,
              transform: 'translate(-50%, -50%)',
              animation: reducedMotion ? 'none' : `${orb.anim} ${orbAnimations[i].duration} ease-in-out infinite`,
              animationPlayState: reducedMotion || !isVisible ? 'paused' : 'running',
            }}
          />
        ))}
      </div>
    </>
  )
}

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i))
          i++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0"
      style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
    >
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-5 ml-1 align-middle"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
    </motion.span>
  )
}

export function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    setMounted(true)
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200)
    const secondLineTimer = setTimeout(() => setShowSecondLine(true), 400)
    return () => {
      clearTimeout(subtitleTimer)
      clearTimeout(secondLineTimer)
    }
  }, [])

  const [reducedMotion, setReducedMotion] = useState(false)
  
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mql.matches)
    const handler = () => setReducedMotion(mql.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  
  const particleCount = reducedMotion ? 0 : isMobile ? 6 : 12
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 15,
    size: 3 + Math.random() * 6,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }))

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <MeshGradient />

      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} willChange={!isMobile} />
          ))}
        </div>
      )}

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
      >
        <AnimatedHeadline />

        <AnimatePresence>
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <TypewriterText 
                text="Si estás acá, es porque buscás algo más que alguien que tire código. Buscás un equipo que entienda tu negocio, diseñe experiencias que conviertan y no te entregue un rompecabezas imposible de mantener."
                delay={0}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12 sm:mb-20 w-full px-4 sm:px-0"
            >
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px var(--color-accent-glow)' }}
                whileTap={{ scale: 0.97 }}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-sm font-semibold text-sm sm:text-base"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
              >
                Ver proyectos
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-sm font-medium text-sm sm:text-base"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  backgroundColor: 'transparent',
                }}
              >
                Contactar ahora
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl md:max-w-4xl mx-auto px-4 sm:px-6"
            >
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(hsl(157 76% 61%) 1px, transparent 1px), linear-gradient(90deg, hsl(157 76% 61%) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] place-items-center gap-6 md:gap-12 pt-6 md:pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
                {[
                  { value: '20+', label: 'Proyectos', suffix: '' },
                  { value: '100%', label: 'Código revisado', suffix: '' },
                  { value: '<6h', label: 'Tiempo de respuesta', suffix: '' },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <motion.p 
                      className="font-heading font-black text-[clamp(2rem,4vw,5rem)] leading-[1] tracking-[-0.04em]"
                      style={{ color: 'var(--color-accent)' }}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 + idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p 
                      className="text-xs uppercase tracking-[0.15em] mt-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.span 
          className="text-[10px] uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-text-muted)', opacity: 0.4 }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} style={{ color: 'var(--color-text-muted)', opacity: 0.4 }} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-1 z-50"
        style={{ 
          backgroundColor: 'var(--color-accent)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
        }}
      />
    </section>
  )
}