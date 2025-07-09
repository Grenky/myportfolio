import FooterStyles from './styles/FooterStyles.module.scss';
import LogoBlock from '../Shared/LogoBlock';
import NavBlock from '../Shared/NavBlock';
import SocialBlock from '../Shared/SocialBlock';
import ArrowBtn from '../ArrowBtn/ArrowBtn';


export default function Footer() {
    return(
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.container}>
                <LogoBlock />
                <SocialBlock />
                <NavBlock />
                <p className={FooterStyles.copyright}>© {new Date().getFullYear()} Dmitro.Dev. All rights reserved.</p>
                <ArrowBtn />
            </div>
        </footer>
    )
}