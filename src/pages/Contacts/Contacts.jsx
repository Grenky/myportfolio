import ContactsContent from './ContactsComponents/ContactsContent';
import ContactsStyle from './ContactsStyle.module.scss';


export default function Contacts() {
    return(
        <div className={ContactsStyle['contacts-wrapper']}>
            <ContactsContent />
        </div>
    )
}