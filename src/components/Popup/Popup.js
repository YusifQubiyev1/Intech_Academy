import React from 'react';
import './Popup.modules.css'; 

const Popup = ({ closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-form">
          <h2>Qeydiyyatdan keç</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Ad</label>
              <input type="text" id="name" placeholder="Adınızı daxil edin" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Soyad</label>
              <input type="text" id="surname" placeholder="Soyadınızı daxil edin" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="E-mailinizi daxil edin" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Tədris sahəsi</label>
              <select id="subject">
                <option value="">Tədris sahəsini seçin</option>
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="qa">QA</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Göndər</button>
            <button type="button" className="cancel-btn" onClick={closePopup}>Ləğv et</button>
          </form>
        </div>
        <div className="popup-image">
          <img src="../imgs/backk.png" alt="PopupIllustration" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
