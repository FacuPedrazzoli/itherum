'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, CheckCircle2, Send, MessageCircle, Clock, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FloatingInput, FloatingTextarea } from '@/components/ui/floating-input'
import { faqs } from './faq'

const benefits = [
  { text: 'Respuesta en menos de 24 horas', icon: Clock },
  { text: 'Primera llamada sin compromiso', icon: MessageCircle },
  { text: 'Propuesta personalizada en 48hs', icon: Sparkles },
]

const contactInfo = [
  { icon: Mail, label: 'hola@itherum.com', href: 'mailto:hola@itherum.com' },
  { icon: MapPin, label: 'Argentina · Remoto', href: '#' },
]

export function CTA() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !contact.trim() || !message.trim()) return
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      toast.success('Mensaje enviado', {
        description: 'Te respondemos en menos de 24 horas.',
        duration: 4000,
      })
    }, 800)
  }

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* LEFT COLUMN - FAQ + Benefits */}
          <div className="lg:w-[45%] lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-accent)', letterSpacing: '0.08em' }}
              >
                Preguntas frecuentes
              </span>

              <Accordion type="single" collapsible className="w-full mb-10">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="py-1 transition-colors duration-200"
                    style={{ borderBottomColor: 'var(--color-border)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 3%, transparent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                  >
                    <AccordionTrigger
                      className="font-heading font-semibold text-sm text-left hover:no-underline py-4 transition-colors duration-200"
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

              {/* Benefits with staggered animation */}
              <motion.div
                className="flex flex-col gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map(({ text, icon: Icon }) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)' }}
                    >
                      <Icon size={16} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div
            className="lg:w-[55%] lg:pl-12 lg:border-l"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                className="font-heading font-extrabold text-3xl md:text-4xl text-balance mb-3"
                style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
              >
                ¿Listo para construir algo increíble?
              </h2>
              <p
                className="text-base mb-8"
                style={{ color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.7 }}
              >
                Contanos tu proyecto y te respondemos con una propuesta concreta.
                Sin vueltas.
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8"
                  >
                    <FloatingInput
                      label="Tu nombre"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <FloatingInput
                      label="Email"
                      type="email"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                    <FloatingTextarea
                      label="¿Qué necesitás construir?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 mt-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: isSubmitting ? 'color-mix(in srgb, var(--color-accent) 70%, transparent)' : 'var(--color-accent)',
                        color: 'var(--color-bg)',
                      }}
                      whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 8px 30px -8px var(--color-accent-glow)' } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--color-text-primary)' }}
                      onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--color-accent)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Arrancamos
                          <Send size={16} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-5 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle2 size={56} style={{ color: 'var(--color-accent)' }} />
                    </motion.div>
                    <div className="text-center">
                      <p className="font-heading font-bold text-xl mb-1">¡Mensaje enviado!</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Te respondemos en menos de 24 horas.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social proof */}
              <p
                className="mt-6 text-center text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                +20 proyectos entregados • 100% de clientes satisfechos
              </p>

              {/* Contact links */}
              <div
                className="flex flex-wrap gap-6 justify-center mt-8 pt-8"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                {contactInfo.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 text-sm transition-all duration-200 cursor-pointer hover:scale-105"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}