import React from 'react';
import './contact.styles.css';

function Contact() {
    return (
        <div className="w-full flex justify-center py-24 px-4">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="text-center text-gray-700 text-2xl md:text-4xl font-bold mb-2">Hire Me To Be Part Of Your Team</div>
                    <div className="text-gray-800 text-base">I am just one "Hello" away</div>
                </div>
                <a href="https://twitter.com/EECvision" target='_blank' rel='noreferrer' className="btn">
                    <div>SEND MESSAGE</div> 
                    <span><i className="fas fa-long-arrow-alt-right"></i></span>
                </a>
            </div>
        </div>
    )
}

export default Contact;
