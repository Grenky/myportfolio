import HomeConStyles from './HomeContent.module.scss';
import MyImg from '../../../../assets/images/image.png';
import { useEffect, useState } from 'react';




export default function HomeContent() {

const fullText = `<span class="tag">&lt;p&gt;</span> On my way to improve myself in advanced technologies such as <span class="tag">ReactJS, NodeJS, and TypeScript.</span> My knowledge will help you create new web products that will help people realize their plans and dreams.<span class="tag"> &lt;/p&gt;</span>`;
const [displayedText, setDisplayedText] = useState('');
const [showeCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if(i < fullText.length) {
                setDisplayedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval)
                setTimeout(() => setShowCursor(false), 1000);
            }        
        }, 15);
        return () => clearInterval(interval); 
    }, [fullText]);


    return(
        <section  className={HomeConStyles.wrapper}>
            <div className={HomeConStyles['img-box']}>
                <img className={HomeConStyles.myImg} src={MyImg} alt={MyImg}></img>
            </div>
            <article className={HomeConStyles.text}>
                <p className={HomeConStyles['first-text']}>
                    <span className={HomeConStyles.tag}>&lt;span&gt;&nbsp; </span>
                        Hi, I'm Dmytro
                    <span className={HomeConStyles.tag}>&nbsp;&lt;span&gt;</span> 
                </p>
                <h1 className={HomeConStyles.title}>Junior <span className={HomeConStyles['title-tag']}>{"{ Frontend }"}</span> Web Developer</h1>
                <p className={HomeConStyles['last-text']}>
                    <span  dangerouslySetInnerHTML={{ __html: displayedText }} />
                    {showeCursor && <span className={HomeConStyles.cursor}></span>}
                </p>
                
                                 
            </article>
        </section >
    )
}