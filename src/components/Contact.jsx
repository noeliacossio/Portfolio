import React from 'react'
import "../styles/contact.css"
import {RiMailSendLine} from 'react-icons/ri'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_clfsb0e', 'template_q1vr3wt', form.current, 'JvDpm9VoxM-RndTxc')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
   

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Let's Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendLine className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>noeliacos8@gmail.com</h5>
            <a href='mailto:noeliacos8@gmail.com'>Send an email</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Noe Cossio</h5>
            <a href='http://m.me/noe.cossio.7'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>2995154543</h5>
            <a href='https://api.whatsapp.com/send?phone=+542995154543'>Send a whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Write you full name' required />
          <input type='email' name='email' placeholder='Write your email' required />
          <textarea name='message'rows='?' placeholder='Write your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
