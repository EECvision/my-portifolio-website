import iconTwitter from '../assets/icon-twitter.svg';
import iconGithub from '../assets/icon-github.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';
import Contact from './contact.component';

function Footer(){
    return(
        <div id='contact' className="w-full flex flex-col justify-between">
            <Contact/>
            <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-900 text-gray-500">
                <div className="font-sans mb-4">CONTACT</div>
                <div className="flex w-32 justify-between items-center py-4">
                    <img src={iconTwitter} alt="twitter icon" className="w-4 h-4 stroke-current text-blue-500"/>
                    <img src={iconGithub} alt="github icon" className="w-4 h-4" style={{filter:"invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(200%)"}}/>
                    <img src={iconLinkedin} alt="linkedin icon" className="w-4 h-4" style={{filter:"invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(200%)"}}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;