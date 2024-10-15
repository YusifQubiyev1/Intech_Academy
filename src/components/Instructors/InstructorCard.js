import React from 'react';
import './InstructorCard.modules.css';

const InstructorCard = ({ name, title, image }) => {
  return (
    <div className="instructor-card">
      <img src={image} alt={name} className="instructor-image" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default InstructorCard;
