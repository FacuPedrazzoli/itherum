import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: 'Proyecto no encontrado — Itherum' }
  }

  return {
    title: `${project.title} — Itherum`,
    description: project.description,
  }
}

function ProjectJsonLd({ project }: { project: { title: string; description: string; slug: string; category: string; stack: string[] } }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: project.title,
    description: project.description,
    category: project.category,
    brand: {
      '@type': 'Brand',
      name: 'Itherum',
    },
    provider: {
      '@type': 'Organization',
      name: 'Itherum',
      url: 'https://itherum-eight.vercel.app',
    },
    url: `https://itherum-eight.vercel.app/work/${project.slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <ProjectJsonLd project={project} />
      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={16} />
          Volver a trabajo
        </Link>
      </div>

      <div className="relative aspect-[21/9] max-h-[600px]" style={{ backgroundColor: 'var(--color-surface)' }}>
        <Image
          src={project.images[0].src}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,8,7,0.3) 0%, rgba(5,8,7,0.7) 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{
                backgroundColor: 'var(--color-accent-dim)',
                color: 'var(--color-accent)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              {project.category}
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {project.title}
            </h1>

            <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              {project.description}
            </p>

            <div className="space-y-8">
              <div>
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  El desafío
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Nuestra solución
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: 'var(--color-accent-dim)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Resultado
              </h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: 'var(--color-accent)' }} className="shrink-0 mt-0.5" />
                <p className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  {project.result}
                </p>
              </div>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Métricas clave
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div
                        className="font-heading font-bold text-2xl mb-1"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {project.testimonial && (
          <div className="mt-12">
            <div
              className="rounded-2xl p-8 relative"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Quote
                size={32}
                className="absolute top-6 right-6 opacity-20"
                style={{ color: 'var(--color-accent)' }}
              />
              <blockquote className="relative">
                <p
                  className="text-lg md:text-xl mb-4 italic"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div>
                    <div
                      className="font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {project.testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {project.testimonial.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Galería del proyecto
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((image, idx) => (
              <div
                key={image.id}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: idx === 0 ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <h3
            className="text-xl font-bold mb-8"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Otros proyectos
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0" style={{ backgroundColor: 'var(--color-elevated)' }}>
                  <Image
                    src={p.images[0].src}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold truncate transition-colors group-hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {p.title}
                  </h4>
                  <p className="text-sm truncate" style={{ color: 'var(--color-text-muted)' }}>
                    {p.category}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}