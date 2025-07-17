import sharedStyles from './styles/sharedStyles.module.scss';
import { NavLink } from 'react-router-dom';

export default function NavBlock() {
    return(
        <nav className={sharedStyles['header-nav']}>
            <ul className={sharedStyles['nav-container']}>
                <li><NavLink to='/'>About Me</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>
            </ul>
        </nav>
    );
}