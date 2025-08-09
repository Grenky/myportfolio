import { useEffect, useState } from "react"
import brgStyles from './styles/burgerStyles.module.scss';
import classNames from 'classnames'
import { NavLink } from "react-router-dom";


export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return(
        <div className={brgStyles['burger-wrapper']}>
            <button
                className={brgStyles['burger-button']}
                onClick={toggleMenu}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                aria-expanded = {isOpen}
            >
              {isOpen ? '✖' : '☰'}  
            </button>
            <nav className={classNames(brgStyles['nav-container'], { [brgStyles['nav-container--active']]: isOpen })}>
                <li><NavLink to="/" onClick={closeMenu}>About Me</NavLink></li>
                <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
                <li><NavLink to="/contacts" onClick={closeMenu}>Contacts</NavLink></li>
            </nav>
        </div>
    );
}