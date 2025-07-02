import styles from './styles/headerStyle.module.scss';
import linkedin from '../../assets/images/linkedin-logo.png';
import telegram from '../../assets/images/telegram.png';
import gmail from '../../assets/images/gmail.png';

export default function Header() {
    return(
        <div className={styles['header-wrapper']}>
            <div className={styles['corner-curve']}></div>
            <div className={styles['logo-wrapper']}>
                <span className={styles['logo-icon']}>{"< >"}</span>
                <span className={styles['logo-text']}>Dmitro.Dev</span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles['nav-container']}>
                    <li><a href='/'>About Me</a></li>
                    <li><a href='/'>Resume</a></li>
                    <li><a href='/'>Contacts</a></li>
                </ul>
            </nav>
            <div className={styles['social-box']}>
                <a href='https://www.linkedin.com/in/dmitry-zaiets-28a524215/' target='_blank' rel='noopener noreferrer'>
                    <img className={styles.linkedin} src={linkedin} alt='linkedin'/>
                </a>
                <a href='https://t.me/demosoft1' target='_blank' rel='noopener noreferrer'>
                    <img className={styles.telegram} src={telegram} alt='telegram'/>
                </a>
                <a href='mailto:demosoft61@gmail.com'>
                    <img className={styles.gmail} src={gmail} alt='gmail'/>
                </a>
            </div>
        </div>
    )
}