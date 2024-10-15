import React from 'react';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ';
import SocialMedia from '../../components/SocialMedia';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Instructors from '../../components/Instructors/Instructors';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Instructors />
      <Testimonials />
      <FAQ />
      <SocialMedia />

    </div>
  );
}

export default Home;
