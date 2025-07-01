import './styles/headerStyle.css';
import linkedin from '../../assets/images/linkedin-logo.png';
import telegram from '../../assets/images/telegram.png';
import gmail from '../../assets/images/gmail.png';

export default function Header() {
    return(
        <div className="header-wrapper">
            <div className='corner-curve'></div>
            <div className='logo-wrapper'>
                <span className='logo-icon'>{"< >"}</span>
                <span className='logo-text'>Dmitro.Dev</span>
            </div>
            <nav className='nav'>
                <ul className='nav-container'>
                    <li><a href='/'>About Me</a></li>
                    <li><a href='/'>Resume</a></li>
                    <li><a href='/'>Contacts</a></li>
                </ul>
            </nav>
            <div className='social-box'>
                <a href='https://www.linkedin.com/in/dmitry-zaiets-28a524215/' target='_blank' rel='noopener noreferrer'>
                    <img className='linkedin' src={linkedin} alt='linkedin'/>
                </a>
                <a href='https://t.me/demosoft1' target='_blank' rel='noopener noreferrer'>
                    <img className='telegram' src={telegram} alt='telegram'/>
                </a>
                <a href='mailto:demosoft61@gmail.com'>
                    <img className='gmail' src={gmail} alt='gmail'/>
                </a>
            </div>
        </div>
    )
}