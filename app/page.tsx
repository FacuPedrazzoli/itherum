import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Servicios } from '@/components/servicios'
import { Nosotros } from '@/components/nosotros'
import { Proyectos } from '@/components/proyectos'
import { Diferencial } from '@/components/diferencial'
import { Stack } from '@/components/stack'
import { Testimonios } from '@/components/testimonios'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { ScrollProgress, ScrollToTop } from '@/components/scroll-utils'

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
        <Servicios />
        <Nosotros />
        <Proyectos />
        <Diferencial />
        <Stack />
        <Testimonios />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
