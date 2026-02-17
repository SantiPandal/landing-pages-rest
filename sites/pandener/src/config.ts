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
    ctaLabel: 'Diagnóstico Gratis',
  },

  hero: {
    headline: 'Tu propia planta de energía.',
    subheadline: 'Genera electricidad dentro de tu planta, más barata que CFE y sin depender de la red. Nosotros instalamos, operamos y mantenemos todo.',
    backgroundImage: '/images/hero-bg.jpg',
    ctaLabel: 'Diagnóstico Gratis',
  },

  socialProof: {
    title: 'Presencia en 25 estados de la república y 9 países de Latinoamérica.',
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
      { value: '24+', label: 'años de experiencia' },
      { value: '85 MW', label: 'instalados en México' },
      { value: '44', label: 'proyectos completados' },
      { value: '9', label: 'países con operaciones' },
    ],
  },

  howItWorks: {
    title: '¿Qué tengo que hacer?',
    subtitle: 'Sigue los pasos para que nosotros te ayudemos a generar tu propia energía.',
    steps: [
      {
        number: 1,
        title: 'Evaluación',
        description: 'Analizamos tu consumo eléctrico y térmico para diseñar la solución óptima de generación en sitio.',
      },
      {
        number: 2,
        title: 'Te damos una propuesta',
        description: 'Te presentamos una propuesta de inversión y ahorro energético.',
      },
      {
        number: 3,
        title: 'Instalamos y operamos tu planta',
        description: 'Instalamos y operamos tu planta de generación en sitio. Tú produces tu propia electricidad con gas natural o biogás.',
      },
    ],
  },

  solutions: {
    headline: 'Nuestra solución',
    subtitle: 'Todo para que generes tu propia energía.',
    items: [
      {
        title: 'Llave en mano',
        description: 'Instalamos y operamos todo. No necesitas equipo de ingeniería.',
        image: '/images/solutions/cogeneration.png',
        stats: [
          { value: '46%', label: 'eficiencia' },
          { value: '95%', label: 'disponibilidad' },
        ],
      },
      {
        title: 'Mantenimiento 24/7',
        description: 'Cuidamos tu equipo y resolvemos fallas rápido.',
        image: '/images/solutions/isla-energetica.png',
        stats: [
          { value: '99.5%', label: 'confiabilidad' },
        ],
      },
      {
        title: 'Sin inversión inicial',
        description: 'Tú no pagas la instalación. Solo pagas la energía que usas.',
        image: '/images/solutions/vapor.png',
      },
    ],
  },

  midCta: {
    headline: '¿Tu planta sufre cortes eléctricos o costos impredecibles?',
    subheadline: 'En 48 horas te entregamos un análisis de viabilidad para generación en sitio. Sin costo.',
  },

  caseStudy: {
    headline: 'Casos de Éxito',
    items: [
      {
        company: 'MABE',
        logo: '/images/clients/mabe.png',
        industry: 'Electrodomésticos',
        challenge: 'Planta en Saltillo, Coahuila con alta demanda eléctrica y de climatización. Costos energéticos elevados y dependencia total de la red eléctrica para operaciones críticas de manufactura.',
        solution: 'Proyecto PPA de cogeneración con motor Guascor Energy G-48SL a gas natural. Capacidad de 1,400 kW eléctricos y 300 ton/h de potencia térmica para agua helada. Pandener instala, opera y mantiene el sistema.',
        results: [
          { value: '1,400 kW', label: 'capacidad eléctrica instalada' },
          { value: '100%', label: 'agua helada suministrada por cogeneración' },
          { value: '0', label: 'inversión inicial del cliente (modelo PPA)' },
        ],
        quote: 'La cogeneración suministra energía eléctrica y el 100% de las necesidades de agua helada, brindando confiabilidad en las operaciones y amplios beneficios económicos por la reducción en costos energéticos.',
        quoteAuthor: 'MABE',
        quoteRole: 'Saltillo, Coahuila — En operación desde 2019',
      },
    ],
  },

  testimonials: {
    headline: 'Lo que dicen nuestros clientes',
    items: [
      {
        quote: 'Antes teníamos 3 o 4 cortes al mes. Desde que generamos nuestra propia energía, cero paros en 2 años.',
        author: 'Ing. Laura Domínguez',
        role: 'Gerente de Planta',
        company: 'Química Industrial del Norte',
        metric: { value: '0', label: 'paros en 2 años' },
      },
      {
        quote: 'El modelo sin inversión fue clave para nosotros. No desembolsamos un peso en la instalación y desde el primer mes pagamos menos que con CFE.',
        author: 'Lic. Mariana Torres',
        role: 'Directora de Finanzas',
        company: 'Procesadora de Alimentos del Norte',
        metric: { value: '$12M', label: 'ahorro anual' },
      },
    ],
  },

  team: {
    headline: 'Respaldo de Clase Mundial',
    subtitle: 'Más de dos décadas diseñando, instalando y operando plantas de generación en México.',
    members: [
      {
        name: 'Director General',
        role: 'CEO',
        image: '/images/team/placeholder-1.jpg',
        bio: '+22 años en generación de energía. Ingeniero mecánico con MBA.',
      },
      {
        name: 'Director de Ingeniería',
        role: 'Ingeniería',
        image: '/images/team/placeholder-2.jpg',
        bio: 'Especialista en motores de generación y sistemas de energía para plantas industriales.',
      },
      {
        name: 'Director de O&M',
        role: 'Operaciones',
        image: '/images/team/placeholder-3.jpg',
        bio: 'Certificado por el fabricante. Supervisa la operación de todas las plantas activas.',
      },
    ],
  },

  trustBadges: {
    headline: 'Alianzas y Certificaciones',
    items: [
      {
        image: '/images/trust/logo-guascor-energy.webp',
        label: 'GUASCOR Energy',
        description: 'Partner exclusivo en México',
      },
      {
        image: '/images/trust/logo-cre.png',
        label: 'CRE',
        description: 'Permiso de generación vigente',
      },
      {
        image: '/images/trust/badge-iso-9001.png',
        label: 'ISO 9001',
        description: 'Sistema de gestión de calidad',
      },
      {
        image: '/images/trust/badge-iso-14001.png',
        label: 'ISO 14001',
        description: 'Gestión ambiental',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Qué es un motogenerador?',
        answer: 'Es un motor de gas natural que genera electricidad directamente en tu planta. Funciona igual que la energía de la red, pero la produces tú. Es como tener tu propia planta de luz, operando con gas natural.',
      },
      {
        question: '¿Puedo usar los motores junto con la energía de CFE?',
        answer: 'Sí. Los motores pueden operar como respaldo cuando la red falla, o como tu fuente principal de energía. Se adapta a lo que necesites.',
      },
      {
        question: '¿Qué pasa si mi demanda de energía crece?',
        answer: 'Se pueden agregar más motores. El sistema es modular y crece con tu operación.',
      },
      {
        question: '¿Qué tipo de combustible usan los motores?',
        answer: 'Gas natural. Es más económico y más limpio que el diésel. Se conecta directamente a la red de gas de tu planta.',
      },
      {
        question: '¿Cuánto espacio se necesita?',
        answer: 'Depende del tamaño del equipo. Después del diagnóstico te decimos exactamente cuánto espacio necesitas y dónde se puede instalar.',
      },
      {
        question: '¿Quién se encarga del mantenimiento?',
        answer: 'Nosotros. Operamos y mantenemos el equipo para que tú solo te preocupes por tu operación.',
      },
    ],
  },

  inlineForm: {
    headline: 'Diagnóstico Gratis',
    subtitle: 'Analizamos tu planta y te presentamos un estudio de viabilidad en 48 horas. Sin compromiso.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+52 (55) 1234 5678' },
      { name: 'demanda', label: 'Demanda eléctrica aproximada', type: 'select', required: true, options: ['1 - 3 MW', '3 - 5 MW', '5 - 10 MW', 'Más de 10 MW'] },
    ],
    submitLabel: 'Solicitar evaluación gratuita',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Te contactamos en menos de 48 horas.',
  },

  finalCta: {
    headline: '¿Cuánto te cuesta depender de la red?',
    subheadline: 'En 48 horas te entregamos un análisis de viabilidad energética para tu planta. Sin costo, sin compromiso.',
    ctaLabel: 'Agenda tu evaluación gratuita',
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
    address: 'Alejandro Dumas 103, 4to piso, Col. Polanco Chapultepec, CDMX, CP 11560',
    phone: '+52 (55) 36 11 01 08',
    email: 'contacto@pandener.com.mx',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Términos y Condiciones', href: '/terminos' },
    ],
  },
}
