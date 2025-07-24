import ContactsContentStyle from './ContactsContentStyle.module.scss'
import useContactForm from '../../../hooks/useContactForm';


export default function ContactsContent() {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useContactForm();

    const onFormSubmit = (FormData) => {
        console.log('Form submitted', FormData);

    }

    
    return(
        <section  className={ContactsContentStyle['contacts-content-wrapper']}>
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
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={ContactsContentStyle.error}>{errors.name}</span>}
                        <label htmlFor="subject" className={ContactsContentStyle['visually-hidden']}>Subject</label>     
                        <input 
                            id="name"  
                            name="subject"
                            type="text"
                            placeholder="The reason for your message"
                            value={values.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <span className={ContactsContentStyle.error}>{errors.subject}</span>}
                        <label htmlFor="message" className={ContactsContentStyle['visually-hidden']}>Message</label>
                        <textarea   
                            name="message"
                            placeholder="Your message"
                            rows="5"
                            value={values.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className={ContactsContentStyle.error}>{errors.message}</span>}
                        <button type="submit">Send</button>
                    </form>
                </div>   
        </section >
    )
}