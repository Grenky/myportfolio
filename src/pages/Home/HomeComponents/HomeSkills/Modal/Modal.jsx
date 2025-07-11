
import ModalStyles from './styles/ModalStyles.module.scss';


export default function Modal({skill, onClose}) {

    if(!skill) return null;

    return(
        <div className={ModalStyles['modal-overlay']} onClick={onClose}>
            <div className={ModalStyles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <button className={ModalStyles['close-button']} onClick={onClose}>×</button>
                <img src={skill.src} alt={skill.alt} />
                <h3>{skill.alt}</h3>
                <p>{skill.description}</p>
            </div>
        </div>
    )
}