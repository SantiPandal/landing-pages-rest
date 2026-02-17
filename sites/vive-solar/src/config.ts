import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Vive Energia Solar',
    logo: '/images/logo.svg',
    primaryColor: '#1E6DA1',
    secondaryColor: '#58AC25',
    accentColor: '#58AC25',
    fontFamily: 'Montserrat',
    ctaUrl: 'https://calculadora.viveenergiasolar.com',
    ctaLabel: 'Cotiza tu proyecto solar',
  },

  hero: {
    headline: 'Genera tu propia electricidad. Sin inversion inicial.',
    subheadline: 'Paneles solares para tu planta o negocio: nosotros invertimos, tu pagas una tarifa fija menor a la de CFE. Mas de 2,000 MW instalados en Mexico.',
    backgroundImage: '/images/hero-bg.jpg',
  },

  socialProof: {
    title: '2,000+ MW de energia renovable instalados en Mexico',
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
      { value: '2,000+', label: 'MW instalados en Mexico' },
      { value: '25', label: 'anos de vida util garantizada' },
      { value: '85%', label: 'reduccion promedio en factura' },
      { value: '3', label: 'anos retorno de inversion' },
    ],
  },

  howItWorks: {
    title: 'Tu problema',
    subtitle: 'La tarifa de CFE sube cada ano. Tu margen se erosiona. Quieres energia limpia pero no tienes el capital para invertir.',
    steps: [
      {
        number: 1,
        title: 'Evaluacion',
        description: 'Analizamos tu consumo y tu sitio. Te presentamos 3 escenarios de ahorro en 48 horas.',
      },
      {
        number: 2,
        title: 'Instalacion',
        description: 'Personal certificado, materiales de primera. Sin interrumpir tu operacion.',
      },
      {
        number: 3,
        title: 'Interconexion y Monitoreo',
        description: 'Nos encargamos de todos los tramites y permisos con CFE. Seguimiento en tiempo real de tu generacion desde el dia 1.',
      },
    ],
  },

  solutions: {
    headline: '3 esquemas. Tu eliges.',
    subtitle: 'No importa tu capacidad de inversion. Tenemos un modelo que se adapta a ti.',
    items: [
      {
        title: 'Sin inversion inicial',
        description: 'Nosotros invertimos. Tu pagas tarifa fija menor a CFE. Cero riesgo. Ideal para preservar tu capital.',
        image: '/images/solutions/commercial.jpg',
        stats: [
          { value: '0', label: 'inversion' },
          { value: 'Fija', label: 'tarifa garantizada' },
        ],
      },
      {
        title: 'Financiamiento',
        description: 'Tasa preferencial, plazo fijo, minimo enganche. El sistema es tuyo desde el dia 1. Pago se cubre con el ahorro.',
        image: '/images/solutions/industrial.jpg',
        stats: [
          { value: '25 anos', label: 'vida util garantizada' },
          { value: 'Tuyo', label: 'desde el dia 1' },
        ],
      },
      {
        title: 'Compra directa',
        description: 'Un solo pago. Maximo ahorro a largo plazo. Para quien tiene el capital disponible.',
        image: '/images/solutions/carport.jpg',
        stats: [
          { value: '3 anos', label: 'retorno de inversion' },
        ],
      },
    ],
  },

  midCta: {
    headline: '¿Cuanto sol esta desperdiciando tu techo?',
    subheadline: 'Evaluamos tu sitio y te presentamos 3 escenarios de ahorro en 48 horas. Sin costo.',
  },

  caseStudy: {
    headline: 'Casos de Exito',
    items: [
      {
        company: 'ALYEX',
        logo: '/images/clients/alyex.png',
        industry: 'Manufactura de Aluminio',
        challenge: 'Planta de aluminio en Queretaro con altos costos energeticos. Necesitaban reducir su huella de carbono para cumplir con los requisitos ambientales de sus clientes internacionales.',
        solution: 'Instalacion de sistema solar de 499 kW. Interconexion completa con CFE y monitoreo en tiempo real.',
        results: [
          { value: '499 kW', label: 'capacidad instalada' },
          { value: '797,646 kWh', label: 'generados al ano' },
          { value: '2,857 ton', label: 'CO2 evitadas' },
          { value: '70%', label: 'reduccion en factura de CFE' },
        ],
        quote: 'La instalacion fue rapida y profesional. Hoy generamos nuestra propia energia y cumplimos con los requisitos ambientales que nos exigen nuestros clientes globales.',
        quoteAuthor: 'Director de Planta',
        quoteRole: 'ALYEX, Queretaro',
      },
    ],
  },

  testimonials: {
    headline: 'Resultados que hablan',
    items: [
      {
        quote: 'Desde que instalamos paneles solares, nuestra factura de CFE bajo un 85%. La inversion se pago en menos de 3 anos.',
        author: 'Roberto Mendez',
        role: 'Director de Operaciones',
        company: 'Grupo Industrial del Norte',
        metric: { value: '85%', label: 'reduccion en factura' },
      },
      {
        quote: 'El modelo sin inversion fue perfecto para nosotros. Sin desembolso inicial y con tarifa fija menor a CFE. Empezamos a ahorrar desde el primer mes.',
        author: 'Claudia Ramirez',
        role: 'Gerente de Administracion',
        company: 'Distribuidora del Centro',
        metric: { value: '$5.8M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Nuestro Equipo',
    subtitle: 'Ingenieros certificados con miles de instalaciones comerciales e industriales en todo Mexico.',
    members: [
      {
        name: 'Benigno',
        role: 'Ingenieria Solar',
        image: '/images/team-benigno.jpg',
        bio: '+2,000 MW en proyectos solares. Ingeniero electrico con certificacion internacional en energia solar.',
      },
      {
        name: 'Gerardo',
        role: 'Ventas',
        image: '/images/team-gerardo.jpeg',
        bio: 'Especialista en contratos de energia solar y financiamiento para industria.',
      },
    ],
  },

  trustBadges: {
    headline: 'Certificaciones y Garantias',
    items: [
      {
        image: '/images/trust/logo-fide.png',
        label: 'FIDE',
        description: 'Empresa avalada por FIDE',
      },
      {
        image: '/images/trust/logo-cre.png',
        label: 'CRE',
        description: 'Permiso de generacion distribuida',
      },
      {
        image: '/images/trust/badge-25-years-warranty-gold.png',
        label: '25 Anos Garantia',
        description: 'Garantia de rendimiento en paneles',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Cuanto cuesta un sistema de paneles solares?',
        answer: 'Depende del tamano de tu operacion y tu consumo. Por eso hacemos un diagnostico gratuito donde te damos el costo exacto y tu ahorro proyectado. Ademas, tenemos opciones donde no necesitas invertir nada.',
      },
      {
        question: '¿Que mantenimiento necesitan los paneles?',
        answer: 'Muy poco. Se limpian periodicamente y se revisan las conexiones. Nosotros nos encargamos del mantenimiento para que tu no tengas que preocuparte.',
      },
      {
        question: '¿Necesito permisos especiales?',
        answer: 'No te preocupes por eso. Nosotros nos encargamos de todos los permisos y tramites necesarios ante CFE y las autoridades correspondientes. Tu no tienes que hacer ningun tramite.',
      },
    ],
  },

  inlineForm: {
    headline: 'Cotiza tu proyecto solar',
    subtitle: 'Evaluacion de techo o terreno incluida. Respuesta en 48 horas.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electronico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Telefono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'factura', label: 'Gasto mensual en electricidad (CFE)', type: 'select', required: true, options: ['$50,000 - $200,000', '$200,000 - $500,000', '$500,000 - $1,000,000', 'Mas de $1,000,000'] },
    ],
    submitLabel: 'Solicitar cotizacion gratuita',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Te contactamos en menos de 48 horas.',
  },

  finalCta: {
    headline: 'Tu techo ya recibe la energia. Solo falta capturarla.',
    subheadline: 'Evaluamos tu sitio y te decimos exactamente cuanto puedes ahorrar. Sin costo, sin compromiso.',
    ctaLabel: 'Solicita tu evaluacion solar gratuita',
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
    phone: '+52 (55) 2900-4885',
    email: 'a.sanchez@viveenergia.com',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Terminos y Condiciones', href: '/terminos' },
    ],
  },
}
