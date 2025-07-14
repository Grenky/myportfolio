import { useEffect } from 'react';
import ModalStyles from './styles/ModalStyles.module.scss';


export default function Modal({skill, onClose}) {

    useEffect(() => {
        if(skill) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [skill]);


    if(!skill) return null;

    return(
        <div className={ModalStyles['modal-overlay']}
         onClick={onClose}
         role='dialog'
         aria-modal = 'true'
         >
            <div className={ModalStyles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <button className={ModalStyles['close-button']} onClick={onClose}>×</button>
                <img src={skill.src} alt={skill.alt} />
                <h3>{skill.alt}</h3>
                <p>{skill.description}</p>
            </div>
        </div>
    )
}