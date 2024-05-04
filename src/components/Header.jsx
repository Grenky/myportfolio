import '../styles/Header.scss';


export default function Header() {
    return (
        <header className="header-wrapper">
            <img src='/img/logo-color.svg' className='App-logo' alt='logo'></img>
            <nav className='nav'>
                <ul className='nav-wrapper'>
                    <li>Home</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}