import { useState } from "react"
import brgStyles from './styles/burgerStyles.module.scss';
import classNames from 'classnames'
import { NavLink } from "react-router-dom";


export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);



    return(
        <div className={brgStyles['burger-wrapper']}>
            <button
                className={brgStyles['burger-button']}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded = {isOpen}
            >
              ☰  
            </button>
            <nav className={classNames(brgStyles['nav-container'], { [brgStyles.active]: isOpen })}>
                <li><NavLink to="/" onClick={closeMenu}>About Me</NavLink></li>
                <li><NavLink href="/resume" onClick={closeMenu}>Resume</NavLink></li>
                <li><NavLink href="/contacts" onClick={closeMenu}>Contacts</NavLink></li>
            </nav>
        </div>
    );
}