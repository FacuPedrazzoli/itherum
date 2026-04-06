'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-18 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-xl border-b'
            : 'border-b border-transparent'
        )}
        style={{
          backgroundColor: scrolled 
            ? 'color-mix(in srgb, var(--color-bg) 85%, transparent)' 
            : 'transparent',
          borderBottomColor: scrolled 
            ? 'hsl(157 30% 8%)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <Image
              src="/logo-sin-fondo.svg"
              alt="Itherum"
              width={44}
              height={44}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200 cursor-pointer relative group"
                style={{ color: activeSection === link.href.slice(1) ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
                onMouseEnter={(e) => { if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = 'var(--color-text-primary)' }}
                onMouseLeave={(e) => { if (activeSection !== link.href.slice(1)) e.currentTarget.style.color = 'var(--color-text-muted)' }}
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => handleNavClick('#contacto')}
              className="text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)' }}
            >
              Hablemos
            </button>
          </div>

          <button
            className="md:hidden p-2.5 rounded-sm transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ backgroundColor: 'rgba(10, 15, 12, 0.8)', backdropFilter: 'blur(8px)' }}
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] sm:w-80 flex flex-col p-8 pt-24 md:hidden"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderLeft: '1px solid var(--color-border)',
              }}
            >
              <button
                className="absolute top-6 right-6 p-2"
                style={{ color: 'var(--color-text-muted)' }}
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>

              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-xl font-semibold transition-colors duration-200 cursor-pointer"
                    style={{ color: 'var(--color-text-primary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3"
              >
                <ThemeToggle />
                <button
                  onClick={() => handleNavClick('#contacto')}
                  className="w-full text-sm font-semibold px-5 py-3 rounded-sm transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#0a0f0c' }}
                >
                  Hablemos →
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}