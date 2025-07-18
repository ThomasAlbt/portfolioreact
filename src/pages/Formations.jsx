import { useCallback } from 'react';
import LIST from "../components/FormationList";
import useEmblaCarousel from 'embla-carousel-react';
import arrow from '../assets/svg/arrow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Formations = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {LIST.map((result, index) => (
                        <ul className="embla__slide" key={index}>
                            <li className="title">{result.title}</li>
                            <li className="techno">
                                <ul className="techno-list">
                                    {result.techno.map((string, index) => (
                                        <li key={index}>{string}</li>
                                    ))}
                                </ul>
                            </li>
                            <div id='school-infos'>
                                <li className="school">{result.school}</li>
                                <li className="time-formation">{result.duration}</li>
                            </div>
                            <li className='desc'>{result.desc}</li>
                            {result.link && (
                                <li className='cert-link'>
                                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                                        Voir la certification
                                    </a>
                                </li>
                            )}
                            {result.current ? <li id='warning'><FontAwesomeIcon icon={faTriangleExclamation} color="orange"/> Ceci est ma formation actuelle dont je recherche une alternance. <FontAwesomeIcon icon={faTriangleExclamation} color="orange"/></li> : null }
                        </ul>
                    ))}
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}><img src={arrow} alt="previous" /></button>
            <button className="embla__next" onClick={scrollNext}><img className="arrow" src={arrow} alt="next" /></button>
            <h2>Formations</h2>
        </div>
    )
}

export default Formations;