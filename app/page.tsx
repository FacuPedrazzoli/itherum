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

export default function Home() {
  return (
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
  )
}
