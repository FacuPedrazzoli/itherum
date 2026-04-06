import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ScrollProgress, ScrollToTop } from '@/components/scroll-utils'

const Servicios = lazy(() => import('@/components/servicios').then(m => ({ default: m.Servicios })))
const Nosotros = lazy(() => import('@/components/nosotros').then(m => ({ default: m.Nosotros })))
const Proyectos = lazy(() => import('@/components/proyectos').then(m => ({ default: m.Proyectos })))
const Diferencial = lazy(() => import('@/components/diferencial').then(m => ({ default: m.Diferencial })))
const Stack = lazy(() => import('@/components/stack').then(m => ({ default: m.Stack })))
const Testimonios = lazy(() => import('@/components/testimonios').then(m => ({ default: m.Testimonios })))
const CTA = lazy(() => import('@/components/cta').then(m => ({ default: m.CTA })))
const Footer = lazy(() => import('@/components/footer').then(m => ({ default: m.Footer })))

const fallbacks = {
  Servicios: <div className="min-h-[60vh]" />,
  Nosotros: <div className="min-h-[50vh]" />,
  Proyectos: <div className="min-h-[70vh]" />,
  Diferencial: <div className="min-h-[40vh]" />,
  Stack: <div className="min-h-[30vh]" />,
  Testimonios: <div className="min-h-[50vh]" />,
  CTA: <div className="min-h-[40vh]" />,
  Footer: <div className="min-h-[20vh]" />,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Itherum',
  description: 'Micro-agencia de software de Argentina. Tecnología con sentido común.',
  url: 'https://itherum-eight.vercel.app',
  logo: 'https://itherum-eight.vercel.app/logo-sin-fondo.svg',
  email: 'hola@itherum.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
    addressRegion: 'Argentina',
  },
  sameAs: [
    'https://www.linkedin.com/company/itherum/',
    'https://github.com/FacuPedrazzoli/itherum',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <Hero />
        <Suspense fallback={fallbacks.Servicios}><Servicios /></Suspense>
        <Suspense fallback={fallbacks.Nosotros}><Nosotros /></Suspense>
        <Suspense fallback={fallbacks.Proyectos}><Proyectos /></Suspense>
        <Suspense fallback={fallbacks.Diferencial}><Diferencial /></Suspense>
        <Suspense fallback={fallbacks.Stack}><Stack /></Suspense>
        <Suspense fallback={fallbacks.Testimonios}><Testimonios /></Suspense>
        <Suspense fallback={fallbacks.CTA}><CTA /></Suspense>
        <Suspense fallback={fallbacks.Footer}><Footer /></Suspense>
      </main>
    </>
  )
}
