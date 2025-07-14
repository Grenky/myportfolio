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

import Modal from './Modal/Modal';


const skills = [
  { src: jsImg,
    alt: 'JavaScript',
    description: `JavaScript is a programming language used to create interactive elements on web pages.
    Main purpose: 
    Adds dynamic behavior, user interaction, API work, animations, etc.` },
  { src: htmlImg,
    alt: 'HTML',
    description: `HTML (HyperText Markup Language) is a markup language used to create the structure of web pages.
    Main purpose: 
    Defines the structure and content of a web page.
    Describes elements: headings, paragraphs, lists, images, links, tables, etc.`
    },
  { src: cssImg,
    alt: 'CSS',
    description: `CSS (Cascading Style Sheets) is a style language used to style HTML elements.
    Main Purpose:
    Defines colors, fonts, padding, positioning, animations, and page responsiveness.`
    },
  { src: reactImg,
    alt: 'React.js',
    description: `React is a JavaScript library for creating user interfaces.
    Main purpose:
    Creating components, efficient rendering, and building dynamic single-page applications (SPAs).`
    },
  { src: reduxImg,
    alt: 'Redux',
    description: `Redux is a library for managing the state of JavaScript applications.
    Main purpose:
    Centralized data storage, predictable state updates, and easy data transfer between components.`
    },
  { src: nodeImg,
    alt: 'Node.js',
    description: `Node.js is a server-side JavaScript runtime built on the V8 engine.
    Main purpose:
    Backend application development, query processing, file, database, and API work.`
    },
  { src: sqlImg,
    alt: 'SQL',
    description: `SQL (Structured Query Language) is a query language for working with relational databases.
    Main purpose:
    Creating, reading, updating and deleting data in databases (CRUD operations).`
    },
  { src: cypressImg,
    alt: 'Cypress',
    description: `Cypress is a tool for end-to-end testing of web applications.
    Main purpose:
    Automatic testing of interfaces, checking user interaction with the UI in a real browser.`
    },
  { src: mochajsImg,
    alt: 'Mocha.js',
    description: `Mocha.js is a framework for testing JavaScript code.
    Main purpose:
    Writing unit and integration tests, organizing test structures, and running asynchronous code.`
    },
  { src: redmineImg,
    alt: 'Redmine',
    description: `Redmine is an open source project and task management system.
    Main purpose:
    Task scheduling, bug tracking, deadline control, and team collaboration.`
    },
  { src: asanaImg,
    alt: 'Asana',
    description: `Asana is an online project management and team collaboration platform.
    Main purpose:
    Planning tasks, tracking progress, organizing workflow in teams.`
    },
  { src: trelloImg,
    alt: 'Trello',
    description: `Trello is an online tool for managing tasks and projects.
    Built on the principle of a Kanban board: projects are divided into boards, where there are columns (for example: “To Do”, “In Progress”, “Done”) and cards (tasks)`
    },
  { src: jiraImg,
    alt: 'Jira',
    description: `Jira is a powerful project management system popular among IT teams, especially for software development.
    Developed by Atlassian.
    Suitable for working with Scrum, Kanban, Agile methodologies.`
  },
  { src: figmaImg,
    alt: 'Figma',
    description: `Figma is an online tool for interface design and prototyping.
    Works directly in the browser - no installation required.
    Suitable for UI/UX design, mobile and web applications.`
  },
];

export default function HomeSkills() {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

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



    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const closeModal = () => {
        setSelectedSkill(null);
    }
    


    return(
        <section className={`${SkillsStyle['skills-wrapper']} ${isVisible ? SkillsStyle.visible : ''}`} ref={sectionRef}>

            <div className={SkillsStyle.content}>
                <div className={SkillsStyle['title-box']}>
                    <h2 className={SkillsStyle.title}>My Skills</h2>
                </div>
                <div className={SkillsStyle['skill-box']}>
                    {skills.map((skill, index) => (
                        <figure 
                        key={index} 
                        className={SkillsStyle['skill-item']}
                        onClick={() => handleSkillClick(skill)}
                        >
                            <img src={skill.src} alt={`${skill.alt} logo`} loading="lazy"/>
                        </figure>
                    ))}
                    <Modal skill={selectedSkill} onClose={closeModal} />
                </div>
            </div>
        </section>
    )
}