import { useState } from "react"
import brgStyles from './styles/burgerStyles.module.scss';
import classNames from 'classnames';


export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);



    return(
        <div className={brgStyles['burger-wrapper']}>
            <button
                className={brgStyles['burger-button']}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
              ☰  
            </button>
            <nav className={classNames(brgStyles['nav-container'], { [brgStyles.active]: isOpen })}>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contacts</a></li>
            </nav>
        </div>
    );
}