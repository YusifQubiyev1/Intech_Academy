import React from 'react';
import InstructorCard from './InstructorCard';
import './Instructors.modules.css';

const instructors = [
  {
    name: 'Aksa Huseynova',
    title: 'Front-end üzrə mütəxəssis',
    image: '../imgs/Rectangle 3.svg',
  },
  {
    name: 'Turgay Qasimli',
    title: 'QA Automation mütəxəssisi',
    image: '../imgs/Rectangle 4.svg',
  },
  {
    name: 'Nijat Qasimzada',
    title: 'IT business analytics mütəxəssisi',
    image: '../imgs/Rectangle 5.svg',
  },
  {
    name: 'Elxan Aliyev',
    title: 'Manual QA mütəxəssisi',
    image: '../imgs/Rectangle 6.svg',
  },
  {
    name: 'Nihad Aliyev',
    title: 'Product dizayn mütəxəssisi',
    image: '../imgs/Rectangle 3 (1).svg',
  },
  {
    name: 'Zulfugar Qasimov',
    title: 'Java mütəxəssisi',
    image: '../imgs/Rectangle 4.svg',
  },
  {
    name: 'Nigar Məmmədova',
    title: 'Python mütəxəssisi',
    image: '../imgs/Rectangle 8.svg',
  },
  {
    name: 'Ulviya Rahimova',
    title: 'Data science üzrə mütəxəssis',
    image: '../imgs/Rectangle 9.svg',
  },
];

const Instructors = () => {
  return (
    <section className="instructors-section">
      <div className='img-and-text'>
      <img src='../imgs/glasses-02.svg' alt='' />
      <div className='text'>
      <h2>İnstructorlarımız</h2>
      <p>Akademiyada dizayn ixtisasları beynəlxalq sertifikatlara malik instruktorlar tərəfindən tədris olunur.</p>
      </div>
      </div>
      <div className="instructors-grid">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            name={instructor.name}
            title={instructor.title}
            image={instructor.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Instructors;
