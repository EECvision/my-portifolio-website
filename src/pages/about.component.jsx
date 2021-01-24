import React from 'react';

import imageEec from '../assets/image-eec.png';
import iconEnvelope from '../assets/icon-envelope.svg';
import iconPhone from '../assets/icon-phone.svg';

const tools = ['html', 'css', 'tailwind css', 'saas', 'javascript', 'react', 'node', 'github', 'web responsiveness' ];
const SocialMediaIcon =({children,linkUrl})=>(
    <a  href={linkUrl} 
        target="_blank" 
        rel="noreferrer" 
        tabIndex="-1" 
        className="inline focus:outline-none bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-full text-white text-xl font-medium py-2 px-12 text-center mb-4"
    >
        {children}
    </a>
)

function AboutPage() {
    return (
        <div id='about' className="w-full text-gray-900">
            <div className="w-full h-24 shadow-2xl flex justify-center items-center">
                <div className="text-4xl opacity-75 text-center font-bold">About Myself</div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 md:px-24">
                <div className="w-full max-w-md flex flex-col items-center justify-center mb-12 md:mb-0">
                    <img src={imageEec} alt="eec" style={{filte: "drop-shadow(2px 4px 8px #585858)"}} className="w-full max-w-sm rounded-lg"/>
                    <div className="text-2xl text-gray-700 font-medium my-2 font-serif">Emmanuel Ezeka</div>
                    <div className="text-gray-600 font-medium text-center font-sans">
                        I am a Front-End Developer. I'm very passionate about solving problems and bringing up solutions to the challenges facing people in the modern world.
                    </div>
                </div>
                <div className="w-full max-w-xl flex flex-col">
                    <div className="w-full flex flex-col items-center mb-12 md:mb-0">
                        <div className="border-b-2 border-blue-500 text-center text-blue-500 font-bold px-4 py-2 mb-6 font-serif">LANGUAGES AND TOOLS</div>
                        <div className="w-full flex flex-wrap justify-evenly">
                            {
                                tools.map((tool,idx) =>(
                                    <div key={idx} className="w-48 sm:w-auto text-center bg-blue-600 text-white font-medium font-mono uppercase rounded px-0 sm:px-8 py-2 mb-4">{tool}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="border-b-2 border-blue-500 text-center text-blue-500 font-bold px-4 py-2 mb-6 font-serif">CONTACT ME ON</div>
                        <div className="flex flex-col items-center text-gray-900 opacity-75 mb-4">
                            <div className="flex items-center font-mono"><img className="p-2" src={iconEnvelope} alt="envelope"/>ezekaemmanuel1710@gmail.com</div>
                            <div className="flex items-center font-mono"><img className="p-2" src={iconPhone} alt="phone"/><pre>+234 80 6481 9800</pre></div>
                        </div>
                        <div className="w-full max-w-xs flex flex-wrap justify-evenly">
                            <SocialMediaIcon linkUrl={'https://twitter.com/EECvision'}><i class="fab fa-twitter"></i></SocialMediaIcon>
                            <SocialMediaIcon linkUrl={'https://github.com/EECvision'}><i class="fab fa-github"></i></SocialMediaIcon>
                            <SocialMediaIcon linkUrl={'https://www.linkedin.com/in/emmanuel-ezeka-027728163/'}><i class="fab fa-linkedin-in"></i></SocialMediaIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
