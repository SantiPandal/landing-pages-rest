import type { SiteConfig } from '@landing/ui/types'

export const config: SiteConfig = {
  brand: {
    name: 'Trackio',
    logo: '/images/logo-trackio.png',
    primaryColor: '#1E6DA1',
    secondaryColor: '#58AC25',
    accentColor: '#58AC25',
    fontFamily: 'Montserrat',
    ctaUrl: 'https://viveenergia.vercel.app/',
    ctaLabel: 'Descubre cuánto puedes ahorrar',
  },

  hero: {
    headline: 'Ve cada peso que gastas en electricidad. En tiempo real.',
    subheadline: 'Plataforma de monitoreo energetico con sensores inteligentes, alertas automaticas y proyecciones de consumo. Centraliza todas tus ubicaciones en un solo dashboard.',
    backgroundImage: '/images/hero-bg.jpg',
  },

  socialProof: {
    title: 'Plataforma de Vive Energia',
    logos: [
      { src: '/images/clients/mars.png', alt: 'Mars' },
      { src: '/images/clients/john-deere.png', alt: 'John Deere' },
      { src: '/images/clients/mabe.png', alt: 'Mabe' },
      { src: '/images/clients/cargill.png', alt: 'Cargill' },
      { src: '/images/clients/celestica.png', alt: 'Celestica' },
    ],
  },

  aggregateMetrics: {
    items: [
      { value: '100+', label: 'sitios monitoreados' },
      { value: '15%', label: 'ahorro promedio detectado' },
      { value: '<5min', label: 'deteccion de anomalias' },
      { value: '24/7', label: 'monitoreo continuo' },
    ],
  },

  howItWorks: {
    title: '¿Cómo se instala Trackio?',
    subtitle: 'Sigue estos pasos para tener monitoreo energético en tu empresa de manera rápida y sencilla.',
    steps: [
      {
        number: 1,
        title: 'Diagnóstico y Planeación',
        description: 'Analizamos tu instalación y determinamos la mejor forma de monitorear tus tableros, equipos o sucursales.',
      },
      {
        number: 2,
        title: 'Instalación de Sensores',
        description: 'Instalamos sensores inteligentes en tus tableros eléctricos. Sin afectar tu operación; rápido y sin obras complicadas.',
      },
      {
        number: 3,
        title: 'Activación y Entrenamiento',
        description: 'Conectamos tus sensores a la plataforma, configuramos alertas y te entrenamos para sacar el máximo provecho de Trackio.',
      },
    ],
  },

  solutions: {
    headline: 'Monitorea todo tu negocio',
    subtitle: 'Trackio pone en tus manos datos en tiempo real de cada parte clave de tu operación energética.',
    items: [
      {
        title: 'Consumo por Área o Sucursal',
        description: 'Visualiza cuánta energía utiliza cada uno de tus sitios, áreas o sucursales. Detecta desperdicio, compara desempeño y enfoca tus acciones donde más impacto tienen.',
        image: '/images/solutions/areas.png',
      },
      {
        title: 'Equipos Críticos',
        description: 'Sigue el consumo de tus equipos más importantes: chillers, aire acondicionado, líneas de producción, compresores. Recibe alertas inmediatas si se detectan anomalías.',
        image: '/images/solutions/equipos.png',
      },
      {
        title: 'Facturación y Validación de CFE',
        description: 'Automatiza la validación de tus facturas: compara lo que dice CFE vs lo que realmente consumiste. Identifica cobros indebidos y haz reclamos respaldados por datos.',
        image: '/images/solutions/facturacion.png',
      },
      {
        title: 'Generación Propia',
        description: 'Monitorea en tiempo real la energía que producen tus paneles solares o cogeneración, el ahorro generado y beneficios ambientales.',
        image: '/images/solutions/generacion.png',
      },
      {
        title: 'Alertas y Proyecciones',
        description: 'Configura alertas automáticas para exceso de consumo, picos de demanda y desperdicio nocturno. Obtén proyecciones de gasto antes de que llegue la factura.',
        image: '/images/solutions/alertas.png',
      },
    ],
  },

  midCta: {
    headline: '¿Sabes cuanto electricidad desperdicias cada noche?',
    subheadline: 'En un demo de 20 minutos te mostramos como se ve tu consumo en Trackio. Sin costo.',
  },

  caseStudy: {
    headline: 'Casos de Exito',
    items: [
      {
        company: 'Cadena Comercial del Sureste',
        industry: 'Retail / Comercio',
        challenge: '45 sucursales sin visibilidad de consumo individual. Facturas de CFE validadas manualmente. Imposible detectar desperdicios o cobros indebidos a escala.',
        solution: 'Instalacion de sensores inteligentes en las 45 ubicaciones. Dashboard centralizado con alertas de anomalias y validacion automatica de facturas CFE.',
        results: [
          { value: '20%', label: 'desperdicio nocturno eliminado' },
          { value: '$3.2M', label: 'ahorro anual' },
          { value: '45', label: 'sucursales monitoreadas' },
        ],
        quote: 'Descubrimos que el 20% de nuestro consumo era desperdicio nocturno. Trackio nos ayudo a identificarlo y eliminarlo en semanas.',
        quoteAuthor: 'Fernando Lopez',
        quoteRole: 'Director de Operaciones, Cadena Comercial del Sureste',
      },
    ],
  },

  testimonials: {
    headline: 'Decisiones basadas en datos',
    items: [
      {
        quote: 'Antes revisabamos facturas a mano y siempre habia errores. Trackio nos encontro $800K en cobros indebidos el primer trimestre.',
        author: 'Patricia Solis',
        role: 'Gerente Administrativo',
        company: 'Grupo Hotelero Maya',
        metric: { value: '$800K', label: 'cobros recuperados' },
      },
      {
        quote: 'Ahora podemos validar cada factura de CFE contra nuestros datos reales. Hemos recuperado cobros indebidos por mas de $800,000.',
        author: 'Patricia Solis',
        role: 'Gerente Administrativo',
        company: 'Grupo Hotelero Maya',
        metric: { value: '$800K', label: 'recuperados en cobros' },
      },
    ],
  },

  team: {
    headline: 'Desarrollado por Vive Energia',
    subtitle: 'Trackio es la plataforma propietaria de Vive Energia, respaldada por un equipo de ingenieros y cientificos de datos.',
    members: [
      {
        name: 'Director de Tecnologia',
        role: 'CTO',
        image: '/images/team/placeholder-1.jpg',
        bio: 'Ingeniero en sistemas con +10 anos en sensores industriales y analisis de energia.',
      },
      {
        name: 'Lider de Datos',
        role: 'Data Science',
        image: '/images/team/placeholder-2.jpg',
        bio: 'Especialista en inteligencia artificial aplicada a deteccion de anomalias energeticas.',
      },
      {
        name: 'Lider de Implementacion',
        role: 'Implementacion',
        image: '/images/team/placeholder-3.jpg',
        bio: '+100 instalaciones de sensores en plantas industriales y cadenas comerciales.',
      },
    ],
  },

  trustBadges: {
    headline: 'Seguridad y Confianza',
    items: [
      {
        image: '/images/trust/badge-ssl-certificate.png',
        label: 'Cifrado de Seguridad',
        description: 'Tus datos protegidos con seguridad de nivel bancario',
      },
      {
        image: '/images/trust/logo-aws.png',
        label: 'AWS Cloud',
        description: 'Infraestructura en la nube de clase mundial',
      },
    ],
  },

  faq: {
    headline: 'Preguntas Frecuentes',
    items: [
      {
        question: '¿Los sensores se integran con mi infraestructura actual?',
        answer: 'Si. Los sensores son no invasivos y se instalan en minutos. Compatible con cualquier tipo de instalacion electrica.',
      },
      {
        question: '¿Mis datos estan seguros?',
        answer: 'Absolutamente. Toda la informacion se transmite con cifrado de seguridad de nivel bancario. Los datos se almacenan en servidores de clase mundial con las mas altas certificaciones. Cumplimos con todas las leyes de proteccion de datos personales en Mexico.',
      },
      {
        question: '¿Cuanto tiempo toma la instalacion de sensores?',
        answer: 'La instalacion tipica por sitio toma de 2 a 4 horas. Para multiples ubicaciones, hacemos un plan de despliegue escalonado. Los datos empiezan a fluir al dashboard en tiempo real desde el momento de la activacion.',
      },
      {
        question: '¿Que pasa si un sensor falla?',
        answer: 'El sistema detecta automaticamente sensores offline y genera una alerta. Nuestro equipo de soporte coordina el reemplazo. Los sensores tienen garantia de 2 anos y reemplazo sin costo durante la vigencia del contrato.',
      },
      {
        question: '¿Puedo integrar Trackio con mis sistemas (ERP, BMS)?',
        answer: 'Si. Trackio se conecta con tus sistemas existentes como ERP o sistemas de gestion de edificios. Puedes exportar datos en varios formatos y conectar directamente con herramientas de analisis como PowerBI y Tableau.',
      },
      {
        question: '¿Cual es el costo?',
        answer: 'El modelo es de suscripcion mensual que incluye sensores, instalacion, plataforma y soporte. El costo depende del numero de puntos de medicion. Agenda un demo y te damos una cotizacion personalizada.',
      },
    ],
  },

  inlineForm: {
    headline: 'Agenda tu demo gratuito',
    subtitle: 'Ve como se ve tu consumo en Trackio. Sin compromiso.',
    fields: [
      { name: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nombre de tu empresa', required: true },
      { name: 'email', label: 'Correo electronico', type: 'email', placeholder: 'tu@empresa.com', required: true },
      { name: 'ubicaciones', label: 'Numero de ubicaciones', type: 'select', required: true, options: ['1 - 5', '6 - 20', '21 - 50', 'Mas de 50'] },
    ],
    submitLabel: 'Agendar demo gratuito',
    disclaimer: 'Al enviar este formulario aceptas nuestro Aviso de Privacidad. Demo de 20 minutos, sin compromiso.',
  },

  finalCta: {
    headline: '¿Cuanto estas pagando de mas sin saberlo?',
    subheadline: 'Agenda un demo y te lo mostramos con datos reales. Sin costo, sin compromiso.',
    ctaLabel: 'Agenda tu demo gratuito',
  },

  navbar: {
    links: [
      { label: 'Modulos', href: '#soluciones' },
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Casos de Exito', href: '#casos' },
      { label: 'FAQ', href: '#faq' },
    ],
  },

  footer: {
    address: 'Ciudad de Mexico | Merida, Yucatan',
    phone: '+52 (55) 2167 3173',
    email: 'contacto@viveenergia.com',
    links: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Terminos y Condiciones', href: '/terminos' },
    ],
  },
}
