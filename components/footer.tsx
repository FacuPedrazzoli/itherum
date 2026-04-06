'use client'

import { useState } from 'react'
import { Github, Linkedin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

const footerLinks = {
  producto: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Nosotros', href: '#nosotros' },
  ],
  recursos: [
    { label: 'Blog', href: '/blog' },
    { label: 'Trabajo', href: '/work' },
    { label: 'FAQ', href: '#faq' },
  ],
  contacto: [
    { label: 'hola@itherum.com', href: 'mailto:hola@itherum.com' },
    { label: 'Argentina · Remoto', href: '#' },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      toast.success('¡Suscrito!', {
        description: 'Te mantenemos actualizado.',
        duration: 3000,
      })
    }, 600)
  }

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Accent line at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 3%, transparent) 0%, transparent 50%)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 rounded-2xl"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-lg mb-1" style={{ color: 'var(--color-text-primary)' }}>
                Enterate primero
              </h4>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Newsletter con insights de producto y tecnología. Sin spam.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 min-w-[280px]">
              {!isSubscribed ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <Send size={16} />
                    )}
                  </motion.button>
                </>
              ) : (
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-accent)' }}>
                  <CheckCircle2 size={18} />
                  <span>¡Suscrito!</span>
                </div>
              )}
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group mb-4"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo-sin-fondo.svg"
                alt="Itherum"
                className="h-7 w-auto object-contain"
              />
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-accent)' }}
              />
            </motion.button>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}>
              Tecnología con sentido común. Micro-agencia de software especializada en productos digitales de alto impacto.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Producto
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.producto.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Recursos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Contacto
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 inline-block"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Itherum. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-5">
            <motion.a
              href="https://www.linkedin.com/company/itherum/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-all duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-all duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
              aria-label="GitHub"
            >
              <Github size={14} />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}