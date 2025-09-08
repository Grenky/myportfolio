import ContactsContentStyle from './ContactsContentStyle.module.scss'
import useContactForm from '../../../hooks/useContactForm';
import axios from 'axios';
import { useState } from 'react';


export default function ContactsContent() {

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        inputRefs,
        resetForm,
    } = useContactForm();

    const onFormSubmit = async (formValues) => {
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/send-email`,
                formValues,
                { headers: {"Content-Type": "application/json" } }
            );
        if(res.data.success) {
            setShowSuccessPopup(true);
            resetForm();
        } else {
            alert("Помилка при відправці листа");
        }
        } catch(error) {
            console.error("Axios error:", error);
            alert("Помилка при відправці листа")
        }   
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
                        
                        <label htmlFor="email" className={ContactsContentStyle['visually-hidden']}>Email</label>     
                        <input 
                            id="email"  
                            name="email"
                            type="text"
                            placeholder={errors.email || "Your Email"}
                            value={values.email}
                            onChange={handleChange}
                            className={errors.email ? ContactsContentStyle['input-error'] : ''}
                            aria-invalid={!!errors.email}
                            aria-describedby="error-email"
                            ref={inputRefs.email}
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