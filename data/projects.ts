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
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'expo-formacion-uocra',
    category: 'Evento',
    title: 'Expo Formación UOCRA Argentina',
    description: 'Landing page para el evento anual organizado por UOCRA, uno de los sindicatos más importantes del sector de la construcción en Argentina.',
    challenge: 'Crear una experiencia digital que capturara la energía y dinamismo de un evento presencial de gran magnitud, con múltiples secciones de contenido y actividades.',
    solution: 'Desarrollamos una landing page inmersiva con animaciones suaves, galerías de imágenes y un diseño que reflejara la identidad visual del evento.',
    stack: ['Landing Page', 'Diseño Web', 'UX/UI', 'Animaciones'],
    result: 'Evento anual con alta convocatoria y cobertura digital completa',
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
  },
  {
    id: 2,
    slug: 'arrua-impermeabilizaciones',
    category: 'Servicios',
    title: 'Arrua Impermeabilizaciones',
    description: 'Landing page para emprendimiento especializado en soluciones de impermeabilización de alta calidad.',
    challenge: 'Transmitir confianza y profesionalismo en un sector altamente competitivo, destacando la calidad de los productos y servicios.',
    solution: 'Diseño limpio y corporativo con énfasis en la autoridad técnica, testimonios de clientes y galerías de trabajos realizados.',
    stack: ['Landing Page', 'Diseño Web', 'SEO', 'Google Business'],
    result: 'Posicionamiento digital efectivo con incremento en consultas orgánicas',
    images: [
      { id: 1, src: '/projects/proyecto-2/1.jpg', alt: 'Vista principal del sitio' },
      { id: 2, src: '/projects/proyecto-2/2.jpg', alt: 'Servicios de impermeabilización' },
      { id: 3, src: '/projects/proyecto-2/3.jpg', alt: 'Proyectos realizados' },
      { id: 4, src: '/projects/proyecto-2/4.jpg', alt: 'Detalle del trabajo' },
    ],
  },
  {
    id: 3,
    slug: 'mono-ecommerce',
    category: 'E-commerce',
    title: 'Mono eCommerce',
    description: 'E-commerce para Mono, una propuesta de vida alternativa centrada en monoambientes sustentables.',
    challenge: 'Crear una tienda online que transmitiera un estilo de vida más que simplemente productos, conectando emocionalmente con el público objetivo.',
    solution: 'Diseño inmersivo con storytelling de marca, experiencia de compra fluida y optimización para conversión.',
    stack: ['E-commerce', 'Tienda Online', 'Diseño UX', 'Marketing'],
    result: 'Experiencia de compra cuidada que aumentó el ticket promedio',
    images: [
      { id: 1, src: '/projects/proyecto-3/1.jpg', alt: 'Tienda principal' },
      { id: 2, src: '/projects/proyecto-3/2.jpg', alt: 'Detalle de productos' },
      { id: 3, src: '/projects/proyecto-3/3.jpg', alt: 'Carrito de compra' },
      { id: 4, src: '/projects/proyecto-3/4.jpg', alt: 'Página de producto' },
    ],
    featured: true,
  },
  {
    id: 4,
    slug: 'junto-plataforma',
    category: 'Plataforma',
    title: 'Junto | Alternativa a Rentafriend',
    description: 'Plataforma que conecta personas que buscan compañía para actividades cotidianas o experiencias sociales.',
    challenge: 'Construir un sistema seguro y confiable con registro de usuarios, perfiles detallados, búsqueda, reservas y pagos.',
    solution: 'Web app completa con sistema de verificación, chat integrado, pasarela de pagos y dashboard de gestión.',
    stack: ['Web App', 'Sistema de Pagos', 'UX/UI', 'Backend'],
    result: 'Plataforma segura e intuitiva con más de 1000 usuarios activos',
    images: [
      { id: 1, src: '/projects/proyecto-4/1.jpg', alt: 'Pantalla principal' },
      { id: 2, src: '/projects/proyecto-4/2.jpg', alt: 'Perfiles de usuarios' },
      { id: 3, src: '/projects/proyecto-4/3.jpg', alt: 'Sistema de reservas' },
      { id: 4, src: '/projects/proyecto-4/4.jpg', alt: 'Pasarela de pagos' },
      { id: 5, src: '/projects/proyecto-4/5.jpg', alt: 'Búsqueda de acompañantes' },
      { id: 6, src: '/projects/proyecto-4/6.jpg', alt: 'Experiencias sociales' },
    ],
  },
  {
    id: 5,
    slug: 'orbit-crm',
    category: 'SaaS',
    title: 'Orbit CRM',
    description: 'Plataforma de gestión de clientes para centralizar y optimizar relaciones comerciales de empresas.',
    challenge: 'Desarrollar un CRM intuitivo que simplificara la gestión de clientes sin la complejidad de herramientas enterprise.',
    solution: 'Dashboard completo con gestión de contactos, seguimiento de oportunidades, automatizaciones y reportes en tiempo real.',
    stack: ['SaaS', 'Dashboard', 'CRM', 'Analytics'],
    result: 'Visibilidad total del pipeline con reducción del 40% en tiempo de seguimiento',
    images: [
      { id: 1, src: '/projects/proyecto-5/1.jpg', alt: 'Dashboard principal' },
      { id: 2, src: '/projects/proyecto-5/2.jpg', alt: 'Gestión de contactos' },
      { id: 3, src: '/projects/proyecto-5/3.jpg', alt: 'Pipeline de ventas' },
      { id: 4, src: '/projects/proyecto-5/4.jpg', alt: 'Reportes en tiempo real' },
      { id: 5, src: '/projects/proyecto-5/5.jpg', alt: 'Automatizaciones' },
      { id: 6, src: '/projects/proyecto-5/6.jpg', alt: 'Vista móvil' },
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}