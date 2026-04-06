import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Home, ArrowLeft, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main 
        className="min-h-screen flex items-center justify-center px-6"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div className="text-center max-w-xl">
          <h1 
            className="font-heading font-black text-[12rem] md:text-[16rem] leading-[0.8] mb-4 select-none"
            style={{ 
              color: 'var(--color-accent)',
              opacity: 0.1,
              letterSpacing: '-0.05em',
            }}
          >
            404
          </h1>

          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Página no encontrada
          </h2>
          <p 
            className="text-lg mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            La página que buscas no existe o fue movida. 
            Pero no te preocupes, podemos ayudarte a encontrar lo que necesitás.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              <Home size={18} />
              Volver al inicio
            </Link>
            <Link
              href="mailto:hola@itherum.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--color-surface)', 
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <MessageCircle size={18} />
              Contactanos
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
