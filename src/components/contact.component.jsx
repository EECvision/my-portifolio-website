import React from 'react';
import './contact.styles.css';

function Contact() {
    return (
        <div className="w-full flex justify-center py-24 px-4">
            <div className="w-full max-w-xs flex flex-col items-center justify-center p-6">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="text-gray-700 text-4xl font-bold">Hire Me</div>
                    <div className="text-gray-800 text-sm">I am just one "Hello" away</div>
                </div>
                <a href="https://twitter.com/EECvision" target='_blank' rel='noreferrer' className="btn">
                    <div>SEND MESSAGE</div> 
                    <span><i class="fas fa-long-arrow-alt-right"></i></span>
                </a>
            </div>
        </div>
    )
}

export default Contact;
