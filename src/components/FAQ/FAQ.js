import React, { useState } from 'react';
import './FAQ.modules.css';


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        }
    ];

    return (
        <div className="faq-container">
            <div>
            <img src='../imgs/message-question-circle.png' alt=''/>
            <h2>Tez-tez soruşulan suallar</h2>
            </div>
            <ul className="faq-list">
                {faqData.map((item, index) => (
                    <li key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && <div className="faq-answer">{item.answer}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;
