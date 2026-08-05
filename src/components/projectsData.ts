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
  // — 2026 —
  {
    n: '01',
    year: '2026',
    title: 'Sovereign RAG',
    tag: 'AI / RAG',
    role: 'Data Engineer',
    desc: {
      fr: "Système RAG entièrement auto-hébergé chez IKIGAI Games for Citizens, sans dépendance à une API cloud, pour interroger un corpus documentaire sensible en langage naturel. Ingestion multi-format (PDF, DOCX, PPTX, Markdown, HTML) avec OCR Tesseract, recherche hybride BM25+RRF, reranking cross-encoder, HyDE et décomposition multi-hop. Garde-fou anti-hallucination avec citations tracées à la phrase, détection d'injection de prompt cachée dans les documents, rédaction PII à l'indexation et porte de régression bloquante en CI. Infrastructure GPU montée à la main (passthrough VFIO/IOMMU) : indexation ramenée de 60 secondes à 7,3 secondes.",
      en: "Fully self-hosted RAG system built at IKIGAI Games for Citizens, with no dependency on a cloud API, to query a sensitive document corpus in natural language. Multi-format ingestion (PDF, DOCX, PPTX, Markdown, HTML) with Tesseract OCR, hybrid BM25+RRF search, cross-encoder reranking, HyDE and multi-hop decomposition. Anti-hallucination guardrail with sentence-level citation tracing, hidden prompt-injection detection in documents, PII redaction at indexing time and a blocking regression gate in CI. Self-built GPU infrastructure (VFIO/IOMMU passthrough): indexing time cut from 60 seconds to 7.3 seconds.",
    },
    stack: ['Python', 'Ollama (Mistral)', 'ChromaDB', 'sentence-transformers', 'Tesseract', 'FastAPI', 'Gradio', 'pytest', 'GitLab CI', 'systemd'],
    metric: 'Indexing 60s → 7.3s',
    hue: ['#b91c1c', '#450a0a'],
  },
  {
    n: '02',
    year: '2026',
    title: 'MetroVision-MLOps',
    tag: 'AI / MLOps',
    role: 'ML Engineer',
    desc: {
      fr: "Industrialisation d'un projet académique de détection de pictogrammes du métro parisien (Hough + CNN + k-NN) en système ML production-grade avec API REST, pipeline MLflow, déploiement Kubernetes et monitoring de drift des features HOG via Evidently AI.",
      en: "End-to-end productionization of an academic Paris Metro pictogram detection system (Hough + CNN + k-NN) into a production-grade ML platform with REST API, MLflow pipelines, Kubernetes deployment, and HOG feature drift monitoring via Evidently AI.",
    },
    stack: ['Python', 'FastAPI', 'TensorFlow', 'scikit-learn', 'Docker', 'Kubernetes', 'Kustomize', 'MLflow', 'Prometheus', 'Grafana', 'Evidently AI', 'GitHub Actions', 'pytest', 'Ruff'],
    metric: '60 Tests · 7 Phases · Full MLOps Pipeline',
    hue: ['#06b6d4', '#155e75'],
    github: 'https://github.com/LenouvelLouis/MetroVision-MLOps',
  },
  {
    n: '03',
    year: '2026',
    title: 'PowerShift',
    tag: 'Energy / Data',
    role: 'Data Engineer',
    desc: {
      fr: "Plateforme de simulation et d'optimisation de réseaux électriques : modélisation multi-sources (nucléaire, solaire, éolien), stockage batteries et optimisation LOPF sur données météo réelles.",
      en: "Energy grid simulation & optimization platform: multi-source modeling (nuclear, solar, wind), battery storage and LOPF optimization on real weather data.",
    },
    stack: ['Python', 'FastAPI', 'Vue.js', 'Nuxt', 'TypeScript', 'PostgreSQL', 'Docker', 'PyPSA', 'Tailwind CSS', 'ECharts'],
    metric: '216+ Tests',
    hue: ['#0891b2', '#164e63'],

    github: 'https://github.com/LenouvelLouis/PowerShift',
  },
  {
    n: '04',
    year: '2026',
    title: 'DeepRetriev',
    tag: 'AI / ML',
    role: 'ML Engineer',
    desc: {
      fr: "Pipeline RAG from scratch sans LangChain, projet personnel : ingestion Wikipedia, chunking, embedding, retrieval hybride (BM25 + cosine via RRF), re-ranking cross-encoder, génération via Ollama. Inclut un framework d'évaluation (Recall@k, MRR, LLM-as-judge) et un benchmark embeddings x chunking, tracking MLflow, API FastAPI, UI Streamlit et déploiement Docker.",
      en: "From-scratch RAG pipeline without LangChain, personal project: Wikipedia ingestion, chunking, embedding, hybrid retrieval (BM25 + cosine via RRF), cross-encoder re-ranking, generation via Ollama. Includes an evaluation framework (Recall@k, MRR, LLM-as-judge) and an embeddings x chunking benchmark, MLflow tracking, FastAPI API, Streamlit UI, and Docker deployment.",
    },
    stack: ['Python', 'FastAPI', 'Streamlit', 'ChromaDB', 'Sentence-Transformers', 'Ollama', 'MLflow', 'Docker', 'BM25', 'Cross-Encoder', 'pytest'],
    metric: '37 Tests · 4 Phases',
    hue: ['#8b5cf6', '#4c1d95'],
    github: 'https://github.com/LenouvelLouis/DeepRetriev',
  },
  // — 2025 —
  {
    n: '05',
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
    n: '06',
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
    n: '07',
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
    n: '08',
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
  // — 2023 —
  {
    n: '09',
    year: '2023',
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
    n: '10',
    year: '2023',
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