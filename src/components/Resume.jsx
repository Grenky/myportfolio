import Header from "./Header"
import '../styles/Resume.css';
import myImg from "../img/photo_2024-06-03_17-20-15.jpg";

export default function Resume() {
    return(
        <div className="resume-wrapper">
                <Header />
                <div className="resume-content">
                    <div className="resume-container">
                        <div className="resume-left">
                            <img className="myImg" src={myImg} alt="profile" />
                            
                            <div className="skills-box">
                                <h2>SKILLS</h2>
                                <p>JavaScript</p>
                                <p>HTML/CSS</p>
                                <p>React.js</p>
                                <p>Redux</p>
                                <p>Git</p>
                                <p>Node.js</p>
                                <p>SQL</p>
                                <p>Cypress</p>
                                <p>Mocha.js</p>
                                <p>Redmine, 
                                    Asana,
                                </p>
                                <p>Trello, 
                                    Jira,
                                </p>
                                <p>
                                    Figma, 
                                    Photoshop, 
                                </p>
                                <p>
                                    Open
                                    Server</p>
                            </div>

                            <div className="lang-box">
                                <h2>LANGUAGES</h2>
                                <p>English - B1</p>
                                <p>Ukrainian</p>
                                <p>German (beginner)</p>        
                            </div>

                            <div className="info-box">
                                <h2>INFO</h2>
                                <p>ADDRESS</p>
                                <p>Kyiv, Ukraine</p>
                                <p>EMAIL</p>
                                <a href="mailto:demosoft61@gmail.com">demosoft61@gmail.com</a>
                            </div>
                            
                            <div className="links-box">
                                <h2>LINKS</h2>
                                <a className="telegram" href="https://t.me/demosoft1">telegram</a>
                                <a className="linkedin" href="https://www.linkedin.com/in/dmitry-zaiets-28a524215/">linkedin</a>
                            </div>
                            
                           
                            

                        </div>
                        <div className="resume-right">
                          <h2>PROFILE</h2>  
                            <div>
                                Frontend developer with more than 2 years of
                                experience in software development. The technology
                                stack includes JavaScript and frameworks: NodeJS,
                                React. Self-motivated, proactive, punctual,
                                responsible, attentive to details person with a
                                creative approach to problem solving. Team player.
                            </div>
                            <h2>INDUSTRIES</h2>
                            <p>Information Services, E-commerce</p>
                            <h2>EMPLOYMENT HISTORY</h2>
                            <div>
                                <div>
                                    <span>Frontend developer, Pro Air (Germany)
                                    August 2020 - June 2021 </span>
                                    Rewrite website, create new features, fix bugs,
                                    support, update. Works on website stallegg.de
                                </div><br></br>
                                <div>
                                    <span>Software developer(React, Node), Sylject
                                    April 2022 - September 2022 </span>
                                    Creating new components and features for web
                                    applications using React, supporting some api using
                                    Node.js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}