// Base path for GitHub Pages deployment
export const BASE = import.meta.env.BASE_URL ?? '/portfolio/'

export interface Project {
  n: string
  year: string
  title: string
  tag: string
  role: string
  desc: { fr: string; en: string }
  stack: string[]
  metric: string
  hue: [string, string]
  github?: string
  link?: string
}

export const projects: Project[] = [
  {
    n: '01',
    year: '2025',
    title: 'California Housing API',
    tag: 'ML / Data',
    role: 'ML Engineer',
    desc: {
      fr: "Application Gradio pour prédire la valeur médiane des maisons. Déployée sur HuggingFace Spaces avec Machine Learning.",
      en: "Gradio app to predict median house values. Deployed on HuggingFace Spaces with ML.",
    },
    stack: ['Python', 'ML', 'Gradio', 'HuggingFace'],
    metric: 'HF Spaces',
    hue: ['#c2410c', '#7c2d12'],

    link: 'https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API',
    github: 'https://github.com/LenouvelLouis/Housing-Prices',
  },
  {
    n: '02',
    year: '2025',
    title: 'MetroVision',
    tag: 'Computer Vision',
    role: 'ML Engineer',
    desc: {
      fr: "Reconnaissance automatique des lignes de métro parisien à partir d'images grâce à la détection et classification de pictogrammes.",
      en: "Automatic recognition of Paris metro lines using image-based pictogram detection and classification.",
    },
    stack: ['Python', 'OpenCV', 'ML', 'HuggingFace'],
    metric: 'F1 · 0.94',
    hue: ['#1e3a8a', '#312e81'],

    link: 'https://huggingface.co/spaces/LenouvelLouisDev/MetroVision',
    github: 'https://github.com/LenouvelLouis/MetroVision',
  },
  {
    n: '03',
    year: '2025',
    title: 'Bee or Not to Bee',
    tag: 'Deep Learning',
    role: 'Data Scientist',
    desc: {
      fr: "Classificateur d'insectes (abeilles, bourdons ou autres) basé sur le machine learning à partir d'images segmentées.",
      en: "Image-based insect classifier (bees, bumblebees or others) using ML on segmented data.",
    },
    stack: ['Python', 'Deep Learning', 'CV', 'Data Science'],
    metric: 'Classification',
    hue: ['#166534', '#064e3b'],

    github: 'https://github.com/GabrielEstevesDev/Bee-or-Not-to-Bee--Machine-Learning-Based-Bee-Classification',
  },
  {
    n: '04',
    year: '2025',
    title: 'AI VR Learning',
    tag: 'VR / AI',
    role: 'Full-stack',
    desc: {
      fr: "Plateforme VR interactive supportée par IA pour l'apprentissage immersif et adaptatif dans les environnements virtuels.",
      en: "AI-driven VR platform for immersive and adaptive learning experiences in virtual environments.",
    },
    stack: ['Unity', 'C#', 'VR', 'ML'],
    metric: 'Immersive',
    hue: ['#854d0e', '#422006'],

    github: 'https://github.com/LenouvelLouis/AI-VR-Learning',
  },
  {
    n: '05',
    year: '2024',
    title: 'Events-It',
    tag: 'Web App',
    role: 'Full-stack',
    desc: {
      fr: "Application de gestion et d'analyse d'événements : création, suivi et visualisation des données en temps réel.",
      en: "Event management and analytics application: create, track and visualize event data in real time.",
    },
    stack: ['PHP', 'HTML', 'CSS', 'API'],
    metric: 'Real-time',
    hue: ['#7e22ce', '#581c87'],

    github: 'https://github.com/LenouvelLouis/Events-It',
  },
  {
    n: '06',
    year: '2024',
    title: 'Portefeuille Financier',
    tag: 'Data Viz',
    role: 'Data Analyst',
    desc: {
      fr: "Application de suivi et d'analyse de portefeuille d'investissement : visualisation, indicateurs financiers et prise de décision.",
      en: "Investment portfolio tracking and analysis: dashboard, financial metrics and decision support.",
    },
    stack: ['Python', 'Finance', 'Data Viz'],
    metric: 'Analytics',
    hue: ['#0f766e', '#134e4a'],
    github: 'https://github.com/LenouvelLouis/Portefeuille-financier-ISEP',
  },
]