// ============================================================
// CENTRALIZED PORTFOLIO DATA
// All content is stored here for easy API integration later.
// Replace this static data with API calls when ready.
// ============================================================

export type Locale = "en" | "fr";

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: { en: string; fr: string };
  email: string;
  phone: string;
  address: { en: string; fr: string };
  photo: string;
  summary: { en: string; fr: string };
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  category: "mobile" | "frontend" | "backend" | "database" | "tools";
}

export interface Language {
  name: { en: string; fr: string };
  level: { en: string; fr: string };
}

export interface Education {
  period: string;
  degree: { en: string; fr: string };
  field: { en: string; fr: string };
  institution: string;
}

export interface Project {
  id: string;
  title: string;
  period: { en: string; fr: string };
  type: { en: string; fr: string };
  context: { en: string; fr: string };
  description: { en: string; fr: string };
  technologies: string[];
  link?: string;
  featured?: boolean;
}

// ============================================================
// PERSONAL INFO
// ============================================================
export const personalInfo: PersonalInfo = {
  name: "Harena Rico Mahefaniaina",
  firstName: "Harena Rico",
  lastName: "Mahefaniaina",
  title: {
    en: "Mobile & Web Developer",
    fr: "Développeur Mobile & Web",
  },
  email: "harenaricom@gmail.com",
  phone: "+261 34 33 13 551",
  address: {
    en: "Lot TR42 Ampahimanga, Ambohimanambola, Madagascar",
    fr: "Lot TR42 Ampahimanga, Ambohimanambola, Madagascar",
  },
  photo: "/harena.jpg",
  summary: {
    en: "Mobile & Web Developer with 4+ years of expertise at Futurmap. Specialized in Flutter development with strong command of modern web technologies (Node.js, Vue.js, Django, Next.js). Expert in GIS solutions and complex geospatial system integration.",
    fr: "Développeur Mobile & Web avec plus de 4 ans d'expertise chez Futurmap. Spécialisé en développement Flutter avec une solide maîtrise des technologies web modernes (Node.js, Vue.js, Django, Next.js). Expert en solutions SIG et intégration de systèmes géospatiaux complexes.",
  },
  github: "https://github.com/harena2000",
  linkedin: "",
};

// ============================================================
// SKILLS
// ============================================================
export const skills: Skill[] = [
  { name: "Flutter", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "React", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Django", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "QGIS", category: "tools" },
];

export const skillCategories: Record<
  Skill["category"],
  { en: string; fr: string; color: string }
> = {
  mobile: { en: "Mobile", fr: "Mobile", color: "blue" },
  frontend: { en: "Frontend", fr: "Frontend", color: "cyan" },
  backend: { en: "Backend", fr: "Backend", color: "gray" },
  database: { en: "Database", fr: "Base de données", color: "slate" },
  tools: { en: "Tools", fr: "Outils", color: "zinc" },
};

// ============================================================
// LANGUAGES
// ============================================================
export const spokenLanguages: Language[] = [
  {
    name: { en: "French", fr: "Français" },
    level: { en: "Native", fr: "Natif" },
  },
  {
    name: { en: "English", fr: "Anglais" },
    level: { en: "Professional", fr: "Professionnel" },
  },
];

// ============================================================
// EDUCATION
// ============================================================
export const education: Education[] = [
  {
    period: "2019 – 2022",
    degree: {
      en: "Bachelor's Degree in Computer Science",
      fr: "Licence en Informatique",
    },
    field: {
      en: "Software Engineering",
      fr: "Parcours Génie Logiciel",
    },
    institution: "Université Adventiste Zurcher",
  },
  {
    period: "2018",
    degree: {
      en: "High School Diploma (Baccalauréat)",
      fr: "Baccalauréat",
    },
    field: {
      en: "General Studies",
      fr: "Enseignement Général",
    },
    institution: "Lycée Privée Adventiste Julien Ramamonjisoa",
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const projects: Project[] = [
  {
    id: "zakajiaby",
    title: "ZakaJiaby",
    period: {
      en: "April 2025 – Present",
      fr: "Avril 2025 – Présent",
    },
    type: {
      en: "Freelance · Mobile App",
      fr: "Freelance · Application Mobile",
    },
    context: {
      en: "Freelance",
      fr: "Freelance",
    },
    description: {
      en: "Mobile application for budget management, events, and activities for groups of people. Ongoing project using Flutter to deliver a smooth and high-performance user experience on iOS and Android.",
      fr: "Application mobile de gestion budgétaire, d'événements et d'activités pour des groupes de personnes. Projet en cours de développement utilisant Flutter pour offrir une expérience utilisateur fluide et performante sur iOS et Android.",
    },
    technologies: ["Flutter", "Dart"],
    featured: true,
  },
  {
    id: "websig",
    title: "WebSIG Platform",
    period: {
      en: "September 2025 – Present",
      fr: "Septembre 2025 – Présent",
    },
    type: {
      en: "Futurmap · Web GIS Application",
      fr: "Futurmap · Application Web SIG",
    },
    context: {
      en: "Futurmap",
      fr: "Futurmap",
    },
    description: {
      en: "Development of a full-featured WebGIS platform with QGIS integration. Built a custom QGIS plugin communicating via WebSocket to sync changes directly with the web app. Implemented a geospatial layer display system on images and an interactive map. Developed an innovative viewer transforming panoramic images into an immersive 360° experience.",
      fr: "Développement d'une plateforme WebSIG complète avec une intégration du QGIS. Création d'un plugin QGIS personnalisé communiquant via WebSocket pour synchroniser les modifications directement avec l'application web. Mise en place d'un système d'affichage de couches géospatiales sur les images et une carte interactive. Développement d'un viewer innovant transformant les images panoramiques en expérience 360° immersive.",
    },
    technologies: [
      "Django",
      "Next.js",
      "Python",
      "TypeScript",
      "WebSocket",
      "Leaflet",
      "OpenStreetMap",
      "PostgreSQL",
      "QGIS",
    ],
    featured: true,
  },
  {
    id: "ticketing",
    title: "Ticketing System",
    period: {
      en: "September 2025 – Present",
      fr: "Septembre 2025 – Présent",
    },
    type: {
      en: "Freelance · Web Application",
      fr: "Freelance · Application Web",
    },
    context: {
      en: "Freelance",
      fr: "Freelance",
    },
    description: {
      en: "Design and development of a comprehensive ticket management platform with a Node.js backend and a modern Vue.js frontend. Robust architecture enabling efficient request management, ticket tracking, and real-time collaboration.",
      fr: "Conception et développement d'une plateforme de gestion de tickets complète avec backend Node.js et interface utilisateur moderne en Vue.js. Architecture robuste permettant la gestion efficace des demandes, le suivi des tickets et la collaboration en temps réel.",
    },
    technologies: ["Node.js", "Express", "Vue.js", "TypeScript", "PostgreSQL"],
    featured: false,
  },
  {
    id: "insidegolf",
    title: "InsideGolf App",
    period: {
      en: "February 2024 – April 2025",
      fr: "Février 2024 – Avril 2025",
    },
    type: {
      en: "Futurmap · Mobile App",
      fr: "Futurmap · Application Mobile",
    },
    context: {
      en: "Futurmap",
      fr: "Futurmap",
    },
    description: {
      en: "Development of a mobile application dedicated to golf using Flutter, offering an optimal user experience and advanced features for golf enthusiasts.",
      fr: "Développement d'une application mobile dédiée au golf avec Flutter, offrant une expérience utilisateur optimale et des fonctionnalités avancées pour les passionnés de golf.",
    },
    technologies: ["Flutter", "Dart"],
    featured: false,
  },
  {
    id: "singsong",
    title: "SingSong App",
    period: {
      en: "April – July 2024",
      fr: "Avril – Juillet 2024",
    },
    type: {
      en: "Freelance · Mobile App",
      fr: "Freelance · Application Mobile",
    },
    context: {
      en: "Freelance",
      fr: "Freelance",
    },
    description: {
      en: "Development of an innovative mobile application using Flutter for a modern and high-performance user experience across multiple platforms.",
      fr: "Développement d'une application mobile innovante utilisant Flutter pour une expérience utilisateur moderne et performante sur plusieurs plateformes.",
    },
    technologies: ["Flutter", "Dart"],
    featured: false,
  },
];

// ============================================================
// NAV LINKS
// ============================================================
export const navLinks = [
  { id: "about", label: { en: "About", fr: "À propos" } },
  { id: "skills", label: { en: "Skills", fr: "Compétences" } },
  { id: "projects", label: { en: "Projects", fr: "Projets" } },
  { id: "education", label: { en: "Education", fr: "Formation" } },
  { id: "contact", label: { en: "Contact", fr: "Contact" } },
];
