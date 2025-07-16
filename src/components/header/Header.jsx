import styles from './styles/headerStyle.module.scss';
import LogoBlock from '../Shared/LogoBlock';
import NavBlock from '../Shared/NavBlock';
import SocialBlock from '../Shared/SocialBlock';
import BurgerMenu from '../Shared/BurgerMenu';


export default function Header() {
    return(
        <div className={styles['header-wrapper']}>
            <div className={styles['corner-curve']}></div>
            <LogoBlock />
            <NavBlock />
            <SocialBlock />
            <BurgerMenu />
        </div>
    )
}