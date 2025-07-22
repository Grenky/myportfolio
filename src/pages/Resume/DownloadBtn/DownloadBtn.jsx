import DownloadBtnStyle from './DownloadBtnStyle.module.scss';


export default function DownloadBtn() {
    return(
        <a
        className={DownloadBtnStyle.downloadBtn}
        href="/CV_Dmitry Zaiets.pdf"
        download
        >
        Download CV
        </a>
    )
}