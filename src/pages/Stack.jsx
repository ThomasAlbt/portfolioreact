import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import arrow from '../assets/svg/arrow.svg';

const stacks = {
    "Frontend": ["ReactJS", "HTML5", "CSS", "SCSS", "Tailwind", "JavaScript", "Vite", "VueJS"],
    "Backend": ["NodeJS", "PHP", "MySQL", "CRUD", "REST API"],
    "Outils": ["Git", "GitHub", "Vercel"],
    "Autres": [
        "Programmation Orientée Objet (POO)",
        "Utilisation d'API",
        "Mobile First",
        "Design UX/UI",
        "Bases de SEO",
        "Accessibilité",
        "Méthodes Agile",
        "Apprentissage autodidacte"
    ],
    "Soft skills": [
        "Adaptabilité",
        "Rigueur",
        "Capacité à apprendre vite",
        "Communication",
        "Esprit d'équipe"
    ]
};

const stackDescriptions = {
    "Frontend": "Maîtrise des technologies d’interface moderne pour créer des applications web dynamiques, responsives et esthétiques, en privilégiant l’expérience utilisateur.",
    "Backend": "Développement de la logique métier, gestion des bases de données et création d’API robustes pour assurer la fiabilité et la sécurité des applications.",
    "Outils": "Utilisation d’outils de versioning, de déploiement et de collaboration pour optimiser le workflow et garantir la qualité du code.",
    "Autres": "Compétences transversales essentielles pour concevoir des sites accessibles, performants, adaptés à tous les supports et optimisés pour le référencement.",
    "Soft skills": "Qualités humaines et professionnelles qui favorisent l’adaptabilité, la communication et le travail en équipe dans tout environnement de projet."
};

const Stack = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {Object.entries(stacks).map(([category, techs]) => (
                            <ul className="embla__slide" key={category}>
                                <li className="title">{category}</li>
                                <li className='desc'>{stackDescriptions[category]}</li>
                                <li className="techno">
                                    <ul className="techno-list">
                                        {techs.map((tech, i) => (
                                            <li key={i} className={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <button className="embla__prev" onClick={scrollPrev}>
                    <img src={arrow} alt="previous" />
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    <img className="arrow" src={arrow} alt="next" />
                </button>
                <h2>Compétences</h2>
            </div>
        </>
    );
};

export default Stack;