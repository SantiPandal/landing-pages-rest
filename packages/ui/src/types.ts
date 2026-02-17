export interface SiteConfig {
  brand: {
    name: string
    logo: string
    primaryColor: string
    secondaryColor: string
    accentColor: string
    fontFamily: string
    ctaUrl: string
    ctaLabel: string
  }

  hero: {
    headline: string
    subheadline?: string
    backgroundImage: string
    ctaLabel?: string
  }

  socialProof: {
    title?: string
    logos: Array<{ src: string; alt: string }>
  }

  aggregateMetrics?: {
    items: Array<{ value: string; label: string }>
  }

  howItWorks: {
    title?: string
    subtitle?: string
    steps: Array<{
      number: number
      title: string
      description: string
      icon?: string
    }>
  }

  solutions: {
    headline?: string
    subtitle?: string
    items: Array<{
      title: string
      description: string
      image?: string
      icon?: string
      stats?: Array<{ value: string; label: string }>
    }>
  }

  midCta?: {
    headline: string
    subheadline?: string
    ctaLabel?: string
  }

  caseStudy?: {
    headline?: string
    items: Array<{
      company: string
      logo?: string
      industry: string
      challenge: string
      solution: string
      results: Array<{ value: string; label: string }>
      quote?: string
      quoteAuthor?: string
      quoteRole?: string
    }>
  }

  testimonials: {
    headline?: string
    items: Array<{
      quote: string
      author: string
      role: string
      company: string
      image?: string
      metric?: { value: string; label: string }
    }>
  }

  team?: {
    headline?: string
    subtitle?: string
    members: Array<{
      name: string
      role: string
      image: string
      bio?: string
      linkedin?: string
    }>
  }

  trustBadges?: {
    headline?: string
    items: Array<{
      image: string
      label: string
      description?: string
    }>
  }

  faq?: {
    headline?: string
    subtitle?: string
    items: Array<{
      question: string
      answer: string
    }>
  }

  inlineForm?: {
    headline?: string
    subtitle?: string
    fields: Array<{
      name: string
      label: string
      type: 'text' | 'email' | 'tel' | 'select'
      placeholder?: string
      required?: boolean
      options?: string[]
    }>
    submitLabel: string
    disclaimer?: string
  }

  finalCta: {
    headline: string
    subheadline?: string
    ctaLabel?: string
  }

  navbar: {
    links: Array<{ label: string; href: string }>
  }

  footer: {
    address?: string
    phone?: string
    email?: string
    links?: Array<{ label: string; href: string }>
    socialLinks?: Array<{ platform: string; url: string }>
  }
}
