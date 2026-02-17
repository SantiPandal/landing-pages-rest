import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Eleia',
    logo: '/images/eleia-logo-positivo.png',
    primaryColor: '#00205B',
    secondaryColor: '#00205B',
    accentColor: '#FFA400',
    fontFamily: 'Quicksand',
    ctaUrl: 'https://cotizador.eleiaenergia.mx',
    ctaLabel: 'Calcula tu ahorro',
  },

  hero: {
    headline: 'Deja de pagar de mas por tu electricidad.',
    subheadline: 'Accede al Mercado Electrico Mayorista con tarifas competitivas, esquemas a tu medida y un equipo que opera 24/7 por ti. Nutrisa, Cinemex y PwC ya lo hicieron.',
    backgroundImage: '/images/hero-bg-sunset.webp',
  },

  socialProof: {
    title: 'Suministrador Calificado en el Mercado Electrico Mayorista',
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
      { value: '24/7', label: 'mesa de operacion' },
      { value: '10+', label: 'anos en el mercado' },
    ],
  },

  howItWorks: {
    title: 'Tu problema',
    subtitle: 'Pagas tarifa de CFE sin negociar. Tu consumo crece, tu tarifa tambien. No tienes visibilidad de cuanto gastas ni por que.',
    steps: [
      {
        number: 1,
        title: 'Analisis de Factura',
        description: 'Revisamos tu recibo de CFE y calculamos el ahorro real que puedes obtener en el mercado mayorista.',
      },
      {
        number: 2,
        title: 'Migracion Sin Obras',
        description: 'Gestionamos todo el proceso regulatorio. No se modifica tu instalacion electrica. Sin inversion.',
      },
      {
        number: 3,
        title: 'Ahorro Inmediato',
        description: 'Desde la primera factura pagas menos. Monitoreo 24/7 con Trackio incluido.',
      },
    ],
  },

  solutions: {
    headline: 'Nuestra solucion',
    subtitle: 'Todo lo que necesitas para migrar al mercado mayorista, en un solo lugar.',
    items: [
      {
        title: 'Suministro a tu medida',
        description: 'Electricidad al mayoreo para usuarios con demanda igual o mayor a 1 MW. Contratos disenados para tu patron de consumo, no paquetes genericos.',
        image: '/images/solutions/suministro.png',
        stats: [
          { value: '150+', label: 'clientes activos' },
          { value: '0', label: 'inversion requerida' },
        ],
      },
      {
        title: 'Mesa de operacion 24/7',
        description: 'Operadores comerciales y especialistas de mercado monitoreando tu suministro todo el dia. Soporte inmediato ante cualquier eventualidad.',
        image: '/images/solutions/gestion.png',
        stats: [
          { value: '<1hr', label: 'tiempo de respuesta' },
        ],
      },
      {
        title: 'Monitoreo con Trackio',
        description: 'Plataforma en tiempo real para ver, entender y optimizar tu consumo electrico. Alertas inteligentes y proyecciones de costo.',
        image: '/images/solutions/certificados.png',
      },
    ],
  },

  midCta: {
    headline: '¿Tu empresa paga mas de $500,000 al mes en electricidad?',
    subheadline: 'Es probable que califiques para el Mercado Electrico Mayorista. Descubrelo en 2 minutos.',
  },

  caseStudy: {
    headline: 'Casos de Exito',
    items: [
      {
        company: 'Cadena de Restaurantes Nacional',
        industry: 'Alimentos y Bebidas',
        challenge: 'Mas de 80 sucursales pagando tarifa regulada de CFE. Sin visibilidad del consumo por ubicacion. Facturas creciendo 12% anual sin control.',
        solution: 'Migracion al MEM de las 35 sucursales que cumplian el umbral de demanda. Monitoreo centralizado con Trackio para las 80+ ubicaciones.',
        results: [
          { value: '28%', label: 'reduccion en costo electrico' },
          { value: '$8.5M', label: 'ahorro anual' },
          { value: '0', label: 'interrupciones de servicio' },
        ],
        quote: 'El proceso fue transparente y sin complicaciones. Desde el primer mes vimos la reduccion en nuestras facturas.',
        quoteAuthor: 'Carlos Vega',
        quoteRole: 'Director Financiero',
      },
    ],
  },

  testimonials: {
    headline: 'Nuestros Clientes Ahorran',
    items: [
      {
        quote: 'En 8 meses estabamos operando en el mercado mayorista. No tuvimos que cambiar nada en nuestra planta.',
        author: 'Jorge Martinez',
        role: 'Director de Operaciones',
        company: 'Manufacturas del Pacifico',
        metric: { value: '$6.5M', label: 'ahorro anual' },
      },
      {
        quote: 'No tuvimos que cambiar nada de nuestra infraestructura. Simplemente empezamos a pagar menos por la misma energia.',
        author: 'Ana Lucia Reyes',
        role: 'Gerente de Compras',
        company: 'Distribuidora Central',
        metric: { value: '$4.2M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Quienes Somos',
    subtitle: 'Especialistas en el mercado electrico mexicano con experiencia en regulacion, operacion y comercializacion de energia.',
    members: [
      {
        name: 'Director General',
        role: 'CEO',
        image: '/images/team/placeholder-1.jpg',
        bio: '+15 anos en el sector energetico. Ex-directivo en empresa de suministro calificado.',
      },
      {
        name: 'Director Comercial',
        role: 'Ventas',
        image: '/images/team/placeholder-2.jpg',
        bio: 'Especialista en estructuracion de contratos PPA y esquemas de suministro mayorista.',
      },
      {
        name: 'Director de Operaciones',
        role: 'Mesa de Operacion',
        image: '/images/team/placeholder-3.jpg',
        bio: 'Responsable de la mesa de operacion 24/7. Ingeniero electrico con maestria en sistemas de potencia.',
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
        description: 'Sistema de gestion de calidad',
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
        question: '¿Que es un suministrador calificado y por que es mas barato?',
        answer: 'La ley permite que empresas con alto consumo compren electricidad directamente del mercado privado en lugar de solo a CFE. Es mas barato porque las plantas privadas son mas modernas y eficientes que las de CFE, lo que reduce el costo de generacion. Esa diferencia de precio es tu ahorro.',
      },
      {
        question: '¿Tengo que hacer obra o cambiar algo en mi operacion?',
        answer: 'Tu electricidad sigue llegando por la misma red, los mismos transformadores y el mismo cableado. No se toca nada en tu planta. Es como cambiar de compania de celular: mismo telefono, misma senal, diferente factura.',
      },
      {
        question: '¿Cuanto puedo ahorrar?',
        answer: 'Depende de tu consumo, tu ubicacion, tu tarifa actual y como opera tu negocio. El promedio de nuestros clientes es entre 15% y 30%. Pero para darte un numero exacto, necesitamos hacer un diagnostico personalizado.',
      },
      {
        question: '¿Cuanto tarda el proceso?',
        answer: 'Aproximadamente 8 meses. No se requiere nada de tu parte durante ese tiempo. Nosotros nos encargamos de todo el tramite con CFE y CRE. Tu solo apruebas al inicio y cuando todo esta listo, empiezas a pagar menos.',
      },
      {
        question: '¿Tiene algun costo cambiar de proveedor?',
        answer: 'No. El diagnostico, la propuesta y todo el proceso de cambio son sin costo. Lo unico que cambia es que pagas menos por tu electricidad.',
      },
    ],
  },

  inlineForm: {
    headline: 'Solicita tu analisis gratuito',
    subtitle: 'Dejanos tus datos y en 24 horas te contactamos con un analisis preliminar de ahorro.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electronico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Telefono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'consumo', label: 'Gasto mensual en electricidad', type: 'select', required: true, options: ['$100,000 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $5,000,000', 'Mas de $5,000,000'] },
    ],
    submitLabel: 'Solicitar analisis gratuito',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Respondemos en menos de 24 horas.',
  },

  finalCta: {
    headline: '¿Cuanto podrias ahorrarte este ano?',
    subheadline: 'En una llamada de 15 minutos analizamos tu recibo y te decimos si calificas para el mercado mayorista. Sin costo, sin compromiso.',
    ctaLabel: 'Agenda tu analisis gratuito',
  },

  navbar: {
    links: [
      { label: 'Soluciones', href: '#soluciones' },
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Casos de Exito', href: '#casos' },
      { label: 'FAQ', href: '#faq' },
    ],
  },

  footer: {
    address: 'Ciudad de Mexico | Merida, Yucatan',
    phone: '+52 (55) 2167 3173',
    email: 'contacto@eleiaenergia.mx',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Terminos y Condiciones', href: '/terminos' },
    ],
  },
}
