import React from 'react';
import './Contact.modules.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <img src="../imgs/message-chat-square.svg" alt="contact-icon" />
        <h2>Bizimlə əlaqə</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Arcu adipiscing felis velit ante.
           Ut enim ad minima veniam, quis nostrum exercitationem ullam.</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <i className="contact-icon fas fa-phone-alt"></i>
          <h3>Əlaqə nömrəsi</h3>
          <p>Mon-Fri from 9am to 6pm.</p>
          <p className="contact-detail">+012 343 23 236</p>
        </div>

        <div className="contact-item">
          <i className="contact-icon fas fa-envelope"></i>
          <h3>Email</h3>
          <p>Bizim mehriban komandamız kömək etmək üçün buradadır.</p>
          <p className="contact-detail">intech@gmail.com</p>
        </div>

        <div className="contact-item">
          <i className="contact-icon fas fa-share-alt"></i>
          <h3>Sosial media</h3>
          <p>Bizi sosial mediada izləyin</p>
          <div className="social-icons">
            <a href="https://x.com/?lang=tr"><i className="fab fa-twitter"></i></a>
            <a href="https://tr.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
