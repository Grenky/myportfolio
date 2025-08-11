import ArrowBtnStyle from './styles/ArrowBtnStyle.module.scss';


export default function ArrowBtn() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return(
        <div className={ArrowBtnStyle.btn} onClick={handleScrollTop}></div>
    )
}