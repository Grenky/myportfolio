import Header from "./Header"
import '../styles/Contact.scss';
import linkedinImg from '../img/linkedin.png';
import telegramImg from '../img/telegram.png';
import instagramImg from '../img/instagram.png';
import gmailImg from '../img/gmail.png';

export default function Contact() {
    return(
        <div className="contact-wrapper">
            <Header />
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="social-container">
                    <div className="linkedin">
                        <img src={linkedinImg}  alt="LinkedIn"/>
                    </div>
                    <div className="telegram">
                        <img src={telegramImg}  alt="Telegram"/>
                    </div>
                    <div className="instagram">
                    <img src={instagramImg} alt="Instagram" />
                    </div>
                    <div className="gmail">
                    <img src={gmailImg} alt="Gmail" />
                    </div>
                </div>
                <div className="wmassage-container">
                    <form>
                        <label>Email:
                            <input className="email" type="text" name="email" />
                            </label>
                        <label>Name:
                            <input className="name" type="text" name="name" />
                        </label>
                            <label>Message:
                                <textarea className="message" type="text" name="message"  rows="4" cols="50" />
                        </label>
                            <button className="contact-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}