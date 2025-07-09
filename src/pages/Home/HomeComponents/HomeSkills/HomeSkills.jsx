import {useEffect, useRef, useState} from 'react';
import SkillsStyle from './HomeSkills.module.scss';

import jsImg from '../../../../assets/images/javascript-logo-javascript-icon-transparent-free-png.webp';
import htmlImg from '../../../../assets/images/Screenshot 2025-07-07 143727.png';
import cssImg from '../../../../assets/images/Screenshot 2025-07-07 143801.png';
import reactImg from '../../../../assets/images/Screenshot 2025-07-07 143841.png';
import reduxImg from '../../../../assets/images/Screenshot 2025-07-07 143900.png';
import nodeImg from '../../../../assets/images/Screenshot 2025-07-07 150601.png';
import sqlImg from '../../../../assets/images/Screenshot 2025-07-07 144221.png';
import cypressImg from '../../../../assets/images/cypress-icon-pg9bdlubveoefqouilbg.webp';
import mochajsImg from '../../../../assets/images/Screenshot 2025-07-07 152118.png';
import redmineImg from '../../../../assets/images/Screenshot 2025-07-07 144058.png';
import asanaImg from '../../../../assets/images/Screenshot 2025-07-07 144115.png';
import trelloImg from '../../../../assets/images/Trello_icon-icons.webp';
import jiraImg from '../../../../assets/images/jira.jpeg';
import figmaImg from '../../../../assets/images/Screenshot 2025-07-07 153530.png';


const skills = [
  { src: jsImg, alt: 'JavaScript' },
  { src: htmlImg, alt: 'HTML' },
  { src: cssImg, alt: 'CSS' },
  { src: reactImg, alt: 'React.js' },
  { src: reduxImg, alt: 'Redux' },
  { src: nodeImg, alt: 'Node.js' },
  { src: sqlImg, alt: 'SQL' },
  { src: cypressImg, alt: 'Cypress' },
  { src: mochajsImg, alt: 'Mocha.js' },
  { src: redmineImg, alt: 'Redmine' },
  { src: asanaImg, alt: 'Asana' },
  { src: trelloImg, alt: 'Trello' },
  { src: jiraImg, alt: 'Jira' },
  { src: figmaImg, alt: 'Figma' },
];

export default function HomeSkills() {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>{
        const element = sectionRef.current;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if(entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target)
            }
        },
        {
            threshold: 0.5,
        }
    );

        if(sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if(element) observer.unobserve(element);
        };
    }, []);
    


    return(
        <section className={`${SkillsStyle['skills-wrapper']} ${isVisible ? SkillsStyle.visible : ''}`} ref={sectionRef}>

            <div className={SkillsStyle.content}>
                <div className={SkillsStyle['title-box']}>
                    <h2 className={SkillsStyle.title}>My Skills</h2>
                </div>
                <div className={SkillsStyle['skill-box']}>
                    {skills.map((skill, index) => (
                        <figure key={index} className={SkillsStyle['skill-item']}>
                            <img src={skill.src} alt={`${skill.alt} logo`} loading="lazy"/>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}