'use client'

import { motion } from 'framer-motion'
import { Code2, Layers, Lightbulb, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const services = [
  {
    icon: Code2,
    title: 'Desarrollo a medida',
    body: 'Web y mobile. Frontend, backend, integraciones. Código documentado y escalable que no explota en 6 meses.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'APIs REST'],
  },
  {
    icon: Layers,
    title: 'Diseño que resuelve',
    body: 'Interfaces que eliminan fricciones. Si en 3 segundos el usuario no sabe qué hacer, el diseño falló.',
    tags: ['Figma', 'Prototipado', 'Design System', 'User Testing'],
  },
  {
    icon: Lightbulb,
    title: 'Consultoría técnica',
    body: 'Antes de escribir una línea de código, hacemos las preguntas incómodas. Arquitectura, stack y roadmap sin vueltas.',
    tags: ['Arquitectura', 'Tech Stack', 'Code Review', 'Roadmap'],
  },
]

export function Servicios() {
  return (
    <section 
      id="servicios" 
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                color: 'var(--color-accent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
              }}
            >
              Lo que hacemos
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              No somos una fábrica masiva.
            </h2>
            <p
              className="mt-5 text-base max-w-lg mx-auto"
              style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
            >
              Elegimos proyectos donde podemos aportar valor real. Tres servicios. Foco total.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.title}
                  variants={itemVariants}
                  className="group relative p-8 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                  whileHover={{ 
                    y: -4,
                    borderColor: 'var(--color-accent)',
                    boxShadow: '0 20px 40px -15px var(--color-accent-glow)',
                  }}
                >
                  {/* Top accent line - appears on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  
                  {/* Shine sweep effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
                  >
                    <div 
                      className="absolute top-0 left-[-100%] w-1/2 h-full skew-x-[-20deg] group-hover:animate-[shine_0.8s_ease-in-out]"
                      style={{ 
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                      }}
                    />
                  </div>

                  <div className="mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                      }}
                      whileHover={{ rotate: 5 }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                    >
                      <Icon 
                        size={24} 
                        style={{ color: 'var(--color-accent)' }} 
                      />
                    </motion.div>
                  </div>

                  <h3
                    className="font-heading font-bold text-xl mb-3"
                    style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
                  >
                    {svc.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
                  >
                    {svc.body}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-sm transition-all duration-200 cursor-default hover:cursor-pointer"
                        style={{
                          color: 'var(--color-accent)',
                          border: '1px solid var(--color-border)',
                          backgroundColor: 'transparent',
                        }}
                        onMouseEnter={(e) => { 
                          e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 10%, transparent)';
                          e.currentTarget.style.borderColor = 'var(--color-accent)';
                        }}
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'var(--color-border)';
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Ver más
                    </span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} style={{ color: 'var(--color-accent)' }} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }
      `}</style>
    </section>
  )
}