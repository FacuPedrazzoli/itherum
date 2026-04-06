export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'por-que-nextjs-es-el-futuro-del-desarrollo-web',
    title: 'Por qué Next.js es el futuro del desarrollo web',
    excerpt: 'Exploramos las razones por las que Next.js se ha convertido en la elección preferida para proyectos web modernos.',
    content: `
      <p>Next.js ha transformado fundamentalmente la forma en que construimos aplicaciones web. Con su arquitectura basada en React y su enfoque en el rendimiento, ofrece ventajas significativas para equipos de desarrollo.</p>
      
      <h2>Rendimiento optimizado</h2>
      <p>Una de las características más destacadas de Next.js es su capacidad para optimizar automáticamente el rendimiento. El Server-Side Rendering (SSR) y la Generación de Sitios Estáticos (SSG) permiten que las páginas se carguen más rápido, mejorando tanto la experiencia del usuario como el SEO.</p>
      
      <h2>Developer Experience</h2>
      <p>La experiencia de desarrollo es excepcional. Hot Module Replacement (HMR), fast refresh, y un sistema de rutas basado en el sistema de archivos hacen que el desarrollo sea rápido e intuitivo.</p>
      
      <h2>Escalabilidad</h2>
      <p>Desde startups hasta grandes empresas, Next.js escala sin problemas. Vercel, Twitch, Hulu y muchas otras compañías confían en Next.js para sus productos de alto tráfico.</p>
    `,
    author: 'Itherum Team',
    date: '2026-03-15',
    readTime: '5 min',
    tags: ['Next.js', 'React', 'Desarrollo Web'],
    featured: true,
  },
  {
    id: 2,
    slug: 'buenas-practicas-ux-para-formularios',
    title: 'Buenas prácticas de UX para formularios',
    excerpt: 'Guía completa sobre cómo diseñar formularios que los usuarios disfrutan completar.',
    content: `
      <p>Los formularios son uno de los elementos más críticos en cualquier interfaz web. Un formulario bien diseñado puede significar la diferencia entre un usuario que completa una conversión o uno que abandona.</p>
      
      <h2>Simplicidad es clave</h2>
      <p>Cada campo que agregues es una barrera para el usuario. Solo pide la información absolutamente necesaria. Si puedes resolverlo con un campo en lugar de tres, hazlo.</p>
      
      <h2>Validación en tiempo real</h2>
      <p>La validación mientras el usuario escribe es mucho mejor que mostrar errores al enviar. Esto permite corregir errores inmediatamente y reduce la frustración.</p>
      
      <h2>Feedback visual claro</h2>
      <p>El usuario debe saber en todo momento qué está pasando. Estados de carga, confirmaciones de éxito y mensajes de error claros son esenciales.</p>
    `,
    author: 'Itherum Team',
    date: '2026-03-08',
    readTime: '4 min',
    tags: ['UX', 'Diseño', 'Formularios'],
    featured: true,
  },
  {
    id: 3,
    slug: 'como-elegir-la-tecnologia-correcta',
    title: 'Cómo elegir la tecnología correcta para tu proyecto',
    excerpt: 'Factores importantes a considerar al seleccionar el stack tecnológico para tu próximo proyecto.',
    content: `
      <p>Elegir la tecnología equivocada puede condemnar un proyecto al fracaso. Aquí te compartimos algunos factores cruciales que deberías considerar.</p>
      
      <h2>Conoce tu caso de uso</h2>
      <p>No existe una tecnología universalmente mejor. El mejor stack depende del problema que necesitas resolver. Un e-commerce tiene necesidades diferentes a una red social.</p>
      
      <h2>Considera el equipo</h2>
      <p>La tecnología más poderosa no sirve de nada si tu equipo no la conoce. A veces es mejor elegir herramientas que el equipo pueda dominar rápidamente.</p>
      
      <h2>Piensa en el largo plazo</h2>
      <p>El mantenimiento a largo plazo es crucial. Elige tecnologías con comunidades activas y buen soporte para asegurar que tu proyecto pueda evolucionar.</p>
    `,
    author: 'Itherum Team',
    date: '2026-02-28',
    readTime: '6 min',
    tags: ['Tecnología', 'Planificación', 'Proyectos'],
    featured: false,
  },
  {
    id: 4,
    slug: 'importancia-del-codigo-mantenible',
    title: 'La importancia del código mantenible',
    excerpt: 'Por qué escribir código que otros pueden entender es tan importante como escribir código que funciona.',
    content: `
      <p>El código que escribimos hoy será leído y modificado por otros (incluido nosotros mismos en el futuro). Código mantenible es código que valoriza el tiempo del equipo.</p>
      
      <h2>Nomenclatura clara</h2>
      <p>Los nombres de variables, funciones y componentes deben explicar su propósito. Si necesitas un comentario para explicar qué hace algo, probablemente el nombre no es suficientemente claro.</p>
      
      <h2>Principio de responsabilidad única</h2>
      <p>Cada función, módulo o componente debe hacer una sola cosa y hacerla bien. Esto facilita el testing, el debugging y la evolución del código.</p>
      
      <h2>Documentación necesaria</h2>
      <p>El código autodocumentado es ideal, pero a veces necesitamos explicar el "por qué". Los comments deben explicar intenciones, no qué hace el código.</p>
    `,
    author: 'Itherum Team',
    date: '2026-02-20',
    readTime: '5 min',
    tags: ['Código', 'Best Practices', 'Desarrollo'],
    featured: false,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}