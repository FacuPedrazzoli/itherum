import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Blog — Itherum',
  description: 'Artículos sobre desarrollo web, diseño de productos y tecnología. Compartimos nuestro conocimiento.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:text-[var(--color-accent)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
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
            Blog
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Ideas y{' '}
            <span style={{ color: 'var(--color-accent)' }}>conocimiento</span>
          </h1>

          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
            Compartimos artículos sobre desarrollo web, diseño de productos y 
            las mejores prácticas que aprendemos en el camino.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--color-accent-dim)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2
                className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--color-accent)]"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {post.title}
              </h2>

              <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <div
                className="flex items-center gap-2 text-sm font-medium mt-4 transition-colors"
                style={{ color: 'var(--color-accent)' }}
              >
                Leer artículo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}