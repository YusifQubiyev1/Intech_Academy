// src/components/Testimonials.js
import React from 'react';
import './Testimonials.modules.css';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className='sorgu'>
      <img src='../imgs/graduation-hat-01.png' alt=''/>
      <div>
      <h2> Tələbərimizin rəyləri</h2>
      <p>Akademiyada dizayn ixtisasları beynəlxalq mütəxəssislər tərəfindən tədris olunur.</p>
      </div>
      </div>
      <div className="testimonial-cards">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
