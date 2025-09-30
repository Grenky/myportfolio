import ArrowBtnStyle from './styles/ArrowBtnStyle.module.scss';


export default function ArrowBtn() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return(
        <button className={ArrowBtnStyle.btn} onClick={handleScrollTop}></button>
    )
}