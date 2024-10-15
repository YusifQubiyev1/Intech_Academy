import React from 'react';
import './reserved.modules.css'; 

const Reserved = () => {
    return (
        <div className="reserved">
            <p>&copy; 2024 Intech Academy. All rights reserved.</p>
            <div className='socialimgs'>
            <a href="https://www.twitter.com">
            <img src='../imgs/Social icon (3).png' alt='' />
            </a>
            <a href="https://www.linkedin.com">
            <img src='../imgs/Social icon (4).png' alt='' />
            </a>
            <a href="https://www.facebook.com">
            <img src='../imgs/Social icon (5).png' alt='' />
            </a>
            <a href="https://www.instagram.com">
            <img src='../imgs/Social icon (6).png' alt='' />
            </a>
            </div>
        </div>
    );
}

export default Reserved;
