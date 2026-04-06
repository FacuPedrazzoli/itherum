import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Trabajo — Itherum',
  description: 'Proyectos seleccionados que muestran nuestro enfoque en diseño, desarrollo y resultados.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:text-[var(--color-accent)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <div className="mb-16">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{
              backgroundColor: 'var(--color-accent-dim)',
              color: 'var(--color-accent)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Portfolio
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Nuestro{' '}
            <span style={{ color: 'var(--color-accent)' }}>trabajo</span>
          </h1>

          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
            Cada proyecto es una oportunidad para crear algo significativo. 
            Acá compartimos algunos de nuestros trabajos más destacados.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="relative aspect-[16/10]" style={{ backgroundColor: 'var(--color-elevated)' }}>
                <Image
                  src={project.images[0].src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,15,12,0.8) 0%, transparent 50%)',
                  }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(57, 255, 143, 0.2)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h2
                  className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {project.title}
                </h2>

                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'var(--color-accent-dim)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Ver caso de estudio
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}