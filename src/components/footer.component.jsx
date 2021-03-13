import Contact from './contact.component';

function Footer(){
    return(
        <div id='contact' className="w-full flex flex-col justify-between">
            <Contact/>
            <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-900 text-gray-500">
                <div className="font-sans mb-4">CONTACT</div>
                <div className="flex w-32 justify-between items-center py-4">
                    <a href="https://twitter.com/EECvision"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/EECvision"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/emmanuel-ezeka-027728163/"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;