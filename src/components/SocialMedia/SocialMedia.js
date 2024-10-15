// src/components/SocialMedia.js
import React from 'react';
import './SocialMedia.modules.css';

const SocialMedia = () => {
  return (
    <div className='SocialMediaCss'>
      <section className="social-media">
      <h2>Bizi sosial mediada izləyin</h2>
      <p>Akademiyada dizayn ixtisasları beynəlxalq sertifikatlara malik instruktorlar tərəfindən tədris olunur.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com">
        <img src='../imgs/Socialicon.png' alt=''/>
        </a>
        <a href="https://www.instagram.com">
        <img src='../imgs/Group.png' alt=''/>
        </a>
        <a href="https://www.linkedin.com">
        <img src='../imgs/Socialicon (1).png' alt=''/>
        </a>
        <a href="https://www.twitter.com">
        <img src='../imgs/Social icon (2).png' alt=''/>
        </a>
      </div>
    </section>
    </div>
  );
};

export default SocialMedia;
