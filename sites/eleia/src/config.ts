import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Eleia',
    logo: '/images/eleia-logo-positivo.png',
    primaryColor: '#00205B',
    secondaryColor: '#00205B',
    accentColor: '#FFA400',
    fontFamily: 'Quicksand',
    ctaUrl: 'https://viveenergia.vercel.app/?product=suministro',
    ctaLabel: 'Calcula tu ahorro',
  },

  hero: {
    headline: 'Deja de pagar de más por tu electricidad.',
    subheadline: 'Accede al Mercado Eléctrico Mayorista con tarifas competitivas, esquemas a tu medida y un equipo que opera 24/7 por ti.',
    backgroundImage: '/images/hero-bg-sunset.webp',
  },

  socialProof: {
    title: 'Suministrador Calificado en el Mercado Eléctrico Mayorista',
    logos: [
      { src: '/images/clients/airbus.png', alt: 'Airbus' },
      { src: '/images/clients/cargill.png', alt: 'Cargill' },
      { src: '/images/clients/celestica.png', alt: 'Celestica' },
      { src: '/images/clients/mabe.png', alt: 'Mabe' },
      { src: '/images/clients/mars.png', alt: 'Mars' },
    ],
  },

  aggregateMetrics: {
    items: [
      { value: '150+', label: 'clientes activos' },
      { value: '30%', label: 'ahorro promedio' },
      { value: '24/7', label: 'mesa de operación' },
      { value: '10+', label: 'años en el mercado' },
    ],
  },

  howItWorks: {
    title: '¿Cómo funciona?',
    subtitle: 'Compras electricidad directo del mercado privado a través de Eleia, es como cambiar de compañía de celular: mismo teléfono, misma señal, diferente factura.',
    steps: [
      {
        number: 1,
        title: 'Te cotizamos',
        description: 'Analizamos tu recibo actual y te mostramos cuánto puedes ahorrar al cambiarte.',
      },
      {
        number: 2,
        title: 'Nos encargamos de todo',
        description: 'Tramitamos la migración sin obras ni cambios en tu instalación. Sin costo inicial.',
      },
      {
        number: 3,
        title: 'Empiezas a ahorrar',
        description: 'Desde tu primera factura ves el ahorro. Control y monitoreo 24/7 incluidos.',
      },
    ],
  },

  solutions: {
    headline: 'Nuestra solución',
    subtitle: 'Todo lo que necesitas para migrar al mercado mayorista, en un solo lugar.',
    items: [
      {
        title: 'Suministro a tu medida',
        description: 'Electricidad al mayoreo para usuarios con demanda igual o mayor a 1 MW. Contratos diseñados para tu patrón de consumo, no paquetes genéricos.',
        image: '/images/solutions/suministro.png',
        stats: [
          { value: '150+', label: 'clientes activos' },
          { value: '0', label: 'inversión requerida' },
        ],
      },
      {
        title: 'Mesa de operación 24/7',
        description: 'Operadores comerciales y especialistas de mercado monitoreando tu suministro todo el día. Soporte inmediato ante cualquier eventualidad.',
        image: '/images/solutions/gestion.png',
        stats: [
          { value: '<1hr', label: 'tiempo de respuesta' },
        ],
      },
      {
        title: 'Monitoreo con Trackio',
        description: 'Plataforma en tiempo real para ver, entender y optimizar tu consumo eléctrico. Alertas inteligentes y proyecciones de costo.',
        image: '/images/solutions/certificados.png',
      },
    ],
  },

  midCta: {
    headline: '¿Tu empresa paga más de $500,000 al mes en electricidad?',
    subheadline: 'Es probable que califiques para el Mercado Eléctrico Mayorista. Descúbrelo en 2 minutos.',
  },

  caseStudy: {
    headline: 'Casos de Éxito',
    items: [
      {
        company: 'Cadena de Restaurantes Nacional',
        industry: 'Alimentos y Bebidas',
        challenge: 'Más de 80 sucursales pagando tarifa regulada de CFE. Sin visibilidad del consumo por ubicación. Facturas creciendo 12% anual sin control.',
        solution: 'Migración al MEM de las 35 sucursales que cumplían el umbral de demanda. Monitoreo centralizado con Trackio para las 80+ ubicaciones.',
        results: [
          { value: '28%', label: 'reducción en costo eléctrico' },
          { value: '$8.5M', label: 'ahorro anual' },
          { value: '0', label: 'interrupciones de servicio' },
        ],
        quote: 'El proceso fue transparente y sin complicaciones. Desde el primer mes vimos la reducción en nuestras facturas.',
        quoteAuthor: 'Carlos Vega',
        quoteRole: 'Director Financiero',
      },
    ],
  },

  testimonials: {
    headline: 'Nuestros Clientes Ahorran',
    items: [
      {
        quote: 'En 8 meses estábamos operando en el mercado mayorista. No tuvimos que cambiar nada en nuestra planta.',
        author: 'Jorge Martínez',
        role: 'Director de Operaciones',
        company: 'Manufacturas del Pacífico',
        metric: { value: '$6.5M', label: 'ahorro anual' },
      },
      {
        quote: 'No tuvimos que cambiar nada de nuestra infraestructura. Simplemente empezamos a pagar menos por la misma energía.',
        author: 'Ana Lucía Reyes',
        role: 'Gerente de Compras',
        company: 'Distribuidora Central',
        metric: { value: '$4.2M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Quiénes Somos',
    subtitle: 'Especialistas en el mercado eléctrico mexicano con experiencia en regulación, operación y comercialización de energía.',
    members: [
      {
        name: 'Director General',
        role: 'CEO',
        image: '/images/team/placeholder-1.jpg',
        bio: '+15 años en el sector energético. Ex-directivo en empresa de suministro calificado.',
      },
      {
        name: 'Director Comercial',
        role: 'Ventas',
        image: '/images/team/placeholder-2.jpg',
        bio: 'Especialista en estructuración de contratos PPA y esquemas de suministro mayorista.',
      },
      {
        name: 'Director de Operaciones',
        role: 'Mesa de Operación',
        image: '/images/team/placeholder-3.jpg',
        bio: 'Responsable de la mesa de operación 24/7. Ingeniero eléctrico con maestría en sistemas de potencia.',
      },
    ],
  },

  trustBadges: {
    headline: 'Respaldo y Certificaciones',
    items: [
      {
        image: '/images/trust/logo-cre.png',
        label: 'CRE',
        description: 'Suministrador Calificado autorizado',
      },
      {
        image: '/images/trust/logo-cenace.png',
        label: 'CENACE',
        description: 'Participante del MEM',
      },
      {
        image: '/images/trust/badge-iso-9001.png',
        label: 'ISO 9001',
        description: 'Sistema de gestión de calidad',
      },
      {
        image: '/images/trust/logo-trackio.png',
        label: 'Trackio',
        description: 'Plataforma de monitoreo propia',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Qué es un suministrador calificado y por qué es más barato?',
        answer: 'La ley permite que empresas con alto consumo compren electricidad directamente del mercado privado en lugar de solo a CFE. Es más barato porque las plantas privadas son más modernas y eficientes que las de CFE, lo que reduce el costo de generación. Esa diferencia de precio es tu ahorro.',
      },
      {
        question: '¿Tengo que hacer obra o cambiar algo en mi operación?',
        answer: 'Tu electricidad sigue llegando por la misma red, los mismos transformadores y el mismo cableado. No se toca nada en tu planta. Es como cambiar de compañía de celular: mismo teléfono, misma señal, diferente factura.',
      },
      {
        question: '¿Cuánto puedo ahorrar?',
        answer: 'Depende de tu consumo, tu ubicación, tu tarifa actual y cómo opera tu negocio. El promedio de nuestros clientes es entre 15% y 30%. Pero para darte un número exacto, necesitamos hacer un diagnóstico personalizado.',
      },
      {
        question: '¿Cuánto tarda el proceso?',
        answer: 'Aproximadamente 8 meses. No se requiere nada de tu parte durante ese tiempo. Nosotros nos encargamos de todo el trámite con CFE y CRE. Tú solo apruebas al inicio y cuando todo está listo, empiezas a pagar menos.',
      },
      {
        question: '¿Tiene algún costo cambiar de proveedor?',
        answer: 'No. El diagnóstico, la propuesta y todo el proceso de cambio son sin costo. Lo único que cambia es que pagas menos por tu electricidad.',
      },
    ],
  },

  inlineForm: {
    headline: 'Solicita tu análisis gratuito',
    subtitle: 'Déjanos tus datos y en 24 horas te contactamos con un análisis preliminar de ahorro.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'consumo', label: 'Gasto mensual en electricidad', type: 'select', required: true, options: ['$100,000 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $5,000,000', 'Más de $5,000,000'] },
    ],
    submitLabel: 'Solicitar análisis gratuito',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Respondemos en menos de 24 horas.',
  },

  finalCta: {
    headline: '¿Cuánto podrías ahorrarte este año?',
    subheadline: 'En una llamada de 15 minutos analizamos tu recibo y te decimos si calificas para el mercado mayorista. Sin costo, sin compromiso.',
    ctaLabel: 'Agenda tu análisis gratuito',
  },

  navbar: {
    links: [
      { label: 'Soluciones', href: '#soluciones' },
      { label: 'Cómo Funciona', href: '#como-funciona' },
      { label: 'Casos de Éxito', href: '#casos' },
      { label: 'FAQ', href: '#faq' },
    ],
  },

  footer: {
    address: 'Ciudad de México | Mérida, Yucatán',
    phone: '+52 (55) 2167 3173',
    email: 'contacto@eleiaenergia.mx',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Términos y Condiciones', href: '/terminos' },
    ],
  },
}
