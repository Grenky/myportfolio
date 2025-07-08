import sharedStyles from './styles/sharedStyles.module.scss';
import linkedinIcon from '../../assets/images/linkedin-logo.png';
import telegramIcon  from '../../assets/images/telegram.png';
import gmailIcon from '../../assets/images/gmail.png';


export default function SocialBlock() {
    return(
            <div className={sharedStyles['header-social']}>
                <a href='https://www.linkedin.com/in/dmitry-zaiets-28a524215/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinIcon} alt='linkedin'/>
                </a>
                <a href='https://t.me/demosoft1' target='_blank' rel='noopener noreferrer'>
                    <img  src={telegramIcon} alt='telegram'/>
                </a>
                <a href='mailto:demosoft61@gmail.com'>
                    <img  src={gmailIcon} alt='gmail'/>
                </a>
            </div>
    );
}