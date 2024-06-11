import { Link } from 'react-router-dom';
import '../styles/Header.scss';


export default function Header() {
    return (
        <header className="header-wrapper">
            <Link to="/">
                <img src="../logo-color.svg" className='App-logo' alt='logo'/>
            </Link>
            <nav className='nav'>
                <ul className='nav-wrapper'>
                <li><Link to="/" className='frontpage'>FrontPage</Link></li>
                    <li><Link to="/Resume" className='resume'>Resume</Link></li>
                    <li><Link to="/Projects" className='projects'>Projects</Link></li>
                    <li><Link to="/Contact" className='contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}