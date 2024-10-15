import React from 'react';
import './Hero.modules.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content" id='text2'>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos, voluptatem consectetur accusamus laborum totam adipisci eligendi dolores soluta earum.
        </p>
        <button className="hero-btn">Daha Ətraflı</button>
      </div>
      <div className="hero-image" id='img2' >
        <img src="../imgs/Rectangle 2.svg" alt="Hero" />
      </div>

      <div className="hero-image" id='img1'>
        <img src="../imgs/Rectangle 2.svg" alt="Hero" />
      </div>

      <div className="hero-content" id='text1'>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos, voluptatem consectetur accusamus laborum totam adipisci eligendi dolores soluta earum.
        </p>
        <button className="hero-btn">Daha Ətraflı</button>
      </div>



    </section>
  );
};

export default Hero;
