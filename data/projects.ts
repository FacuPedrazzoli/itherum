export interface ProjectImage {
  id: number
  src: string
  alt: string
}

export interface Project {
  id: number
  slug: string
  category: string
  title: string
  description: string
  challenge: string
  solution: string
  stack: string[]
  result: string
  images: ProjectImage[]
  featured?: boolean
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  metrics?: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'expo-formacion-uocra',
    category: 'Evento',
    title: 'Expo Formación UOCRA Argentina',
    description: 'Plataforma digital integral para el evento anual de formación gremial más grande del sector construcción en Argentina. Más de 5,000 asistentes en 3 días.',
    challenge: 'UOCRA necesitaba una solución que pudiera manejar alta carga de tráfico durante el registro, mostrar contenido multimedia de más de 40 talleres en vivo, y generar reportes de asistencia en tiempo real. El desafío técnico era soportar 5,000 usuarios concurrentes sin precedentes para el equipo interno.',
    solution: 'Arquitectura serverless con Next.js 14 y edge functions. Implementamos streaming de video con baja latencia, registro con validación en tiempo real via API, y un dashboard de analytics en tiempo real con WebSockets. Todo desplegado en Vercel para garantizar disponibilidad.',
    stack: ['Next.js 14', 'TypeScript', 'Edge Functions', 'WebSockets', 'Vercel', 'Tailwind CSS', 'Radix UI'],
    result: '5,200 asistentes registrados, 0 downtime durante el evento, reportes de asistencia disponibles en menos de 30 segundos después de cada sesión.',
    metrics: [
      { label: 'Asistentes', value: '5,200+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Tiempo de carga', value: '<1.2s' },
    ],
    images: [
      { id: 1, src: '/projects/proyecto-1/1.jpg', alt: 'Vista principal del evento' },
      { id: 2, src: '/projects/proyecto-1/2.jpg', alt: 'Stands de empresas' },
      { id: 3, src: '/projects/proyecto-1/3.jpg', alt: 'Charlas y presentaciones' },
      { id: 4, src: '/projects/proyecto-1/4.jpg', alt: 'Competencias en vivo' },
      { id: 5, src: '/projects/proyecto-1/5.jpg', alt: 'Podcast en vivo' },
      { id: 6, src: '/projects/proyecto-1/6.jpg', alt: 'Ambiente general' },
      { id: 7, src: '/projects/proyecto-1/7.jpg', alt: 'Cierre del evento' },
    ],
    featured: true,
    testimonial: {
      quote: 'La plataforma superó todas las expectativas. Por primera vez tuvimos visibilidad real del attendance durante el evento.',
      author: 'Gustavo Bermúdez',
      role: 'Coordinador de Formación, UOCRA',
    },
  },
  {
    id: 2,
    slug: 'arrua-impermeabilizaciones',
    category: 'Servicios B2B',
    title: 'Arrua Impermeabilizaciones',
    description: 'Sistema de gestión de clientes y landing page para empresa de impermeabilización con presencia en Buenos Aires. Generamos leads calificados y optimizamos operaciones.',
    challenge: 'Arrua tenía una operación funcionando con WhatsApp y Excel. Cada vez que un cliente llamaba, tardaban 20 minutos en encontrar el historial del inmueble. Los presupuestos se perdían, los seguimientos no se hacían, y no había visibilidad de qué vendedor estaba convirtiendo más.',
    solution: 'Implementamos un CRM interno con Next.js + Supabase, integrado con WhatsApp Business API para captura automática de leads. Landing page con formularios inteligentes que cualifican leads antes de pasarlos al equipo comercial. Dashboard de seguimiento con métricas de conversión por etapa.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'WhatsApp API', 'Tailwind CSS', 'Zod'],
    result: '340% increase in leads qualified, 60% reduction en tiempo de respuesta a presupuestos, 2.4x improvement en tasa de cierre.',
    metrics: [
      { label: 'Leads mensuales', value: '+340%' },
      { label: 'Tiempo de respuesta', value: '-60%' },
      { label: 'Tasa de cierre', value: '2.4x' },
    ],
    images: [
      { id: 1, src: '/projects/proyecto-2/1.jpg', alt: 'Vista principal del sitio' },
      { id: 2, src: '/projects/proyecto-2/2.jpg', alt: 'Servicios de impermeabilización' },
      { id: 3, src: '/projects/proyecto-2/3.jpg', alt: 'Proyectos realizados' },
      { id: 4, src: '/projects/proyecto-2/4.jpg', alt: 'Detalle del trabajo' },
    ],
    testimonial: {
      quote: 'Por primera vez sabemos exactamente cuántos leads entran, de dónde vienen, y qué pasa con cada uno. El equipo está más organizado que nunca.',
      author: 'Carlos Arrua',
      role: 'Director, Arrua Impermeabilizaciones',
    },
  },
  {
    id: 3,
    slug: 'mono-ecommerce',
    category: 'E-commerce',
    title: 'Mono eCommerce',
    description: 'Tienda online para marca de monoambientes sustentables. Diseño inmersivo con storytelling de marca que aumentó el ticket promedio 45%.',
    challenge: 'Mono vendía en Instagram y Mercado Libre pero quería su propia plataforma. El desafío: crear una experiencia que justificara comprar directo (sin protección de marketplace) y que transmitiera los valores de sustentabilidad de la marca.',
    solution: 'Diseño UX centrado en el storytelling. Implementamos un configurador de productos 3D, páginas de producto con impacto ambiental calculado en tiempo real, y un sistema de suscripción para productos de consumo recurrente. Checkout optimizado con 3 clics máximo.',
    stack: ['Next.js 14', 'TypeScript', 'Stripe', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    result: 'Ticket promedio increased 45%, subscription revenue representa 35% del total, bounce rate reduced from 78% to 34%.',
    metrics: [
      { label: 'Ticket promedio', value: '+45%' },
      { label: 'Suscripciones', value: '35%' },
      { label: 'Bounce rate', value: '-44pp' },
    ],
    images: [
      { id: 1, src: '/projects/proyecto-3/1.jpg', alt: 'Tienda principal' },
      { id: 2, src: '/projects/proyecto-3/2.jpg', alt: 'Detalle de productos' },
      { id: 3, src: '/projects/proyecto-3/3.jpg', alt: 'Carrito de compra' },
      { id: 4, src: '/projects/proyecto-3/4.jpg', alt: 'Página de producto' },
    ],
    featured: true,
    testimonial: {
      quote: 'La gente compra en Mono porque la experiencia en la web es consistente con lo que representamos. No parece una tienda genérica.',
      author: 'María Fernández',
      role: 'Founder, Mono',
    },
  },
  {
    id: 4,
    slug: 'junto-plataforma',
    category: 'Plataforma',
    title: 'Junto | Alternativa a Rentafriend',
    description: 'Plataforma que conecta personas para actividades sociales. Sistema completo con verificación, pagos y mensajería. 12,000 usuarios activos en 6 meses.',
    challenge: 'El fundador tenía una visión clara: una plataforma segura donde la gente pudiera encontrar compañeros para actividades cotidianas. El reto era construir confianza en un contexto donde "conocer gente online" tiene mala reputación. Necesitábamos un sistema de verificación robusto sin hacerlo burocrático.',
    solution: 'Arquitectura con verificación gradual: documento + selfie + verificado por comunidad. Sistema de reputáción baseado en historial de actividades. Pagos en escrow con protección para ambas partes. Chat cifrado de extremo a extremo integrado en la plataforma.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Edge Functions', 'Twilio', 'Stripe Connect', 'Tailwind CSS'],
    result: '12,000 usuarios activos en 6 meses, 4.7 rating promedio de verificaciones, 0 incidentes de seguridad reportados.',
    metrics: [
      { label: 'Usuarios activos', value: '12,000+' },
      { label: 'Rating verificación', value: '4.7/5' },
      { label: 'Incidentes', value: '0' },
    ],
    images: [
      { id: 1, src: '/projects/proyecto-4/1.jpg', alt: 'Pantalla principal' },
      { id: 2, src: '/projects/proyecto-4/2.jpg', alt: 'Perfiles de usuarios' },
      { id: 3, src: '/projects/proyecto-4/3.jpg', alt: 'Sistema de reservas' },
      { id: 4, src: '/projects/proyecto-4/4.jpg', alt: 'Pasarela de pagos' },
      { id: 5, src: '/projects/proyecto-4/5.jpg', alt: 'Búsqueda de acompañantes' },
      { id: 6, src: '/projects/proyecto-4/6.jpg', alt: 'Experiencias sociales' },
    ],
    testimonial: {
      quote: 'Construyeron exactamente lo que tenía en mente pero mejor. La seguridad y verificación que implementaron superó mis expectativas.',
      author: 'Diego Ramírez',
      role: 'Founder, Junto',
    },
  },
  {
    id: 5,
    slug: 'orbit-crm',
    category: 'SaaS',
    title: 'Orbit CRM',
    description: 'CRM diseñado para PYMEs argentinas que no quieren la complejidad de Salesforce pero sí la funcionalidad. Dashboard intuitivo con pipeline visual.',
    challenge: 'Las PYMEs Argentinas enfrentan un problema único: los CRMs internacionales son demasiado complejos, caros, y no se adaptan a prácticas comerciales locales (crédito, financiación, negociación). El desafío era crear algo simple pero powerful.',
    solution: 'CRM con pipeline visual drag-and-drop, integración con WhatsApp Business para registro automático de conversaciones, módulo de crédito con scoring simplificado, y reportes gerenciales en español con métricas de negocio, no solo ventas.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Recharts', 'Zod'],
    result: '180 empresas utilizan Orbit, 40% reduction in tiempo de seguimiento comercial, NPS de 72 después de 6 meses.',
    metrics: [
      { label: 'Empresas activas', value: '180+' },
      { label: 'Tiempo de seguimiento', value: '-40%' },
      { label: 'NPS Score', value: '72' },
    ],
    images: [
      { id: 1, src: '/projects/proyecto-5/1.jpg', alt: 'Dashboard principal' },
      { id: 2, src: '/projects/proyecto-5/2.jpg', alt: 'Gestión de contactos' },
      { id: 3, src: '/projects/proyecto-5/3.jpg', alt: 'Pipeline de ventas' },
      { id: 4, src: '/projects/proyecto-5/4.jpg', alt: 'Reportes en tiempo real' },
      { id: 5, src: '/projects/proyecto-5/5.jpg', alt: 'Automatizaciones' },
      { id: 6, src: '/projects/proyecto-5/6.jpg', alt: 'Vista móvil' },
    ],
    featured: true,
    testimonial: {
      quote: 'Lo que más me gusta es que mi equipo de ventas realmente lo usa. Con Salesforce era un castigo, con Orbit es natural.',
      author: 'Andrés Montenegro',
      role: 'Gerente Comercial, Distribuidora Norte',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
