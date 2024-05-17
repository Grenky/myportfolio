import { Link } from 'react-router-dom';
import '../styles/Header.scss';


export default function Header() {
    return (
        <header className="header-wrapper">
            <img src='/img/logo-color.svg' className='App-logo' alt='logo'></img>
            <nav className='nav'>
                <ul className='nav-wrapper'>
                    <Link to="/FrontPage" className='frontpage'>FrontPage</Link>
                    <Link to="/Resume" className='resume'>Resume</Link>
                    <Link to="/Projects" className='projects'>Projects</Link>
                    <Link to="/Contact" className='contact'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}