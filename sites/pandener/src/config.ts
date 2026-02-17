import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Pandener',
    logo: '/images/logo-pandener.png',
    primaryColor: '#0F4C81',
    secondaryColor: '#3C3F42',
    accentColor: '#00AFD7',
    fontFamily: 'Montserrat',
    ctaUrl: 'https://cotizador.pandener.com.mx',
    ctaLabel: 'Solicita tu evaluacion energetica',
  },

  hero: {
    headline: 'Tu propia planta de energia. Sin cortes. Sin sorpresas.',
    subheadline: 'Genera electricidad dentro de tu planta, mas barata que CFE y sin depender de la red. Nosotros instalamos, operamos y mantenemos todo.',
    backgroundImage: '/images/hero-bg.jpg',
    ctaLabel: 'Solicita tu evaluacion energetica',
  },

  socialProof: {
    title: 'Presencia en 25 estados de la republica y 9 paises de Latinoamerica.',
    logos: [
      { src: '/images/clients/mabe.png', alt: 'Mabe' },
      { src: '/images/clients/celestica.png', alt: 'Celestica' },
      { src: '/images/clients/cargill.png', alt: 'Cargill' },
      { src: '/images/clients/airbus.png', alt: 'Airbus' },
      { src: '/images/clients/qualtia.png', alt: 'Qualtia' },
      { src: '/images/clients/pemex.svg', alt: 'PEMEX' },
    ],
  },

  aggregateMetrics: {
    items: [
      { value: '24+', label: 'anos de experiencia' },
      { value: '85 MW', label: 'instalados en Mexico' },
      { value: '44', label: 'proyectos completados' },
      { value: '9', label: 'paises con operaciones' },
    ],
  },

  howItWorks: {
    title: 'Tu problema',
    subtitle: 'Cada corte electrico cuesta millones. Las tarifas suben sin aviso. Tu operacion depende de una red que no controlas.',
    steps: [
      {
        number: 1,
        title: 'Evaluacion',
        description: 'Analizamos tu consumo electrico y termico para disenar la solucion optima de generacion in-situ.',
      },
      {
        number: 2,
        title: 'Instalacion Llave en Mano',
        description: 'Instalamos y operamos la planta dentro de tu sitio. Tu produces tu propia electricidad con gas natural o biogas.',
      },
      {
        number: 3,
        title: 'Energia Garantizada',
        description: 'Eficiencia superior a la red y costos predecibles a largo plazo. Monitoreo en tiempo real y personal certificado por el fabricante.',
      },
    ],
  },

  solutions: {
    headline: 'Nuestra solucion',
    subtitle: 'Tres servicios integrados para que nunca mas dependas de la red.',
    items: [
      {
        title: 'Llave en mano',
        description: 'De la evaluacion a la operacion. No necesitas un equipo de ingenieria propio. Partner exclusivo de GUASCOR Energy en Mexico.',
        image: '/images/solutions/cogeneration.png',
        stats: [
          { value: '46%', label: 'eficiencia (vs 33% de la red)' },
          { value: '95%', label: 'disponibilidad' },
        ],
      },
      {
        title: 'O&M integrado 24/7',
        description: 'Si algo falla, lo detectamos antes que tu. Partes de reemplazo en 72 horas, sin que tu operacion se detenga.',
        image: '/images/solutions/isla-energetica.png',
        stats: [
          { value: '99.5%', label: 'confiabilidad' },
        ],
      },
      {
        title: 'Sin inversion inicial',
        description: 'No necesitas invertir. Nosotros ponemos el capital y operamos la planta. Tu solo pagas por la energia que consumes.',
        image: '/images/solutions/vapor.png',
      },
    ],
  },

  midCta: {
    headline: '¿Tu planta sufre cortes electricos o costos impredecibles?',
    subheadline: 'En 48 horas te entregamos un analisis de viabilidad para generacion in-situ. Sin costo.',
  },

  caseStudy: {
    headline: 'Casos de Exito',
    items: [
      {
        company: 'MABE',
        logo: '/images/clients/mabe.png',
        industry: 'Electrodomesticos',
        challenge: 'Planta en Saltillo, Coahuila con alta demanda electrica y de climatizacion. Costos energeticos elevados y dependencia total de la red electrica para operaciones criticas de manufactura.',
        solution: 'Proyecto PPA de cogeneracion con motor Guascor Energy G-48SL a gas natural. Capacidad de 1,400 kW electricos y 300 ton/h de potencia termica para agua helada. Pandener instala, opera y mantiene el sistema.',
        results: [
          { value: '1,400 kW', label: 'capacidad electrica instalada' },
          { value: '100%', label: 'agua helada suministrada por cogeneracion' },
          { value: '0', label: 'inversion inicial del cliente (modelo PPA)' },
        ],
        quote: 'La cogeneracion suministra energia electrica y el 100% de las necesidades de agua helada, brindando confiabilidad en las operaciones y amplios beneficios economicos por la reduccion en costos energeticos.',
        quoteAuthor: 'MABE',
        quoteRole: 'Saltillo, Coahuila — En operacion desde 2019',
      },
    ],
  },

  testimonials: {
    headline: 'Lo que dicen nuestros clientes',
    items: [
      {
        quote: 'Antes teniamos 3 o 4 cortes al mes. Desde que generamos nuestra propia energia, cero paros en 2 anos.',
        author: 'Ing. Laura Dominguez',
        role: 'Gerente de Planta',
        company: 'Quimica Industrial del Norte',
        metric: { value: '0', label: 'paros en 2 anos' },
      },
      {
        quote: 'El modelo sin inversion fue clave para nosotros. No desembolsamos un peso en la instalacion y desde el primer mes pagamos menos que con CFE.',
        author: 'Lic. Mariana Torres',
        role: 'Directora de Finanzas',
        company: 'Procesadora de Alimentos del Norte',
        metric: { value: '$12M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Respaldo de Clase Mundial',
    subtitle: 'Mas de dos decadas disenando, instalando y operando plantas de generacion en Mexico.',
    members: [
      {
        name: 'Director General',
        role: 'CEO',
        image: '/images/team/placeholder-1.jpg',
        bio: '+22 anos en generacion de energia. Ingeniero mecanico con MBA.',
      },
      {
        name: 'Director de Ingenieria',
        role: 'Ingenieria',
        image: '/images/team/placeholder-2.jpg',
        bio: 'Especialista en motores de generacion y sistemas de energia para plantas industriales.',
      },
      {
        name: 'Director de O&M',
        role: 'Operaciones',
        image: '/images/team/placeholder-3.jpg',
        bio: 'Certificado por el fabricante. Supervisa la operacion de todas las plantas activas.',
      },
    ],
  },

  trustBadges: {
    headline: 'Alianzas y Certificaciones',
    items: [
      {
        image: '/images/trust/logo-guascor-energy.webp',
        label: 'GUASCOR Energy',
        description: 'Partner exclusivo en Mexico',
      },
      {
        image: '/images/trust/logo-cre.png',
        label: 'CRE',
        description: 'Permiso de generacion vigente',
      },
      {
        image: '/images/trust/badge-iso-9001.png',
        label: 'ISO 9001',
        description: 'Sistema de gestion de calidad',
      },
      {
        image: '/images/trust/badge-iso-14001.png',
        label: 'ISO 14001',
        description: 'Gestion ambiental',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Que es un motogenerador?',
        answer: 'Es un motor de gas natural que genera electricidad directamente en tu planta. Funciona igual que la energia de la red, pero la produces tu. Es como tener tu propia planta de luz, operando con gas natural.',
      },
      {
        question: '¿Puedo usar los motores junto con la energia de CFE?',
        answer: 'Si. Los motores pueden operar como respaldo cuando la red falla, o como tu fuente principal de energia. Se adapta a lo que necesites.',
      },
      {
        question: '¿Que pasa si mi demanda de energia crece?',
        answer: 'Se pueden agregar mas motores. El sistema es modular y crece con tu operacion.',
      },
      {
        question: '¿Que tipo de combustible usan los motores?',
        answer: 'Gas natural. Es mas economico y mas limpio que el diesel. Se conecta directamente a la red de gas de tu planta.',
      },
      {
        question: '¿Cuanto espacio se necesita?',
        answer: 'Depende del tamano del equipo. Despues del diagnostico te decimos exactamente cuanto espacio necesitas y donde se puede instalar.',
      },
      {
        question: '¿Quien se encarga del mantenimiento?',
        answer: 'Nosotros. Operamos y mantenemos el equipo para que tu solo te preocupes por tu operacion.',
      },
    ],
  },

  inlineForm: {
    headline: 'Solicita tu evaluacion energetica',
    subtitle: 'Analizamos tu planta y te presentamos un estudio de viabilidad en 48 horas. Sin compromiso.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electronico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Telefono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'demanda', label: 'Demanda electrica aproximada', type: 'select', required: true, options: ['1 - 3 MW', '3 - 5 MW', '5 - 10 MW', 'Mas de 10 MW'] },
    ],
    submitLabel: 'Solicitar evaluacion gratuita',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Te contactamos en menos de 48 horas.',
  },

  finalCta: {
    headline: '¿Cuanto te cuesta depender de la red?',
    subheadline: 'En 48 horas te entregamos un analisis de viabilidad energetica para tu planta. Sin costo, sin compromiso.',
    ctaLabel: 'Agenda tu evaluacion gratuita',
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
    address: 'Alejandro Dumas 103, 4to piso, Col. Polanco Chapultepec, CDMX, CP 11560',
    phone: '+52 (55) 36 11 01 08',
    email: 'contacto@pandener.com.mx',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Terminos y Condiciones', href: '/terminos' },
    ],
  },
}
