import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Vive Energía Solar',
    logo: '/images/logo.svg',
    primaryColor: '#1E6DA1',
    secondaryColor: '#58AC25',
    accentColor: '#58AC25',
    fontFamily: 'Montserrat',
    ctaUrl: 'https://viveenergia.vercel.app/',
    ctaLabel: 'Cotiza tu proyecto solar',
  },

  hero: {
    headline: 'Genera tu propia electricidad. Sin inversión inicial.',
    subheadline: 'Paneles solares para tu planta o negocio: nosotros invertimos, tú pagas una tarifa fija menor a la de CFE.',
    backgroundImage: '/images/hero-bg.jpg',
  },

  socialProof: {
    title: '2,000+ MW de energía renovable instalados en México',
    logos: [
      { src: '/images/clients/john-deere.png', alt: 'John Deere' },
      { src: '/images/clients/airbus.png', alt: 'Airbus' },
      { src: '/images/clients/cargill.png', alt: 'Cargill' },
      { src: '/images/clients/mars.png', alt: 'Mars' },
      { src: '/images/clients/minera-pangea.png', alt: 'Minera Pangea' },
      { src: '/images/clients/qualtia.png', alt: 'Qualtia' },
    ],
  },

  aggregateMetrics: {
    items: [
      { value: '2,000+', label: 'MW instalados en México' },
      { value: '25', label: 'años de vida útil garantizada' },
      { value: '85%', label: 'reducción promedio en factura' },
      { value: '3', label: 'años retorno de inversión' },
    ],
  },

  howItWorks: {
    title: '¿Cómo obtengo paneles solares para mi empresa?',
    subtitle: 'Sigue estos pasos sencillos para generar tu propia energía y ahorrar desde el día uno.',
    steps: [
      {
        number: 1,
        title: 'Solicita tu análisis',
        description: 'Déjanos tus datos. Nuestro equipo analizará el consumo y el espacio disponible en tu negocio.',
      },
      {
        number: 2,
        title: 'Recibe tu propuesta personalizada',
        description: 'En menos de 48 horas te presentamos las mejores opciones de proyecto y modelo de pago (sin inversión inicial, financiamiento o compra directa).',
      },
      {
        number: 3,
        title: 'Instalación profesional',
        description: 'Nuestro equipo instalará el sistema solar sin interrumpir tu operación. Nos encargamos de todos los trámites y permisos.',
      },
      {
        number: 4,
        title: 'Activa y empieza a ahorrar',
        description: 'Conecta tu sistema, monitorea tu generación en tiempo real y disfruta tu ahorro garantizado desde la primera factura.',
      },
    ],
  },


  solutions: {
    headline: '3 formas de tener tu sistema solar',
    subtitle: 'Elige la opción que mejor se adapte a tu empresa.',
    items: [
      {
        title: 'Sin inversión inicial',
        description: 'Nosotros ponemos el sistema y pagas menos que con CFE, sin riesgos ni costos de entrada.',
        image: '/images/solutions/commercial.jpg',
        stats: [
          { value: '0', label: 'inversión' },
          { value: 'Fija', label: 'tarifa' },
        ],
      },
      {
        title: 'Financiamiento',
        description: 'Paga en plazos fijos con tasa baja y poco enganche. El sistema es tuyo desde el principio y se paga con tus ahorros.',
        image: '/images/solutions/industrial.jpg',
        stats: [
          { value: '25 años', label: 'vida útil' },
          { value: 'Tuyo', label: 'desde el inicio' },
        ],
      },
      {
        title: 'Compra directa',
        description: 'Haz un solo pago, obtén el mayor ahorro posible. Ideal si cuentas con el capital.',
        image: '/images/solutions/carport.jpg',
        stats: [
          { value: '3 años', label: 'retorno de inversión' },
        ],
      },
    ],
  },

  midCta: {
    headline: '¿Cuánto sol está desperdiciando tu techo?',
    subheadline: 'Evaluamos tu sitio y te presentamos 3 escenarios de ahorro en 48 horas. Sin costo.',
  },

  caseStudy: {
    headline: 'Casos de Éxito',
    items: [
      {
        company: 'ALYEX',
        logo: '/images/clients/alyex.png',
        industry: 'Manufactura de Aluminio',
        challenge: 'Planta de aluminio en Querétaro con altos costos energéticos. Necesitaban reducir su huella de carbono para cumplir con los requisitos ambientales de sus clientes internacionales.',
        solution: 'Instalación de sistema solar de 499 kW. Interconexión completa con CFE y monitoreo en tiempo real.',
        results: [
          { value: '499 kW', label: 'capacidad instalada' },
          { value: '797,646 kWh', label: 'generados al año' },
          { value: '2,857 ton', label: 'CO2 evitadas' },
          { value: '70%', label: 'reducción en factura de CFE' },
        ],
        quote: 'La instalación fue rápida y profesional. Hoy generamos nuestra propia energía y cumplimos con los requisitos ambientales que nos exigen nuestros clientes globales.',
        quoteAuthor: 'Director de Planta',
        quoteRole: 'ALYEX, Querétaro',
      },
    ],
  },

  testimonials: {
    headline: 'Resultados que hablan',
    items: [
      {
        quote: 'Desde que instalamos paneles solares, nuestra factura de CFE bajó un 85%. La inversión se pagó en menos de 3 años.',
        author: 'Roberto Méndez',
        role: 'Director de Operaciones',
        company: 'Grupo Industrial del Norte',
        metric: { value: '85%', label: 'reducción en factura' },
      },
      {
        quote: 'El modelo sin inversión fue perfecto para nosotros. Sin desembolso inicial y con tarifa fija menor a CFE. Empezamos a ahorrar desde el primer mes.',
        author: 'Claudia Ramírez',
        role: 'Gerente de Administración',
        company: 'Distribuidora del Centro',
        metric: { value: '$5.8M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Nuestro Equipo',
    subtitle: 'Ingenieros certificados con miles de instalaciones comerciales e industriales en todo México.',
    members: [
      {
        name: 'Benigno',
        role: 'Ingeniería Solar',
        image: '/images/team-benigno.jpg',
        bio: '+2,000 MW en proyectos solares. Ingeniero eléctrico con certificación internacional en energía solar.',
      },
      {
        name: 'Gerardo',
        role: 'Ventas',
        image: '/images/team-gerardo.jpeg',
        bio: 'Especialista en contratos de energía solar y financiamiento para industria.',
      },
    ],
  },

  trustBadges: {
    headline: 'Certificaciones y Garantías',
    items: [
      {
        image: '/images/trust/logo-fide.png',
        label: 'FIDE',
        description: 'Empresa avalada por FIDE',
      },
      {
        image: '/images/trust/logo-cre.png',
        label: 'CRE',
        description: 'Permiso de generación distribuida',
      },
      {
        image: '/images/trust/badge-25-years-warranty-gold.png',
        label: '25 Años Garantía',
        description: 'Garantía de rendimiento en paneles',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Cuánto cuesta un sistema de paneles solares?',
        answer: 'Depende del tamaño de tu operación y tu consumo. Por eso hacemos un diagnóstico gratuito donde te damos el costo exacto y tu ahorro proyectado. Además, tenemos opciones donde no necesitas invertir nada.',
      },
      {
        question: '¿Qué mantenimiento necesitan los paneles?',
        answer: 'Muy poco. Se limpian periódicamente y se revisan las conexiones. Nosotros nos encargamos del mantenimiento para que tú no tengas que preocuparte.',
      },
      {
        question: '¿Necesito permisos especiales?',
        answer: 'No te preocupes por eso. Nosotros nos encargamos de todos los permisos y trámites necesarios ante CFE y las autoridades correspondientes. Tú no tienes que hacer ningún trámite.',
      },
    ],
  },

  inlineForm: {
    headline: 'Cotiza tu proyecto solar',
    subtitle: 'Evaluación de techo o terreno incluida. Respuesta en 48 horas.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'factura', label: 'Gasto mensual en electricidad (CFE)', type: 'select', required: true, options: ['$50,000 - $200,000', '$200,000 - $500,000', '$500,000 - $1,000,000', 'Más de $1,000,000'] },
    ],
    submitLabel: 'Solicitar cotización gratuita',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Te contactamos en menos de 48 horas.',
  },

  finalCta: {
    headline: 'Tu techo ya recibe la energía. Solo falta capturarla.',
    subheadline: 'Evaluamos tu sitio y te decimos exactamente cuánto puedes ahorrar. Sin costo, sin compromiso.',
    ctaLabel: 'Solicita tu evaluación solar gratuita',
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
    phone: '+52 (55) 2900-4885',
    email: 'a.sanchez@viveenergia.com',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Términos y Condiciones', href: '/terminos' },
    ],
  },
}
