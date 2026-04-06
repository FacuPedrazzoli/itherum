'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    if (target === 0) { setCount(0); return }
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

const WORDS = ['Construimos', 'tecnología', 'con', 'sentido', 'común.']

function AnimatedHeadline() {
  const [showSecondLine, setShowSecondLine] = useState(false)

  return (
    <h1
      className="font-heading font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.05em] mb-10"
      style={{ color: 'var(--color-text-primary)' }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-x-3">
          {WORDS.slice(0, 2).map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block"
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
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-x-3"
            >
              {WORDS.slice(2).map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    duration: 0.7, 
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
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

function FloatingParticle({ delay, duration, size, startX, startY }: {
  delay: number
  duration: number
  size: number
  startX: number
  startY: number
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

function MeshGradient() {
  const orbs = [
    { x: '20%', y: '30%', size: 600, color: 'hsl(157 76% 61% / 0.12)', duration: 20 },
    { x: '70%', y: '20%', size: 500, color: 'hsl(270 60% 50% / 0.06)', duration: 25 },
    { x: '80%', y: '70%', size: 550, color: 'hsl(200 70% 50% / 0.05)', duration: 22 },
    { x: '15%', y: '75%', size: 480, color: 'hsl(157 76% 61% / 0.08)', duration: 18 },
    { x: '50%', y: '50%', size: 700, color: 'hsl(157 50% 50% / 0.04)', duration: 28 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            x: ['-50%', '-45%', '-55%', '-50%'],
            y: ['-50%', '-45%', '-55%', '-50%'],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
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
      className="text-lg md:text-xl max-w-2xl mx-auto"
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
  const [started, setStarted] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setStarted(true), 100)
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200)
    const secondLineTimer = setTimeout(() => setShowSecondLine(true), 400)
    return () => {
      clearTimeout(timer)
      clearTimeout(subtitleTimer)
      clearTimeout(secondLineTimer)
    }
  }, [])

  const c1 = useCountUp(20, 1400, started)
  const c2 = useCountUp(3, 1000, started)
  const c3 = useCountUp(100, 1200, started)

  const particles = Array.from({ length: 20 }, (_, i) => ({
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
            <FloatingParticle key={i} {...p} />
          ))}
        </div>
      )}

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center"
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
              className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
            >
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px var(--color-accent-glow)' }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-sm font-semibold text-base"
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
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-sm font-medium text-base"
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
              className="relative w-full max-w-3xl mx-auto"
            >
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(hsl(157 76% 61%) 1px, transparent 1px), linear-gradient(90deg, hsl(157 76% 61%) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              
              <div className="grid grid-cols-3 gap-8 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
                {[
                  { value: `+${c1}`, label: 'Proyectos', suffix: '' },
                  { value: c2, label: 'Servicios', suffix: '' },
                  { value: `${c3}%`, label: 'Código revisado', suffix: '' },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <motion.p 
                      className="font-heading font-black text-[clamp(2.7rem,7.2vw,6.3rem)] leading-[1] tracking-[-0.04em]"
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