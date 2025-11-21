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
                    "Application de reconnaissance automatique des lignes de métro parisien à partir d’images. Détection de pictogrammes, extraction de caractéristiques visuelles et classification intelligente pour déterminer la ligne correspondante.",
                tags: ["Python", "Vision par Ordinateur", "Machine Learning", "OpenCV"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/MetroVision",
                github: "https://github.com/LenouvelLouis/MetroVision",
                viewText: "Voir le projet →",
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
                    "Automatic recognition system for Paris metro lines based on images. Detects signage pictograms, extracts visual features, and classifies them to predict the correct metro line.",
                tags: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
                year: "2025",
                link: "https://huggingface.co/spaces/LenouvelLouisDev/MetroVision",
                github: "https://github.com/LenouvelLouis/MetroVision",
                viewText: "View project →",
            }
        ],
    }

    const projects = projectsContent[language]
    const title = language === "fr" ? "Projets" : "Projects"

    return (
        <section className="px-4 md:px-12 py-12 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{title}</h3>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg border border-border group h-64 md:h-80 hover:shadow-lg transition-shadow"
                    >
                        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors z-10" />

                        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-20">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                                <h4 className="text-lg md:text-xl font-semibold text-white">{project.title}</h4>
                                <span className="text-xs md:text-sm text-gray-200 whitespace-nowrap">{project.year}</span>
                            </div>
                            <p className="text-gray-100 mb-4 text-sm md:text-base line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 md:px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm border border-white/30"
                                    >
                                  {tag}
                                </span>
                                ))}
                            </div>
                            <div className="flex gap-3 items-center flex-wrap">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-xs md:text-sm font-medium"
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
                                        className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-xs md:text-sm font-medium"
                                    >
                                        <Github size={16} />
                                        {language === "fr" ? "Code" : "Code"}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
