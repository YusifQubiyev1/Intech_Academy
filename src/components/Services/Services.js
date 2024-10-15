import React from 'react';
import './Services.modules.css';




const Services = () => {
  return (
    <section className="services">
      <div className='img-and-text'>
      <img src='../imgs/book-open-01.svg' alt='book-img' />
      <div className='text'>
      <h2>Tədris sahələri</h2>
      <p>İnformasiya Texnologiyaları sahəsində bugünün və gələcəyin ən tələb edilən istiqamətləri</p>
      </div>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src='../imgs/code-02.svg' alt='code' />
          <h3>Front-end</h3>
          <p>Müddət: 3 ay</p>
        </div>
        <div className="service-card">
        <img src='../imgs/settings-01.svg' alt='setting' />
          <h3>QA Automation</h3>
          <p>Müddət: 3 ay</p>
        </div>
        <div className="service-card">
        <img src='../imgs/dataflow-01.svg' alt='dataflow' />
          <h3>QA Manual</h3>
          <p>Müddət: 2 ay</p>
        </div>
        <div className="service-card">
        <img src='../imgs/bar-chart-07.svg' alt='bar-chart' />
          <h3>IT business analytics</h3>
          <p>Müddət: 3 ay</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
