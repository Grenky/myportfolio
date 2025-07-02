import HomeConStyles from './HomeContent.module.scss';
import MyImg from '../../../../assets/images/image.png';

export default function HomeContent() {
    return(
        <div className={HomeConStyles.wrapper}>
            <div className={HomeConStyles['img-box']}>
                <img className={HomeConStyles.myImg} src={MyImg} alt={MyImg}></img>
            </div>
            <div className={HomeConStyles.text}>
                <p className={HomeConStyles['first-text']}>&lt;span&gt; Hi, I'm Dmitro &lt;/span&gt;</p>
                <h1>Junior <span>{"{ FRONTEND }"}</span>Web Developer</h1>
                <p>
                    &lt;p&gt;On my way to improve myself in advanced technologies such as ReactJS, NodeJS, and TypeScript. 
                    My knowledge will help you create new web products that will help people realize their plans and dreams.&lt;/p&gt;
                </p>              
            </div>
        </div>
    )
}