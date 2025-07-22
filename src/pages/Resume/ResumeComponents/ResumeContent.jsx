import ResumeContentStyle from './ResumeContentStyle.module.scss';


export default function Resume() {
    return(
        <div className={ResumeContentStyle['resume-content-wrapper']}>
            <div className={ResumeContentStyle['resume-title_box']}>
                <h1 className={ResumeContentStyle.title}>Resume</h1>
            </div>
            <div className={ResumeContentStyle['resume-content']}> 
                <div className={ResumeContentStyle['first-info']}>
                    <section>
                        <h3>PROFILE</h3>
                        <p>Frontend developer with more than 2 years of
                            experience in software development. The technology
                            stack includes <span className={ResumeContentStyle.tag}>JavaScript</span> and frameworks:<span className={ResumeContentStyle.tag}> NodeJS,
                            React.</span>  Self-motivated, proactive, punctual,
                            responsible, attentive to details person with a
                            creative approach to problem solving. Team player.
                        </p>
                    </section>
                    <section>
                        <h3>INDUSTRIES</h3>
                        <p>Information Services, E-commerce</p>
                    </section>
                    <section>
                        
                        <h3>EMPLOYMENT HISTORY</h3>
                        <p>Frontend developer, Pro Air (Germany)
                            <span className={ResumeContentStyle.tag2}><br/>August 2020 - June 2021<br/></span>
                            Rewrite website, create new features, fix bugs,
                            support, update. Works on website stallegg.de<br/><br/>
                            Software developer(React, Node), Sylject
                            <span className={ResumeContentStyle.tag2}><br/>April 2022 - September 2022<br/></span>
                            Creating new components and features for web
                            applications using React, supporting some api using
                            Node.js.<br/><br/>
                            <span className={ResumeContentStyle.tag2}>October 2022 – January 2025</span><br></br>
                            Working on freelance and creating new pet projects
                        </p>
                    </section>
                </div>
                <div className={ResumeContentStyle['second-info']}>
                    <section>
                        <h3>INFO</h3>
                        <p>Adress: Kyiv, Ukraine</p>
                        <p>Email: <a href="mailto:demosoft61@gmail.com">demosoft61@gmail.com</a></p>
                    </section>
                    <section>
                        <h3>LANGUAGES</h3>
                        <p>English - intermediate</p>
                        <p>Ukrainian - native</p>
                        <p>German - beginner</p>
                    </section>
                    <section>
                        <h3>LINKS</h3>
                        <a href='https://t.me/demosoft1' target='_blank' rel='noopener noreferrer'>Telegram</a>
                        <a href='https://www.linkedin.com/in/dmitry-zaiets-28a524215/' target='_blank' rel="noopener noreferrer">Linkedin</a>
                    </section>
                </div>
            </div>
        </div>
    )
}