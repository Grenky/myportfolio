import ContactsContentStyle from './ContactsContentStyle.module.scss'
import useContactForm from '../../../hooks/useContactForm';
import { useState } from 'react';


export default function ContactsContent() {

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        inputRefs,
    } = useContactForm();

    const onFormSubmit = (FormData) => {
        console.log('Form submitted', FormData);
        setShowSuccessPopup(true);
        resetForm();
    };



    
    return(
        <section  className={ContactsContentStyle['contacts-content-wrapper']}>
            <div className={ContactsContentStyle['corner-curve']}></div>
            <h1 className={ContactsContentStyle['contacts-title']}>Contacts</h1>     
                <div className={ContactsContentStyle['form-container']}>
                    <div className={ContactsContentStyle['form-text']}>
                        <p>Here you can write me letter on email</p>
                        <p>Also you can ask me all what you need to know about me and my skills</p>
                        <p>You can also look at my Github for all my pet projects and more, there are several old versions of projects that I hope you will find interesting....</p>
                        <a className={ContactsContentStyle['github-link']} href="https://github.com/Grenky" target='_blank' rel="noreferrer">View on GitHub</a>
                    </div>
                    <form onSubmit={handleSubmit(onFormSubmit)} className={ContactsContentStyle.form}>
                        <label htmlFor="name" className={ContactsContentStyle['visually-hidden']}>Your Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={errors.name || "Your Name"}
                            value={values.name}
                            onChange={handleChange}
                            className={errors.name ? ContactsContentStyle['input-error'] : ''}
                            aria-invalid={!!errors.name}
                            aria-describedby="error-name"
                            ref={inputRefs.name}
                        />
                        
                        <label htmlFor="subject" className={ContactsContentStyle['visually-hidden']}>Subject</label>     
                        <input 
                            id="subject"  
                            name="subject"
                            type="text"
                            placeholder={errors.subject || "The reason for your message"}
                            value={values.subject}
                            onChange={handleChange}
                            className={errors.subject ? ContactsContentStyle['input-error'] : ''}
                            aria-invalid={!!errors.subject}
                            aria-describedby="error-subject"
                            ref={inputRefs.subject}
                        />
                        
                        <label htmlFor="message" className={ContactsContentStyle['visually-hidden']}>Message</label>
                        <textarea 
                            id="message"  
                            name="message"
                            placeholder={errors.message || "Your message"}
                            rows="5"
                            value={values.message}
                            onChange={handleChange}
                            className={errors.message ? ContactsContentStyle['input-error'] : ''}
                            aria-invalid={!!errors.message}
                            aria-describedby="error-message"
                            ref={inputRefs.message}
                        /> 
                        <button type="submit">Send</button>
                    </form>
                </div>
                {showSuccessPopup && (
                    <div className={ContactsContentStyle['popup-overlay']}>
                        <div className={ContactsContentStyle.popup}>
                            <p>Your message has been sent successfully!</p>
                            <button onClick={() => setShowSuccessPopup(false)}>Close</button>
                        </div>
                    </div>
                )}  
        </section >
    )
}