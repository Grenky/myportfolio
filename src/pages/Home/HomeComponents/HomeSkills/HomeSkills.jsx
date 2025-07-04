import SkillsStyle from './HomeSkills.module.scss';


export default function HomeSkills() {
    return(
        <section className={SkillsStyle['skills-wrapper']}>
            <div className={SkillsStyle.content}>
                <div className={SkillsStyle['title-box']}>
                    <h2 className={SkillsStyle.title}>My Skills</h2>
                </div>
                <div className={SkillsStyle['skill-box']}></div>
            </div>
        </section>
    )
}