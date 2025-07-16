import sharedStyles from './styles/sharedStyles.module.scss';


export default function NavBlock() {
    return(
        <nav className={sharedStyles['header-nav']}>
            <ul className={sharedStyles['nav-container']}>
                <li><a href='/'>About Me</a></li>
                <li><a href='/'>Resume</a></li>
                <li><a href='/'>Contacts</a></li>
            </ul>
        </nav>
    );
}