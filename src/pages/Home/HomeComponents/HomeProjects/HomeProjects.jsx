import { useRef, useEffect, useState } from 'react';
import HomeProjectsStyle from './HomeProjectsStyle.module.scss';


export default function HomeProjects() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);


    useEffect(() => {
        const handleScroll = () => {
            if(!containerRef.current) return;

            const container = containerRef.current;
            const children = container.children;
            const containerCenter = container.scrollLeft + container.offsetWidth / 2;

            let closesIndex = 0;
            let closesDistance = Infinity;

            Array.from(children).forEach((child, index) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2;
                const distance = Math.abs(containerCenter - childCenter);

                if(distance < closesDistance) {
                    closesDistance = distance;
                    closesIndex = index;
                }
            });
            setActiveIndex(closesIndex);
        };

        const container = containerRef.current;
        if(container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => {
            if(container) {
                container.removeEventListener('scroll', handleScroll)
            }
        };
    }, []);


    return(
        <div className={HomeProjectsStyle['projects-wrapper']} ref={containerRef}>
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className={`
                        ${HomeProjectsStyle['project-item']}
                        ${activeIndex === index ? HomeProjectsStyle['active'] : ''}
                        ${activeIndex - 1 === index ? HomeProjectsStyle['prev'] : ''}
                        ${activeIndex + 1 === index ? HomeProjectsStyle['next'] : ''}
                    `}
                >
                    Project {index + 1}
                </div>
            ))}
        </div>
    );
}