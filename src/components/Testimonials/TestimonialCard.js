// src/components/TestimonialCard.js
import React from 'react';
import './TestimonialCard.modules.css';

function TestimonialCard({ name, title, image, text }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">Lorem ipsum dolor sit amet consectetur. Massa consequat in sed id eget. Fermentum adipiscing sapien ultricies sem urna leo vel lorem. Proin ac posuere quam in. Feugiat amet arcu velit nibh.Massa consequat in sed id eget.</p>
      <div className="author-info">
        <img src="../imgs/profilpp.png" alt="" className="author-image" />
        <div className="author-details">
          <h4 className="author-name">Turgay Gasimli</h4>
          <p className="author-title">Product Designer</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
