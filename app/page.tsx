import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { LogoBar } from '@/components/logo-bar'
import { Servicios } from '@/components/servicios'
import { Pilares } from '@/components/pilares'
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
      <LogoBar />
      <Servicios />
      <Pilares />
      <Proyectos />
      <Diferencial />
      <Stack />
      <Testimonios />
      <CTA />
      <Footer />
    </main>
  )
}
