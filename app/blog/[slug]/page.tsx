import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { getPostBySlug, blogPosts } from '@/data/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: 'Artículo no encontrado — Itherum' }
  }

  return {
    title: `${post.title} — Itherum Blog`,
    description: post.excerpt,
  }
}

function BlogJsonLd({ post }: { post: { title: string; excerpt: string; date: string; author: string; slug: string } }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://itherum-eight.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Itherum',
      logo: {
        '@type': 'ImageObject',
        url: 'https://itherum-eight.vercel.app/logo-sin-fondo.svg',
      },
    },
    url: `https://itherum-eight.vercel.app/blog/${post.slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <BlogJsonLd post={post} />
      <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[var(--color-accent)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <article>
          <div className="flex items-center gap-4 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--color-accent-dim)',
                  color: 'var(--color-accent)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mb-8 pb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <Clock size={14} />
              {post.readTime} de lectura
            </span>
          </div>

          <div
            className="prose prose-invert max-w-none"
            style={{ color: 'var(--color-text-muted)' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <h3
            className="text-xl font-bold mb-8"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Otros artículos
          </h3>

          <div className="grid gap-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block p-4 rounded-xl transition-all duration-300 hover:scale-[1.01]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {p.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--color-accent-dim)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4
                  className="font-semibold transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {p.title}
                </h4>
                <p className="text-sm line-clamp-1 mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
    </>
  )
}