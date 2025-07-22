import ResumeContent from './ResumeComponents/ResumeContent';
import DownloadBtn from './DownloadBtn/DownloadBtn';
import ResumeStyles from './ResumeStyles.module.scss';

export default function Resume() {
    return(
        <div className={ResumeStyles['resume-wrapper']}>
            <ResumeContent />
            <DownloadBtn />
        </div>
    )
}