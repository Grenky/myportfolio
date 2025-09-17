import { Link } from 'react-router-dom';
import shaderStyles from './styles/sharedStyles.module.scss';


export default function LogoBlock() {
    return(
        <Link to="/" className={shaderStyles['header-logo']}>
            <span className={shaderStyles['header-logo-icon']}>{"< >"}</span>
            <span className={shaderStyles['header-logo-text']}>Dmytro.Dev</span>
        </Link>
    );
}