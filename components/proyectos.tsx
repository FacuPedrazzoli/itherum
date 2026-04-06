'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectImage {
  id: number
  src: string
  alt: string
}

interface Project {
  id: number
  category: string
  title: string
  description: string
  stack: string[]
  result: string
  images: ProjectImage[]
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Evento',
    title: 'Expo Formación UOCRA Argentina',
    description: 'Landing page para el evento anual organizado por UOCRA, uno de los sindicatos más importantes del sector de la construcción en Argentina. Espacio donde empresas líderes se reúnen para compartir charlas, exponer en stands, realizar competencias y producir podcasts en vivo.',
    stack: ['Landing Page', 'Diseño Web', 'UX/UI'],
    result: 'Evento anual con alta convocatoria',
    images: [
      { id: 1, src: '/projects/proyecto-1/1.jpg', alt: 'Vista principal del evento' },
      { id: 2, src: '/projects/proyecto-1/2.jpg', alt: 'Stands de empresas' },
      { id: 3, src: '/projects/proyecto-1/3.jpg', alt: 'Charlas y presentaciones' },
      { id: 4, src: '/projects/proyecto-1/4.jpg', alt: 'Competencias en vivo' },
      { id: 5, src: '/projects/proyecto-1/5.jpg', alt: 'Podcast en vivo' },
      { id: 6, src: '/projects/proyecto-1/6.jpg', alt: 'Ambiente general' },
      { id: 7, src: '/projects/proyecto-1/7.jpg', alt: 'Cierre del evento' },
    ],
  },
  {
    id: 2,
    category: 'Servicios',
    title: 'Arrua Impermeabilizaciones',
    description: 'Landing page para emprendimiento especializado en soluciones de impermeabilización de alta calidad. Transmite confianza y profesionalismo, destacando el uso de los mejores productos del mercado y el compromiso con resultados duraderos.',
    stack: ['Landing Page', 'Diseño Web', 'SEO'],
    result: 'Posicionamiento digital efectivo',
    images: [
      { id: 1, src: '/projects/proyecto-2/1.jpg', alt: 'Vista principal del sitio' },
      { id: 2, src: '/projects/proyecto-2/2.jpg', alt: 'Servicios de impermeabilización' },
      { id: 3, src: '/projects/proyecto-2/3.jpg', alt: 'Proyectos realizados' },
      { id: 4, src: '/projects/proyecto-2/4.jpg', alt: 'Detalle del trabajo' },
    ],
  },
  {
    id: 3,
    category: 'E-commerce',
    title: 'Mono eCommerce',
    description: 'E-commerce para Mono, una propuesta de vida alternativa centrada en monoambientes sustentables para personas que buscan desconectarse del ritmo urbano. Tienda online que transmite un estilo de vida: minimalismo, contacto con la naturaleza y autonomía.',
    stack: ['E-commerce', 'Tienda Online', 'Diseño UX'],
    result: 'Experiencia de compra cuidada',
    images: [
      { id: 1, src: '/projects/proyecto-3/1.jpg', alt: 'Tienda principal' },
      { id: 2, src: '/projects/proyecto-3/2.jpg', alt: 'Detalle de productos' },
      { id: 3, src: '/projects/proyecto-3/3.jpg', alt: 'Carrito de compra' },
      { id: 4, src: '/projects/proyecto-3/4.jpg', alt: 'Página de producto' },
    ],
  },
  {
    id: 4,
    category: 'Plataforma',
    title: 'Junto | Alternativa a Rentafriend',
    description: 'Plataforma que conecta personas que buscan compañía para actividades cotidianas o experiencias sociales. Sistema con registro de usuarios, perfiles detallados, búsqueda y filtrado, reservas y pasarela de pagos. Transmitir cercanía y confianza para público urbano que valora conexiones humanas genuinas.',
    stack: ['Web App', 'Sistema de Pagos', 'UX/UI'],
    result: 'Plataforma segura e intuitiva',
    images: [
      { id: 1, src: '/projects/proyecto-4/1.jpg', alt: 'Pantalla principal' },
      { id: 2, src: '/projects/proyecto-4/2.jpg', alt: 'Perfiles de usuarios' },
      { id: 3, src: '/projects/proyecto-4/3.jpg', alt: 'Sistema de reservas' },
      { id: 4, src: '/projects/proyecto-4/4.jpg', alt: 'Pasarela de pagos' },
      { id: 5, src: '/projects/proyecto-4/5.jpg', alt: 'Búsqueda de acompañantes' },
      { id: 6, src: '/projects/proyecto-4/6.jpg', alt: 'Experiencias sociales' },
    ],
  },
  {
    id: 5,
    category: 'SaaS',
    title: 'Orbit CRM',
    description: 'Plataforma de gestión de clientes para centralizar y optimizar relaciones comerciales de empresas en crecimiento. Gestión de contactos, seguimiento de oportunidades, historial de interacciones, automatización de tareas y reportes en tiempo real.',
    stack: ['SaaS', 'Dashboard', 'CRM'],
    result: 'Visibilidad total del pipeline',
    images: [
      { id: 1, src: '/projects/proyecto-5/1.jpg', alt: 'Dashboard principal' },
      { id: 2, src: '/projects/proyecto-5/2.jpg', alt: 'Gestión de contactos' },
      { id: 3, src: '/projects/proyecto-5/3.jpg', alt: 'Pipeline de ventas' },
      { id: 4, src: '/projects/proyecto-5/4.jpg', alt: 'Reportes en tiempo real' },
      { id: 5, src: '/projects/proyecto-5/5.jpg', alt: 'Automatizaciones' },
      { id: 6, src: '/projects/proyecto-5/6.jpg', alt: 'Vista móvil' },
    ],
  },
]

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project])

  const goToPrevious = useCallback(() => {
    if (!project || !project.images.length) return
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }, [project])

  const goToNext = useCallback(() => {
    if (!project || !project.images.length) return
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, project, goToPrevious, goToNext])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 95%, transparent)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col lg:flex-row"
            style={{ backgroundColor: 'var(--color-surface)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 80%, transparent)', color: 'var(--color-text-primary)' }}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="lg:w-[75%] aspect-[16/10] relative flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {project.images[currentImageIndex] && (
                    <Image
                      src={project.images[currentImageIndex].src}
                      alt={project.images[currentImageIndex].alt}
                      fill
                      sizes="75vw"
                      className="object-contain"
                      style={{ backgroundColor: 'var(--color-bg)' }}
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      goToPrevious()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 70%, transparent)', color: 'var(--color-text-primary)' }}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      goToNext()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 70%, transparent)', color: 'var(--color-text-primary)' }}
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 80%, transparent)', color: 'var(--color-text-primary)' }}
              >
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            <div
              className="lg:w-[40%] p-6 md:p-8 flex flex-col overflow-y-auto"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit mb-4"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)', color: 'var(--color-accent)', border: '1px solid var(--color-border)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                {project.category}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight leading-tight">
                {project.title}
              </h2>

              <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', color: 'var(--color-accent)', border: '1px solid var(--color-border)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="p-4 rounded-xl mb-6"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 8%, transparent)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
                  Resultado
                </p>
                <p className="text-[var(--color-text-primary)] font-medium">{project.result}</p>
              </div>

              <div className="mt-auto">
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Galería ({project.images.length} imágenes)
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl shrink-0 transition-all duration-200 hover:scale-105 ${
                        idx === currentImageIndex
                          ? 'ring-2 ring-[var(--color-accent)] opacity-100 scale-105'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="64px"
                        className="object-cover rounded-xl"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CarouselCard3D({
  project,
  index,
  activeIndex,
  total,
  onClick,
}: {
  project: Project
  index: number
  activeIndex: number
  total: number
  onClick: () => void
}) {
  const offset = index - activeIndex
  const absOffset = Math.abs(offset)
  
  const isActive = offset === 0
  const isPrev = offset === -1
  const isNext = offset === 1
  const isFar = absOffset >= 2

  let rotateY = 0
  let scale = 0.85
  let translateX = 0
  let opacity = 0.4
  let zIndex = 0
  let blur = 0

  if (isActive) {
    rotateY = 0
    scale = 1
    translateX = 0
    opacity = 1
    zIndex = 20
  } else if (isPrev) {
    rotateY = 45
    scale = 0.8
    translateX = -120
    opacity = 0.6
    zIndex = 10
    blur = 1
  } else if (isNext) {
    rotateY = -45
    scale = 0.8
    translateX = 120
    opacity = 0.6
    zIndex = 10
    blur = 1
  } else if (isFar) {
    rotateY = offset > 0 ? -60 : 60
    scale = 0.7
    translateX = offset > 0 ? 200 : -200
    opacity = 0
    zIndex = 0
    blur = 3
  }

  return (
    <motion.button
      onClick={onClick}
      className="absolute top-0 left-1/2 cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateX(-50%) translateX(${translateX}px) perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        filter: blur ? `blur(${blur}px)` : 'none',
        pointerEvents: 'auto',
      }}
      initial={false}
      animate={{
        transform: `translateX(-50%) translateX(${translateX}px) perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        filter: blur ? `blur(${blur}px)` : 'none',
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={isActive ? { scale: 1.02, boxShadow: '0 0 60px color-mix(in srgb, var(--color-accent) 40%, transparent)' } : {}}
    >
      <div
        className="relative w-[90vw] md:w-[80vw] lg:w-[850px] rounded-3xl overflow-hidden"
        style={{
          aspectRatio: '16/10',
          backgroundColor: 'var(--color-surface)',
          boxShadow: isActive 
            ? '0 25px 80px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px var(--color-border), 0 0 60px color-mix(in srgb, var(--color-accent) 15%, transparent)' 
            : '0 15px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Image
          src={project.images[0].src}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, 850px"
          className="object-cover"
          priority={isActive}
        />
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, color-mix(in srgb, var(--color-bg) 98%, transparent) 0%, color-mix(in srgb, var(--color-bg) 50%, transparent) 40%, color-mix(in srgb, var(--color-bg) 10%, transparent) 100%)',
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex gap-2 mb-3">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', color: 'var(--color-accent)' }}
            >
              {project.category}
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 80%, transparent)', color: 'var(--color-text-primary)' }}
            >
              {project.images.length} imágenes
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-2 tracking-tight">
            {project.title}
          </h3>

          <motion.div
            initial={false}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              Ver proyecto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </motion.div>
        </div>

        {isActive && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 0 1px var(--color-border)',
            }}
          />
        )}
      </div>
    </motion.button>
  )
}

export function Proyectos() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const totalProjects = projects.length

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1))
  }, [totalProjects])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1))
  }, [totalProjects])

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      goToNext()
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, goToNext])

  const handleOpen = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
    setIsPaused(true)
  }

  const handleClose = () => {
    setModalOpen(false)
    setIsPaused(false)
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (modalOpen) return
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }, [modalOpen, goToPrevious, goToNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section 
      id="proyectos" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const touchEndX = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToNext()
          else goToPrevious()
        }
        touchStartX.current = null
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(57,255,143,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8"
            style={{ 
              backgroundColor: 'color-mix(in srgb, var(--color-accent) 5%, transparent)',
              border: '1px solid var(--color-border)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--color-accent)' }}>
              Nuestros proyectos
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ 
color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.04em'
            }}
          >
            Cada proyecto cuenta{' '}
            <span style={{ color: 'var(--color-accent)' }}>una historia</span>
          </h2>

          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-lg">
            Hacé click en cada proyecto para ver el detalle y todas las imágenes.
          </p>
        </motion.div>

        <div className="relative h-[450px] md:h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => (
              <CarouselCard3D
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                activeIndex={activeIndex}
                total={totalProjects}
                onClick={() => handleOpen(project)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: idx === activeIndex ? 'var(--color-accent)' : 'var(--color-border)',
                  transform: idx === activeIndex ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="text-center mt-4 text-[var(--color-text-subtle)] text-xs">
          {isPaused ? 'Pausado' : 'Avanzando automáticamente'} · Click para {isPaused ? 'reanudar' : 'pausar'}
        </p>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleClose}
      />
    </section>
  )
}