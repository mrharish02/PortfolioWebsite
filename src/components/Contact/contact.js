import React, { useRef } from 'react';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8afxvwi', 'template_pppjqzo', form.current, 'n2lfrULSC17JNs07yBrIU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">
                Contact Me
            </h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form ref={form} onSubmit={sendEmail} action="" className="contactForm">
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="text" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            </form>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={TwitterIcon} alt="Twitter" className="link" />
                <img src={YoutubeIcon} alt="Youtube" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
            </div>
        </div>
    </section>
  )
}

export default Contact