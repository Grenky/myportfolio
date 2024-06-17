import React, { useRef } from "react";
import Header from "./Header"
import '../styles/Contact.scss';
import linkedinImg from '../img/linkedin.png';
import telegramImg from '../img/telegram.png';
import instagramImg from '../img/instagram.png';
import gmailImg from '../img/gmail.png';
import emailjs from '@emailjs/browser';

export default function Contact() {



    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ubtyvpx', 'template_djoysxo', form.current, {
          publicKey: 'GS-qjlGszl343xwJ1',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return(
        <div className="contact-wrapper">
            <Header />
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="social-container">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/dmitry-zaiets-28a524215/" target="blank">
                            <img src={linkedinImg}  alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="telegram">
                        <a href="https://t.me/demosoft1" target="blank">
                            <img src={telegramImg}  alt="Telegram"/>
                        </a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/clo.ownq/" target="blank">
                            <img src={instagramImg} alt="Instagram" />
                        </a>
                    </div>
                    <div className="gmail">
                        <a href="mailto:demosoft61@gmail.com" >
                            <img src={gmailImg} alt="Gmail" />
                        </a>
                    </div>
                </div>
                <div className="wmassage-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>
                            <input className="email" type="email" name="user_email"  placeholder="Email"/>
                            </label>
                        <label>
                            <input className="name" type="text" name="user_name" placeholder="Name"/>
                        </label>
                            <label>
                                <textarea className="message" type="text" name="message"  rows="4" cols="50" placeholder="writer your message "/>
                        </label>
                            <button className="contact-btn" value="Send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}