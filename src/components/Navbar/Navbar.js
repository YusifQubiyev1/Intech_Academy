import React, { useState } from 'react';
import Popup from '../Popup/Popup'; // Adjust this path according to your folder structure
import './Navbar.modules.css';
import { Link } from 'react-router-dom'; // React Router Link komponenti

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <header className="header">
          <div className="logo">
            <img src="../imgs/Group 1.svg" alt="Intech Academy" />
          </div>
          <nav className="nav">
          <Link to="/HomePage">Home Page</Link>
          <a href="/haqqimizda">Haqqımızda</a>
          <a href="#contact">Tədris programı</a>
          <Link to="/contact">Əlaqə</Link>
          </nav>
        </header>
        <button className="register-btn" id='btn1' onClick={togglePopup}>
          Qeydiyyatdan Keç
        </button>
        <button  id='btn2' onClick={togglePopup}>
          =
        </button>
      </div>

      {isPopupOpen && <Popup closePopup={togglePopup} />}
    </nav>
  );
};

export default Navbar;
