import { Locale } from '@/data/portfolio'

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      cta: 'View My Work',
      contact: 'Get In Touch',
      scrollDown: 'Scroll down',
    },
    about: {
      title: 'About Me',
      subtitle: 'Mobile & Web Developer',
      yearsExp: 'Years of Experience',
      projects: 'Projects Delivered',
      technologies: 'Technologies',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies I work with',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my recent work',
      tech: 'Technologies',
      viewAll: 'View All Projects',
      showLess: 'Show Less',
      present: 'Present',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's work together",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      message: "I'm currently open to freelance projects and full-time opportunities. Feel free to reach out!",
    },
    footer: {
      made: 'Made with',
      by: 'by',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      education: 'Formation',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      cta: 'Voir mes projets',
      contact: 'Me contacter',
      scrollDown: 'Défiler vers le bas',
    },
    about: {
      title: 'À Propos',
      subtitle: 'Développeur Mobile & Web',
      yearsExp: "Années d'expérience",
      projects: 'Projets livrés',
      technologies: 'Technologies',
    },
    skills: {
      title: 'Compétences & Technologies',
      subtitle: 'Technologies avec lesquelles je travaille',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Quelques-uns de mes travaux récents',
      tech: 'Technologies',
      viewAll: 'Voir tous les projets',
      showLess: 'Réduire',
      present: 'Présent',
    },
    education: {
      title: 'Formation',
      subtitle: 'Mon parcours académique',
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Travaillons ensemble',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      message: "Je suis actuellement disponible pour des projets freelance et des opportunités à temps plein. N'hésitez pas à me contacter !",
    },
    footer: {
      made: 'Fait avec',
      by: 'par',
    },
  },
}

export type TranslationKey = typeof translations.en

export function t(locale: Locale, path: string): string {
  const keys = path.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations[locale]
  for (const key of keys) {
    result = result?.[key]
  }
  return result ?? path
}
