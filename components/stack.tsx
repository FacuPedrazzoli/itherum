'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const columns = [
  {
    category: 'Frontend',
    items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'shadcn/ui', 'Figma'],
  },
  {
    category: 'Backend & Data',
    items: ['Supabase', 'PostgreSQL', 'Node.js', 'Prisma', 'Server Actions', 'REST APIs', 'Zod 4'],
  },
  {
    category: 'Tools & Infra',
    items: ['Vercel', 'GitHub', 'Linear', 'n8n', 'OpenAI', 'Resend', 'Stripe', 'Cal.com'],
  },
]

function TechItem({ name, isLast }: { name: string; isLast: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 py-3 transition-all duration-200 group cursor-default ${!isLast ? 'border-b' : ''}`}
      style={{ borderColor: 'var(--color-border)' }}
    >
      <span
        className="w-1.5 h-1.5 rounded-sm shrink-0 transition-colors duration-200"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <span
        className="text-sm transition-colors duration-200 group-hover:text-[var(--color-accent)]"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {name}
      </span>
    </div>
  )
}

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                color: 'var(--color-accent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 20%, transparent)',
              }}
            >
              Nuestro stack
            </span>
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-balance"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Tecnologías elegidas con criterio.
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}
            >
              No seguimos tendencias. Usamos lo que resuelve el problema.
            </p>
          </motion.div>

          {/* Stack columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <motion.div
                key={col.category}
                variants={itemVariants}
                className="itherum-card rounded-sm p-7"
              >
                <span
                  className="block text-xs font-medium uppercase tracking-widest mb-5"
                  style={{ color: 'var(--color-accent)', letterSpacing: '0.08em' }}
                >
                  {col.category}
                </span>
                <div className="flex flex-col">
                  {col.items.map((tech, idx) => (
                    <TechItem key={tech} name={tech} isLast={idx === col.items.length - 1} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
