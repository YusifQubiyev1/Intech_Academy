import React from "react";
import './MailFooter.modules.css';  



const MailFooter = () => {
    return (
        <div className="mail-footer">
            <div className='academyname'> 
                <img src='../imgs/Group 1.png' alt='Academy Logo' />
                <p>Lorem ipsum dolor sit amet consectetur. Arcu adipiscing felis velit ante. Urna morbi natoque erat dictum porttitor et.</p>
            </div>
            <div className="abtcntc">
                <li><a href='/' rel="noopener noreferrer">Haqqımızda</a></li>
                <li><a href='/' rel="noopener noreferrer">Tədris modeli</a></li>
                <li><a href='/' rel="noopener noreferrer">Tədris proqramı</a></li>
                <li> <a href='/' rel="noopener noreferrer">Əlaqə</a></li>
            </div>
            <div className='forbtninpt'>
                <p>Yeniliklərdən xəbərdar olun</p>
                <input type="email" placeholder="olivia@untitledui.com" />
                <button>Abunə ol</button> 
            </div>
        </div>
    );
}

export default MailFooter;
