import shaderStyles from './styles/sharedStyles.module.scss';


export default function LogoBlock() {
    return(
        <div className={shaderStyles['header-logo']}>
            <span className={shaderStyles['header-logo-icon']}>{"< >"}</span>
            <span className={shaderStyles['header-logo-text']}>Dmitro.Dev</span>
        </div>
    );
}