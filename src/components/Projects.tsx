import { useLanguage } from "./LanguageContext"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
    const { language } = useLanguage()

    const projectsContent = {
        fr: [
            {
                title: "California Housing API",
                description:
                    "Application Gradio pour prédire la valeur médiane des maisons basée sur les caractéristiques. Déployée sur HuggingFace Spaces avec Machine Learning.",
                tags: ["Python", "Machine Learning", "Gradio", "HuggingFace"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API",
                github: "https://github.com/LenouvelLouis/Housing-Prices",
                viewText: "Voir le projet →",
            },
            {
                title: "MetroVision",
                description:
                        "Reconnaissance automatique des lignes de métro parisien à partir d’images grâce à la détection et classification de pictogrammes.",
                tags: ["Python", "Vision par Ordinateur", "Machine Learning", "OpenCV"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/MetroVision",
                github: "https://github.com/LenouvelLouis/MetroVision",
                viewText: "Voir le projet →",
            },
            {
                title: "Bee or Not to Bee",
                description:
                    "Image-based insect classifier (bees, bumblebees or others) using machine learning on segmented data.",
                tags: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "Data Science"],
                year: "2025",
                github: "https://github.com/GabrielEstevesDev/Bee-or-Not-to-Bee--Machine-Learning-Based-Bee-Classification",
                viewText: "View project →",
                image: "/public/projects/bee-or-not-to-bee.jpg",
            },
            {
                title: "AI VR Learning",
                description:
                    "Platforme VR interactive supportée par IA pour l’apprentissage immersif et adaptatif dans les environnements virtuels.",
                tags: ["Unity", "C#", "VR", "Machine Learning", "Education"],
                year: "2025",
                github: "https://github.com/LenouvelLouis/AI-VR-Learning",
                viewText: "Voir le projet →",
                image: "/public/projects/ai-vr-learning.jpg",
            },
            {
                title: "Events-It",
                description:
                    "Application de gestion et d’analyse d’événements : création, suivi et visualisation des données en temps réel.",
                tags: ["PHP", "HTML", "CSS", "API", "Web","MVC"],
                year: "2024",
                github: "https://github.com/LenouvelLouis/Events-It",
                viewText: "Voir le projet →",
                image: "/public/projects/events-it.jpg",
            },
            {
                title: "Portefeuille Financier ISEP",
                description:
                    "Application de suivi et d’analyse de portefeuille d’investissement : visualisation, indicateurs financiers et prise de décision.",
                tags: ["Python", "Finance", "Data-visualisation", "Investissement"],
                year: "2024",
                github: "https://github.com/LenouvelLouis/Portefeuille-financier-ISEP",
                viewText: "Voir le projet →",
                image: "/public/projects/portefeuille-financier-isep.jpg",
            }
        ],
        en: [
            {
                title: "California Housing API",
                description:
                    "Gradio application to predict median house values based on features. Deployed on HuggingFace Spaces with Machine Learning.",
                tags: ["Python", "Machine Learning", "Gradio", "HuggingFace"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/California-Housing-API",
                github: "https://github.com/LenouvelLouis/Housing-Prices",
                viewText: "View project →",
            },
            {
                title: "MetroVision",
                description:
                    "Automatic recognition of Paris metro lines using image-based pictogram detection and classification.",
                tags: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/MetroVision",
                github: "https://github.com/LenouvelLouis/MetroVision",
                viewText: "View project →",
            },
            {
                title: "Bee or Not to Bee",
                description:
                    "Classificateur d’insectes (abeilles, bourdons ou autres) basé sur le machine learning à partir d’images segmentées.",
                tags: ["Python", "Machine Learning", "Deep Learning", "Vision", "Data Science"],
                year: "2025",
                github: "https://github.com/GabrielEstevesDev/Bee-or-Not-to-Bee--Machine-Learning-Based-Bee-Classification",
                viewText: "Voir le projet →",
                image: "/public/projects/bee-or-not-to-bee.jpg",
            },
            {
                title: "AI VR Learning",
                description:
                    "AI-driven VR platform for immersive and adaptive learning experiences in virtual environments.",
                tags: ["Unity", "C#", "VR", "Machine Learning", "Education"],
                year: "2025",
                github: "https://github.com/LenouvelLouis/AI-VR-Learning",
                viewText: "View project →",
                image: "/public/projects/ai-vr-learning.jpg",
            },
            {
                title: "Events-It",
                description:
                    "Event management and analytics application: create, track and visualize event data in real time.",
                tags: ["PHP", "HTML", "CSS", "API", "Web","MVC"],
                year: "2024",
                github: "https://github.com/LenouvelLouis/Events-It",
                viewText: "View project →",
                image: "/public/projects/events-it.jpg",
            },
            {
                title: "ISEP Financial Portfolio",
                description:
                    "Investment portfolio tracking and analysis application: dashboard, financial metrics and decision support.",
                tags: ["Python", "Finance", "Data-visualization", "Investment"],
                year: "2024",
                github: "https://github.com/LenouvelLouis/Portefeuille-financier-ISEP",
                viewText: "View project →",
                image: "/public/projects/portefeuille-financier-isep.jpg",
            }
        ],
    }

    const projects = projectsContent[language]
    const title = language === "fr" ? "Projets" : "Projects"

    return (
        <section className="px-12 py-12">
            <h3 className="text-3xl font-bold text-foreground mb-8">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  {tag}
                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 items-center">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                                >
                                    <ExternalLink size={16} />
                                    {project.viewText}
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                                >
                                    <Github size={16} />
                                    {language === 'fr' ? 'Code' : 'Code'}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
