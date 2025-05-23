import { useCallback } from 'react';
import LIST from "../components/ProjectsList";
import useEmblaCarousel from 'embla-carousel-react';
import arrow from '../assets/svg/arrow.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
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
                            <div id='links-project'>
                                <li className='git'><a href={result.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="white"/></a></li>
                                <li id='link'>{result.link ? <a href={result.link} target='blank'>Regarder par vous même !</a> : null}</li>
                            </div>
                            <li className="time">{result.timeTook}</li>
                            <li className='desc'>{result.desc}</li>
                        </ul>
                    ))}
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}><img src={arrow} alt="previous" /></button>
            <button className="embla__next" onClick={scrollNext}><img className="arrow" src={arrow} alt="next"/></button>
            <h2>Projets</h2>
        </div>
    )
}

export default Project;