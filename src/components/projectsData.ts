// Base path for GitHub Pages deployment
export const BASE = import.meta.env.BASE_URL ?? '/portfolio/'

export type Lang = 'fr' | 'en'
export type T = { fr: string; en: string }

export type Category = 'genai' | 'ml' | 'mlops' | 'data' | 'web'

export const categories: { k: Category | 'all'; label: T }[] = [
  { k: 'all', label: { fr: 'Tout', en: 'All' } },
  { k: 'genai', label: { fr: 'GenAI & RAG', en: 'GenAI & RAG' } },
  { k: 'ml', label: { fr: 'ML & vision', en: 'ML & vision' } },
  { k: 'mlops', label: { fr: 'MLOps', en: 'MLOps' } },
  { k: 'data', label: { fr: 'Data engineering', en: 'Data engineering' } },
  { k: 'web', label: { fr: 'Web & autres', en: 'Web & more' } },
]

export interface Project {
  slug: string
  code: string // shown inside the line bullet
  color: string // line colour
  ink: string // text colour on the bullet
  year: string
  title: string
  cat: Category[]
  context: T
  status?: T
  summary: T
  highlights: T[]
  figure?: { value: string; label: T }
  track: string[]
  stack: string[]
  github?: string
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'sovereign-rag',
    code: '1',
    color: '#e0312b',
    ink: '#ffffff',
    year: '2026',
    title: 'Sovereign RAG',
    cat: ['genai'],
    featured: true,
    context: { fr: 'Expérience pro, IKIGAI Games for Citizens', en: 'Work experience, IKIGAI Games for Citizens' },
    summary: {
      fr: "Un assistant qui répond aux questions sur le corpus documentaire interne d'IKIGAI sans qu'aucun document ne quitte nos serveurs. Tout tourne en local, du parsing des PDF jusqu'au modèle de langage.",
      en: "An assistant that answers questions about IKIGAI's internal documents without a single file leaving our servers. Everything runs on-premise, from PDF parsing to the language model.",
    },
    highlights: [
      {
        fr: 'Ingestion PDF, DOCX, PPTX, Markdown et HTML, avec OCR Tesseract pour les scans.',
        en: 'Ingestion of PDF, DOCX, PPTX, Markdown and HTML, with Tesseract OCR for scans.',
      },
      {
        fr: 'Recherche hybride BM25 + dense fusionnée par RRF, reranking cross-encoder, HyDE et décomposition des questions multi-hop.',
        en: 'Hybrid BM25 + dense search fused with RRF, cross-encoder reranking, HyDE and multi-hop question decomposition.',
      },
      {
        fr: "Chaque phrase de la réponse est rattachée à un passage source. Si elle n'en a pas, elle n'est pas affichée.",
        en: "Every sentence of an answer is tied to a source passage. If it has none, it is not shown.",
      },
      {
        fr: "Détection des injections de prompt cachées dans les documents et masquage des données personnelles dès l'indexation.",
        en: 'Detection of prompt injections hidden inside documents, and personal data redacted at indexing time.',
      },
      {
        fr: 'Un jeu de questions de régression bloque la CI GitLab si la qualité des réponses baisse.',
        en: 'A regression question set blocks the GitLab CI whenever answer quality drops.',
      },
      {
        fr: "Serveur GPU monté à la main (passthrough VFIO/IOMMU) : l'indexation passe de 60 s à 7,3 s.",
        en: 'GPU server set up by hand (VFIO/IOMMU passthrough): indexing went from 60 s to 7.3 s.',
      },
    ],
    figure: { value: '60 s → 7,3 s', label: { fr: "temps d'indexation", en: 'indexing time' } },
    track: ['Ingestion', 'OCR', 'BM25 + dense', 'Rerank', 'Mistral', 'Citations'],
    stack: ['Python', 'Ollama', 'Mistral', 'ChromaDB', 'sentence-transformers', 'Tesseract', 'FastAPI', 'Gradio', 'pytest', 'GitLab CI', 'systemd'],
  },
  {
    slug: 'undercurrents',
    code: '2',
    color: '#8b5cf6',
    ink: '#ffffff',
    year: '2026',
    title: 'Undercurrents',
    cat: ['ml', 'data'],
    featured: true,
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: "18 ans de setlists de Tame Impala (environ 750 concerts, de 2008 à 2026) : ingestion, nettoyage, clustering, puis prédiction des morceaux du prochain concert. Le tout dans une web app au look rétro psychédélique.",
      en: "18 years of Tame Impala setlists (about 750 shows, 2008 to 2026): ingestion, cleaning, clustering, then predicting the songs of the next show. All of it in a retro psychedelic web app.",
    },
    highlights: [
      {
        fr: "Désambiguïsation des titres via MusicBrainz et une table d'alias : la couverture des performances passe de 45 % à 88 %.",
        en: 'Song title disambiguation through MusicBrainz and an alias table: performance coverage went from 45% to 88%.',
      },
      {
        fr: 'Enrichissement : dates de sortie, durées, capacité des salles via Wikidata (SPARQL), géocodage des villes via Nominatim.',
        en: 'Enrichment: release dates, durations, venue capacity from Wikidata (SPARQL), city geocoding through Nominatim.',
      },
      {
        fr: 'Split strictement chronologique. Chaque modèle (GRU, MLP, item2vec) est comparé à une baseline simple, y compris quand la baseline gagne.',
        en: 'Strictly chronological split. Every model (GRU, MLP, item2vec) is compared to a simple baseline, including when the baseline wins.',
      },
      {
        fr: "Ordre de passage prédit par un GRU : 84 % du set retrouvé en backtest, dans les conditions réelles d'utilisation.",
        en: 'Running order predicted by a GRU: 84% of the set recovered in backtest, scored the way the page actually runs.',
      },
      {
        fr: "Modèles figés et API exportée en ~1 700 fichiers JSON : le site est 100 % statique, sans serveur Python.",
        en: 'Frozen models and the API exported to ~1,700 JSON files: the site is fully static, no Python server.',
      },
    ],
    figure: { value: '84 %', label: { fr: 'du set prédit (backtest)', en: 'of the set predicted (backtest)' } },
    track: ['setlist.fm', 'Nettoyage', 'MusicBrainz', 'Clustering', 'Prédiction', 'Export JSON'],
    stack: ['Python', 'SQLite', 'scikit-learn', 'PyTorch', 'UMAP', 'FastAPI', 'React', 'Vite', 'Tailwind', 'Cloudflare'],
    github: 'https://github.com/LenouvelLouis/Undercurrents',
  },
  {
    slug: 'velib-agent',
    code: '3',
    color: '#00a36c',
    ink: '#ffffff',
    year: '2026',
    title: "Vélib' Agent",
    cat: ['genai'],
    featured: true,
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: "Un agent conversationnel en français sur l'état du parc Vélib' en temps réel : vélos disponibles, stations vides ou pleines, stations proches d'une adresse. Écrit en Go, un seul binaire pour l'API et l'interface.",
      en: "A French-speaking agent that answers questions about the live Vélib' bike-share network: available bikes, empty or full stations, stations near an address. Written in Go, one binary for both API and UI.",
    },
    highlights: [
      {
        fr: "Quatre outils explicites plutôt qu'un outil de requête générique, avec des schémas générés depuis des structs Go typées.",
        en: 'Four explicit tools instead of one generic query tool, with schemas generated from typed Go structs.',
      },
      {
        fr: "Le modèle ne voit jamais le JSON brut (~750 Ko pour 1 519 stations) : un cache agrège et filtre côté Go.",
        en: 'The model never sees raw JSON (~750 KB for 1,519 stations): a cache aggregates and filters on the Go side.',
      },
      {
        fr: 'Réponses streamées en SSE, historique dans PostgreSQL, LLM interchangeable (Ollama, Anthropic, OpenAI, Mistral).',
        en: 'Answers streamed over SSE, history in PostgreSQL, swappable LLM (Ollama, Anthropic, OpenAI, Mistral).',
      },
      {
        fr: 'Garde-fou sur les longues listes : 0 réponse inventée sur 30 essais mesurés, contre environ 20 % avant.',
        en: 'Guardrail on long lists: 0 made-up answers out of 30 measured runs, down from about 20% before.',
      },
      {
        fr: 'Plusieurs bugs trouvés en testant la vraie stack avec Playwright alors que go test passait entièrement.',
        en: 'Several bugs found by testing the real stack with Playwright while go test was fully green.',
      },
    ],
    figure: { value: '0 / 30', label: { fr: 'réponses inventées affichées', en: 'made-up answers shown' } },
    track: ['GBFS', 'Cache', 'Outils', 'LLM', 'Garde-fou', 'SSE'],
    stack: ['Go', 'trpc-agent-go', 'PostgreSQL', 'templ', 'HTMX', 'SSE', 'Ollama', 'Docker Compose', 'Playwright'],
    github: 'https://github.com/LenouvelLouis/velib-agent-go',
  },
  {
    slug: 'metrovision-mlops',
    code: '4',
    color: '#0ea5e9',
    ink: '#ffffff',
    year: '2026',
    title: 'MetroVision MLOps',
    cat: ['mlops', 'ml'],
    featured: true,
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: "Reprendre un projet d'école de vision par ordinateur (détection des pictogrammes du métro parisien) et en faire un service ML qu'on peut vraiment exploiter : API, pipelines, déploiement et surveillance.",
      en: 'Taking a school computer vision project (Paris metro pictogram detection) and turning it into an ML service you can actually run: API, pipelines, deployment and monitoring.',
    },
    highlights: [
      { fr: 'API REST FastAPI devant le modèle Hough + CNN + k-NN.', en: 'FastAPI REST API in front of the Hough + CNN + k-NN model.' },
      { fr: 'Entraînements et versions de modèles suivis dans MLflow.', en: 'Training runs and model versions tracked in MLflow.' },
      { fr: 'Déploiement Kubernetes avec Kustomize, métriques Prometheus et Grafana.', en: 'Kubernetes deployment with Kustomize, Prometheus and Grafana metrics.' },
      { fr: 'Détection de dérive sur les features HOG avec Evidently AI.', en: 'Drift detection on HOG features with Evidently AI.' },
      { fr: '60 tests, lint Ruff, CI GitHub Actions, livré en 7 phases.', en: '60 tests, Ruff linting, GitHub Actions CI, shipped in 7 phases.' },
    ],
    figure: { value: '60', label: { fr: 'tests, 7 phases', en: 'tests, 7 phases' } },
    track: ['Données', 'Entraînement', 'MLflow', 'API', 'Kubernetes', 'Drift'],
    stack: ['Python', 'FastAPI', 'TensorFlow', 'scikit-learn', 'Docker', 'Kubernetes', 'Kustomize', 'MLflow', 'Prometheus', 'Grafana', 'Evidently AI', 'GitHub Actions'],
    github: 'https://github.com/LenouvelLouis/MetroVision-MLOps',
  },
  {
    slug: 'flowforge',
    code: '5',
    color: '#f5a100',
    ink: '#14181f',
    year: '2026',
    title: 'FlowForge',
    cat: ['data'],
    featured: true,
    status: { fr: 'En cours', en: 'In progress' },
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: 'Un pipeline ELT sur les données ferroviaires SNCF (GTFS national et alertes temps réel), orchestré par Airflow, modélisé avec dbt, et qui tourne entièrement en local avec Docker Compose.',
      en: 'An ELT pipeline on French railway data (national GTFS and real-time alerts), orchestrated with Airflow, modelled with dbt, running fully locally with Docker Compose.',
    },
    highlights: [
      { fr: 'Un seul Postgres, deux bases (métadonnées Airflow et entrepôt) et des schémas raw, staging, intermediate, marts.', en: 'One Postgres, two databases (Airflow metadata and warehouse) and raw, staging, intermediate, marts schemas.' },
      { fr: 'Un docker compose up suffit : healthchecks et ordre de démarrage garantis, même après un crash.', en: 'A single docker compose up is enough: healthchecks and startup order guaranteed, even after a crash.' },
      { fr: "Chargements via table de staging et swap atomique, jamais d'écriture directe sur la table servie.", en: 'Loads go through a staging table and an atomic swap, never straight into the served table.' },
      { fr: 'Ruff, sqlfluff et tests sur fixtures locales, sans appel réseau.', en: 'Ruff, sqlfluff and tests on local fixtures, with no network calls.' },
    ],
    figure: { value: 'Phase 2', label: { fr: 'infra faite, ingestion en cours', en: 'infra done, ingestion underway' } },
    track: ['GTFS', 'GTFS-RT', 'raw', 'staging', 'marts', 'Airflow'],
    stack: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'Docker Compose', 'Ruff', 'sqlfluff'],
    github: 'https://github.com/LenouvelLouis/FlowForge',
  },
  {
    slug: 'powershift',
    code: '6',
    color: '#14b8a6',
    ink: '#ffffff',
    year: '2026',
    title: 'PowerShift',
    cat: ['data'],
    featured: true,
    context: { fr: "Projet d'équipe", en: 'Team project' },
    summary: {
      fr: 'Une plateforme de simulation de réseau électrique : production nucléaire, solaire et éolienne, stockage par batteries, et optimisation du dispatch sur des données météo réelles.',
      en: 'An electricity grid simulation platform: nuclear, solar and wind generation, battery storage, and dispatch optimisation on real weather data.',
    },
    highlights: [
      { fr: 'Optimisation LOPF (optimal power flow linéaire) avec PyPSA.', en: 'Linear optimal power flow (LOPF) with PyPSA.' },
      { fr: 'Backend FastAPI et PostgreSQL, dashboard Nuxt 4 avec ECharts.', en: 'FastAPI and PostgreSQL backend, Nuxt 4 dashboard with ECharts.' },
      { fr: 'Plus de 216 tests, le tout conteneurisé avec Docker.', en: 'Over 216 tests, fully containerised with Docker.' },
    ],
    figure: { value: '216+', label: { fr: 'tests', en: 'tests' } },
    track: ['Météo', 'Réseau', 'PyPSA', 'API', 'Dashboard'],
    stack: ['Python', 'FastAPI', 'PyPSA', 'PostgreSQL', 'Nuxt', 'Vue.js', 'TypeScript', 'ECharts', 'Docker'],
    github: 'https://github.com/LenouvelLouis/PowerShift',
  },
  {
    slug: 'deepretriev',
    code: '7',
    color: '#ec4899',
    ink: '#ffffff',
    year: '2026',
    title: 'DeepRetriev',
    cat: ['genai'],
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: "Un pipeline RAG écrit sans LangChain, sur un corpus Wikipedia autour des énergies renouvelables. L'idée : comprendre chaque brique au lieu de les empiler.",
      en: 'A RAG pipeline written without LangChain, over a Wikipedia corpus on renewable energy. The point: understand every piece instead of stacking them.',
    },
    highlights: [
      { fr: 'Retrieval hybride BM25 + cosinus via RRF, reranking cross-encoder, génération avec Ollama.', en: 'Hybrid BM25 + cosine retrieval via RRF, cross-encoder reranking, generation with Ollama.' },
      { fr: 'Évaluation Recall@k, MRR et LLM-as-judge.', en: 'Evaluation with Recall@k, MRR and LLM-as-judge.' },
      { fr: 'Benchmark croisé modèles d’embedding × stratégies de chunking, suivi dans MLflow.', en: 'Cross benchmark of embedding models × chunking strategies, tracked in MLflow.' },
      { fr: 'API FastAPI, interface Streamlit, déploiement Docker, 37 tests.', en: 'FastAPI API, Streamlit UI, Docker deployment, 37 tests.' },
    ],
    figure: { value: '37', label: { fr: 'tests, 4 phases', en: 'tests, 4 phases' } },
    track: ['Wikipedia', 'Chunking', 'Embeddings', 'BM25 + cos', 'Rerank', 'Éval'],
    stack: ['Python', 'ChromaDB', 'sentence-transformers', 'Ollama', 'MLflow', 'FastAPI', 'Streamlit', 'Docker', 'pytest'],
    github: 'https://github.com/LenouvelLouis/DeepRetriev',
  },
  {
    slug: 'campus-gym',
    code: '8',
    color: '#84cc16',
    ink: '#14181f',
    year: '2026',
    title: 'Campus Gym Predictor',
    cat: ['ml'],
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: "Prédire l'affluence d'une salle de sport de campus selon l'heure, le jour, la météo et le calendrier universitaire, pour éviter les heures de pointe.",
      en: 'Predicting how crowded a campus gym will be from the hour, weekday, weather and academic calendar, to dodge peak hours.',
    },
    highlights: [
      { fr: 'Encodage cyclique (sin/cos) des heures et des mois.', en: 'Cyclical (sin/cos) encoding of hours and months.' },
      { fr: "Features d'interaction : heure × week-end, température × période de semestre.", en: 'Interaction features: hour × weekend, temperature × semester period.' },
      { fr: 'Random Forest contre Histogram Gradient Boosting, app Gradio.', en: 'Random Forest versus Histogram Gradient Boosting, Gradio app.' },
    ],
    track: ['EDA', 'Features', 'RF vs HGB', 'Gradio'],
    stack: ['Python', 'scikit-learn', 'pandas', 'Gradio'],
    github: 'https://github.com/LenouvelLouis/Campus-Gym-Crowdedness-Predictor',
  },
  {
    slug: 'metrovision',
    code: '9',
    color: '#1d4ed8',
    ink: '#ffffff',
    year: '2025',
    title: 'MetroVision',
    cat: ['ml'],
    context: { fr: 'Projet ISEP', en: 'ISEP project' },
    summary: {
      fr: 'Reconnaître la ligne de métro parisien sur une photo : détection des pictogrammes (Hough, HOG) puis classification (CNN + k-NN).',
      en: 'Recognising the Paris metro line in a photo: pictogram detection (Hough, HOG) then classification (CNN + k-NN).',
    },
    highlights: [
      { fr: 'Pipeline de vision classique combiné à un CNN.', en: 'Classical vision pipeline combined with a CNN.' },
      { fr: 'Démo Gradio publiée sur Hugging Face Spaces.', en: 'Gradio demo published on Hugging Face Spaces.' },
    ],
    figure: { value: '0,94', label: { fr: 'F1', en: 'F1' } },
    track: ['Photo', 'Hough', 'HOG', 'CNN + k-NN', 'Ligne'],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'scikit-learn', 'Gradio'],
    github: 'https://github.com/LenouvelLouis/MetroVision',
    link: 'https://huggingface.co/spaces/LenouvelLouisDev/MetroVision',
  },
  {
    slug: 'california-housing',
    code: '10',
    color: '#8d6e3f',
    ink: '#ffffff',
    year: '2025',
    title: 'California Housing API',
    cat: ['ml'],
    context: { fr: 'Projet perso', en: 'Personal project' },
    summary: {
      fr: 'Un modèle de régression qui estime le prix médian des logements en Californie, servi par une app Gradio sur Hugging Face Spaces.',
      en: 'A regression model estimating median house prices in California, served by a Gradio app on Hugging Face Spaces.',
    },
    highlights: [
      { fr: 'Notebook d’exploration et d’entraînement, puis app déployée.', en: 'Exploration and training notebook, then a deployed app.' },
    ],
    track: ['Données', 'Régression', 'Gradio', 'HF Spaces'],
    stack: ['Python', 'scikit-learn', 'Gradio', 'Hugging Face'],
    github: 'https://github.com/LenouvelLouis/Housing-Prices',
    link: 'https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API',
  },
  {
    slug: 'bee-or-not-to-bee',
    code: '11',
    color: '#ca8a04',
    ink: '#14181f',
    year: '2025',
    title: 'Bee or Not to Bee',
    cat: ['ml'],
    context: { fr: "Projet ISEP, en équipe", en: 'ISEP team project' },
    summary: {
      fr: "Classer des insectes (abeille, bourdon ou autre) à partir d'images segmentées.",
      en: 'Classifying insects (bee, bumblebee or other) from segmented images.',
    },
    highlights: [
      { fr: 'Extraction de features sur images segmentées, puis classification.', en: 'Feature extraction on segmented images, then classification.' },
    ],
    track: ['Images', 'Segmentation', 'Features', 'Classif.'],
    stack: ['Python', 'scikit-learn', 'OpenCV'],
    github: 'https://github.com/GabrielEstevesDev/Bee-or-Not-to-Bee--Machine-Learning-Based-Bee-Classification',
  },
  {
    slug: 'ai-vr-learning',
    code: '12',
    color: '#6b7280',
    ink: '#ffffff',
    year: '2025',
    title: 'AI VR Learning',
    cat: ['web'],
    context: { fr: 'Projet ISEP', en: 'ISEP project' },
    summary: {
      fr: "Une application VR éducative pour Meta Quest 3S qui mêle IA et apprentissage immersif.",
      en: 'An educational VR app for Meta Quest 3S mixing AI and immersive learning.',
    },
    highlights: [
      { fr: 'Unity, XR Interaction Toolkit, passthrough et reconnaissance IA dans la scène.', en: 'Unity, XR Interaction Toolkit, passthrough and AI recognition in the scene.' },
    ],
    track: ['Quest 3S', 'Unity', 'IA', 'Scène'],
    stack: ['Unity', 'C#', 'XR Toolkit', 'Meta Quest'],
    github: 'https://github.com/LenouvelLouis/AI-VR-Learning',
  },
  {
    slug: 'events-it',
    code: '13',
    color: '#a855f7',
    ink: '#ffffff',
    year: '2023',
    title: 'Events-It',
    cat: ['web'],
    context: { fr: 'Projet de BUT', en: 'University project' },
    summary: {
      fr: 'Une application web PHP en MVC pour gérer des cinémas, des films et des séances, avec comptes utilisateurs et rôles.',
      en: 'A PHP MVC web app to manage cinemas, films and screenings, with user accounts and roles.',
    },
    highlights: [{ fr: 'Architecture MVC écrite à la main, sans framework.', en: 'Hand-written MVC architecture, no framework.' }],
    track: ['Routeur', 'Contrôleurs', 'Modèles', 'Vues'],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/LenouvelLouis/Events-It',
  },
  {
    slug: 'portefeuille-financier',
    code: '14',
    color: '#0f766e',
    ink: '#ffffff',
    year: '2023',
    title: 'Portefeuille financier',
    cat: ['web'],
    context: { fr: 'Projet ISEP', en: 'ISEP project' },
    summary: {
      fr: 'Une application JavaFX de gestion de portefeuilles : comptes, fonds, transactions et visualisation de la performance.',
      en: 'A JavaFX portfolio manager: accounts, funds, transactions and performance charts.',
    },
    highlights: [{ fr: 'Interface JavaFX et persistance des données.', en: 'JavaFX interface and data persistence.' }],
    track: ['Comptes', 'Transactions', 'Graphiques'],
    stack: ['Java', 'JavaFX'],
    github: 'https://github.com/LenouvelLouis/Portefeuille-financier-ISEP',
  },
]

export const archives: { title: string; desc: T; stack: string; github: string }[] = [
  { title: 'Serveur Médiathèque', desc: { fr: 'Serveur Java et client console : abonnés, emprunts, restrictions d’âge, MySQL.', en: 'Java server and console client: members, loans, age limits, MySQL.' }, stack: 'Java', github: 'https://github.com/LenouvelLouis/Serveur-Mediatheque' },
  { title: 'eContact', desc: { fr: 'Gestion de contacts avec Symfony.', en: 'Contact manager built with Symfony.' }, stack: 'PHP / Symfony', github: 'https://github.com/LenouvelLouis/econtactSymfony' },
  { title: 'Hex', desc: { fr: 'Le jeu de Hex, deuxième année de BUT.', en: 'The game of Hex, second year of university.' }, stack: 'Java', github: 'https://github.com/LenouvelLouis/Hex' },
  { title: '6 qui prend', desc: { fr: 'Le jeu de cartes, projet universitaire.', en: 'The card game, university project.' }, stack: 'Java', github: 'https://github.com/LenouvelLouis/6-qui-prend-Java' },
  { title: 'Démineur', desc: { fr: 'Deux fois : en C++ puis en VB.NET.', en: 'Twice: in C++ then in VB.NET.' }, stack: 'C++ / VB.NET', github: 'https://github.com/LenouvelLouis/Demineur-CPP' },
  { title: 'Site du Beauvaisis', desc: { fr: "Refonte du site de l'agglomération, projet universitaire.", en: 'Redesign of a local authority website, university project.' }, stack: 'HTML / CSS', github: 'https://github.com/LenouvelLouis/WebSite-Beauvais' },
]

export const byslug = (slug: string) => projects.find((p) => p.slug === slug)
