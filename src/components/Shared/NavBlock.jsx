import shaderStyles from './styles/sharedStyles.module.scss';


export default function NavBlock() {
    return(
        <nav className={shaderStyles['header-nav']}>
            <ul className={shaderStyles['nav-container']}>
                <li><a href='/'>About Me</a></li>
                <li><a href='/'>Resume</a></li>
                <li><a href='/'>Contacts</a></li>
            </ul>
        </nav>
    );
}