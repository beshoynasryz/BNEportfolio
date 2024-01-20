import React from 'react';
import './Contact.css'
import { FaGithub ,FaWhatsapp, FaLinkedinIn,FaFacebook} from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import { FiSend } from 'react-icons/fi';


const Contact = () => {
  return (
   <section className="contact section">
    <h2 className="section__title">
      <span>Contact</span> Me
    </h2>
            <div className="contact__container container grid">
              <div className="contact__data">

                <h3 className="contact__title">
                  Do not be shy!
                </h3>
                <p className="contact__description">
                  feel free to contact with me ,  i am always open to discussing new projects , creative ideas or opportunities to be part of your vision
                </p>
                <div className="contact__info">

                  <div className="info__item">
                    <IoMail className='info__icon'/>
                    <span className="info__title"> Mail me</span>
                    <h4 className="info__desc">beshoynasry0@gmail.com </h4>
                  </div>
                  <div className="info__item">
                    <FaWhatsapp className='info__icon'/>
                    <span className="info__title">Call me </span>
                    <h4 className="info__desc"> +201095604355 </h4>

                  </div>

                </div>
                <div className="contact__socials">
                  <a href="https://www.linkedin.com/in/beshoy-nasry-2a3627220/" target ="_blank" rel="noreferrer" className="contact__social-link"><FaLinkedinIn/> </a>
                  <a href="https://github.com/beshoynasryz" target ="_blank" rel="noreferrer" className="contact__social-link"><FaGithub/> </a>
                  <a href="https://www.facebook.com/BeshOoyN.Elia" target ="_blank" rel="noreferrer" className="contact__social-link"><FaFacebook/> </a>
                </div>

              </div>
              <form action="" className="contact__form">
                <div className="form__input-group">

                  <div className="form__input-div">
                    <input type="text" placeholder='Your name' className="form__control" />
                  </div>
                  <div className="form__input-div">
                    <input type="email" placeholder='your Email' className="form__control" />
                  </div>
                  <div className="form__input-div">
                    <input type="text" placeholder='your Subject' className="form__control" />
                  </div>
                  

                  

                </div>
                <div className="form__input-div">
                    <textarea placeholder='Your message' className="form__control textarea"></textarea>
                  </div>
                <button className="button">
                    Send Message
                    <span className="button__icon contact__button-icon">
                    <FiSend/>
                    </span>
                  </button>
              </form>

            </div>

   </section>

  );
};

export default Contact;