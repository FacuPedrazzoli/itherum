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
    slug: 'construimos-software-que-dura-enfoque-arquitectura',
    title: 'Construimos software que dura: nuestro enfoque de arquitectura',
    excerpt: 'Por qué la arquitectura no es un lujo sino la base de todo proyecto que aspira a durar más de 6 meses.',
    content: `
      <p>Cada vez que nos contactan para un proyecto nuevo, hacemos una pregunta que muchos esperaban no escuchar: "¿Cuánto tiempo planeás que esta solución esté en uso?" La respuesta casi siempre es la misma: "Mucho." Y ahí empieza nuestra conversación sobre arquitectura.</p>
      
      <h2>La deuda técnica no es un concepto académico</h2>
      <p>En Itherum hemos visto proyectos que murieron no por ideas malas, sino por código que se volvió insostenible. Aplicaciones que necesitaban 3 meses de "refactorización" antes de poder agregar algo tan simple como un nuevo campo en un formulario. Sistemas que solo una persona entendía y que se convertía en cuello de botella cada vez que esa persona se enfermaba.</p>
      <p>Esto no pasa cuando la arquitectura se piensa desde el día uno.</p>
      
      <h2>Nuestro framework de decisiones</h2>
      <p>Cuando diseñamos la arquitectura de un proyecto, tenemos en cuenta 5 factores:</p>
      <ul>
        <li><strong>Escalabilidad real:</strong> No hablamos de escalar por escalar. Preguntamos: ¿cuál es el pico realista de usuarios? ¿Y si la solución tiene éxito masivo mañana?</li>
        <li><strong>Mantenibilidad:</strong> Si un desarrollador nuevo lee el código por primera vez, ¿puede entenderlo en una semana? Si no, tenemos un problema.</li>
        <li><strong>Costos de operación:</strong> Un backend que funciona perfecto en desarrollo puede costar $500/mes en producción. Diseñamos para el costo real, no el ideal.</li>
        <li><strong>Seguridad desde el diseño:</strong> No es una capa que agregamos después. Es parte de cómo pensamos cada feature.</li>
        <li><strong>Flexibilidad para cambios:</strong> Los requisitos cambian. La arquitectura debe absorber cambios sin requerir reescribir todo.</li>
      </ul>
      
      <h2>Un caso real</h2>
      <p>Trabajamos con un cliente que tenía una aplicación Rails de 8 años. El problema: cada feature nueva tardaba 3 semanas mínimo porque nadie entendía cómo interactuaban las 47 formas de validar un formulario.</p>
      <p>Rebuild completo con arquitectura basada en domain-driven design. Tiempo: 4 meses. Resultado: features que antes tomaban 3 semanas ahora toman 2 días. El cliente redujo su equipo de 6 a 3 personas y entrega más valor que antes.</p>
      
      <h2>La pregunta incómoda</h2>
      <p>Si tu desarrollador actual te dice que "el código está bien así", pero cada cambio tarda más que el anterior, tenés un problema de arquitectura. No de personas. No de tecnología. De diseño.</p>
      <p>En Itherum, priorizamos la conversación honesta sobre lo que el proyecto necesita. Si eso significa decir que no a algo que vos querés pero no es viable, lo hacemos. Mejor que te enojes hoy a que llorés en 6 meses cuando el sistema colapse.</p>
    `,
    author: 'Itherum Team',
    date: '2026-03-20',
    readTime: '7 min',
    tags: ['Arquitectura', 'Software', 'Deuda Técnica'],
    featured: true,
  },
  {
    id: 2,
    slug: 'por-que-rechazamos-proyectos',
    title: 'Por qué rechazamos proyectos (y por qué eso nos hace mejores)',
    excerpt: 'Rechazamos el 40% de los proyectos que nos contactan. Aquí te contamos por qué esa es nuestra estrategia, no nuestra debilidad.',
    content: `
      <p>El mes pasado rechazamos 3 proyectos. Uno era un e-commerce para una PYME con un presupuesto razonable. Otro era una app de delivery con potencial real. El tercero era un MVP de una startup que ya tenía inversión.</p>
      <p>¿Por qué rechazarlos? Cada uno tenía un problema fundamental que los hacía candidatos improbables para éxito real.</p>
      
      <h2>Nuestra política: decir que no cuando es no</h2>
      <p>En nuestra primera llamada siempre preguntamos: "¿Qué pasa si esto funciona?" Parece contra-intuitivo, pero la mayoría de los clientes nunca pensaron en esa pregunta. Están tan enfocados en el "si funciona" que no tienen plan para el éxito.</p>
      
      <h2>Las razones más comunes por las que decimos que no</h2>
      <ul>
        <li><strong>"Ya tengo un desarrollador pero no me entrega":</strong> Si tu desarrollador actual no entrega, un nuevo desarrollador tampoco lo va a hacer. El problema rara vez es capacidad técnica.</li>
        <li><strong>"Necesito algo rápido, no importa la calidad":</strong> Esto casi siempre termina en un proyecto que hay que rehacer completo en 12-18 meses. Más caro, más lento, más frustrante.</li>
        <li><strong>"Mi idea va a ser el próximo Mercado Libre":</strong> Las ideas grandes están bien, pero necesitamos entender qué problema específico resuelve tu producto y para quién. Sin eso, no hay arquitectura que aguante.</li>
        <li><strong>"Tengo $X y necesito que haga todo":</strong> Los presupuestos irrealistas generan productos a medias. Preferimos decirte qué podemos hacer con tu presupuesto real que prometerte el mundo y entregar nada.</li>
      </ul>
      
      <h2>Lo que pasa cuando decimos que sí</h2>
      <p>Cuando tomamos un proyecto, invertimos tiempo real en entender tu negocio. No empezamos a codear hasta que entendemos el problema que resolvés, no el producto que querés construir.</p>
      <p>Esto nos ha permitido tener una tasa de retención del 98%. Nuestros clientes vuelven. No porque somos baratos o rápidos, sino porque entregamos lo que prometemos.</p>
      
      <h2>El rechazo no es el final</h2>
      <p>Cuando rechazamos un proyecto, siempre damos una explicación. A veces, después de unos meses, el cliente vuelve con el problema más claro, el presupuesto más realista, o el equipo interno listo para trabajar con un partner externo.</p>
      <p>Esos son los proyectos que amamos tomar.</p>
    `,
    author: 'Itherum Team',
    date: '2026-03-10',
    readTime: '6 min',
    tags: ['Estrategia', 'Proyectos', 'Cliente'],
    featured: true,
  },
  {
    id: 3,
    slug: 'de-idea-a-producto-como-estructuramos-un-proyecto',
    title: 'De idea a producto: cómo estructuramos un proyecto desde cero',
    excerpt: 'Nuestro proceso para transformar una idea en un producto que funciona. Sin magia, sin misterio.',
    content: `
      <p>Recibimos mucho esta pregunta: "¿Cómo trabajan? ¿Cuál es su proceso?" La respuesta honesta es: depende. Depende del proyecto, del cliente, de los plazos. Pero hay un framework que usamos como base y que queremos compartir porque creemos que cualquier proyecto serio debería seguir algo similar.</p>
      
      <h2>Fase 0: Descubrimiento (1-2 semanas)</h2>
      <p>Antes de escribir una línea de código, invertimos tiempo en entender:</p>
      <ul>
        <li><strong>El problema real:</strong> ¿Qué problema específico resuelve este producto? ¿Para quién? ¿Cómo lo hacen hoy?</li>
        <li><strong>El contexto:</strong> ¿Por qué ahora? ¿Qué cambió que hace que este sea el momento correcto?</li>
        <li><strong>Las restricciones:</strong> Presupuesto, tiempo, equipo, tecnología existente. Todo esto define qué es viable.</li>
      </ul>
      <p>El output de esta fase es un documento de 3-5 páginas que define scope, riesgos, y propuesta de valor. Si no podemos escribir esto claramente, no empezamos.</p>
      
      <h2>Fase 1: Arquitectura y diseño (2-3 semanas)</h2>
      <p>Con el descubrimiento hecho, definimos:</p>
      <ul>
        <li><strong>Arquitectura técnica:</strong> No escribimos código todavía. Definimos cómo las piezas se van a conectar.</li>
        <li><strong>UX/UI:</strong> Wireframes primero. Prototipos después. Validación con usuarios reales antes de desarrollar.</li>
        <li><strong>Stack tecnológico:</strong> La tecnología que mejor se adapta al proyecto, no la más nueva o la que sabemos mejor.</li>
      </ul>
      
      <h2>Fase 2: Desarrollo iterativo (4-12 semanas)</h2>
      <p>Desarrollamos en sprints de 2 semanas. Al final de cada sprint, entregamos algo funcional. No esperes 3 meses para ver el producto.</p>
      <p>Durante el desarrollo:</p>
      <ul>
        <li>Demo quincenal obligatorio con el cliente</li>
        <li>Testing continuo con usuarios reales (no ficticios)</li>
        <li>Ajustes de scope solo si hay justificación clara</li>
      </ul>
      
      <h2>Fase 3: Lanzamiento y post-lanzamiento</h2>
      <p>Lanzar no es el final. Es el comienzo de la segunda fase más importante: aprender del uso real.</p>
      <p>Ofrecemos:</p>
      <ul>
        <li>Monitoreo de métricas las primeras 4 semanas</li>
        <li>Support的反应 rápido para issues críticos</li>
        <li>Sesiones de retrospectiva para planificar la siguiente versión</li>
      </ul>
      
      <h2>El secreto</h2>
      <p>No hay secreto. Hay disciplina. Seguimos el proceso porque funciona, no porque nos gusta la burocracia. Cada fase existe para reducir riesgo y aumentar las chances de que el producto que construimos sea el producto que realmente necesitás.</p>
    `,
    author: 'Itherum Team',
    date: '2026-02-28',
    readTime: '8 min',
    tags: ['Proceso', 'Desarrollo', 'Producto'],
    featured: true,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}
