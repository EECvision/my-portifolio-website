import {useState} from 'react';
import { Link} from "react-scroll";
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';

function Navbar(){
    const [isActiveLink, setIsActiveLink] = useState(0);
    const [toggleNav, setToggleNav] = useState(false);

    const setActiveLink = (e) => {
        setIsActiveLink(e)
    }  
    
    const Navlink = ({linkName, linkId, linkUrl})=>(
        <div className={`cursor-pointer transition duration-500 ease-in-out hover:bg-gray-300 ${isActiveLink===linkId ? 'text-blue-500 border-b-2 border-white border-blue-500':''} px-4 py-2 font-bold`}>
            <Link 
                to={linkUrl} 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={()=>setActiveLink(linkId)}
            >
            {linkName}
            </Link>
        </div>                
    )

    return (
        <div className="fixed shadow-xl z-10 w-full flex justify-between items-center py-4 px-12 bg-white text-gray-800">
            <Link 
                to='home' 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={()=>setActiveLink(0)}
                // onClick={()=>scrollToTop()} 
                className="opacity-75 "
            >
                <span className="cursor-default text-lg focus:outline-none text-gray-700 hover:text-blue-500 font-bold">EECvision</span>
            </Link>
            <nav className="hidden md:flex justify-center items-center text-sm">
                <Navlink linkName="ABOUT" linkId={1} linkUrl="about"/>
                <Navlink linkName="PROJECTS" linkId={2} linkUrl="projects"/>
                <Navlink linkName="BLOGS" linkId={3} linkUrl="blogs"/>
                <Navlink linkName="QUOTES" linkId={4} linkUrl="quotes"/>
                <Navlink linkName="CONTACT" linkId={5} linkUrl="contact"/>
            </nav>
            <div onClick={()=>setToggleNav(!toggleNav)} className="flex md:hidden">
                {
                    toggleNav 
                    ?
                    <img className="w-full" src={iconClose} alt="hamburger"/>
                    :
                    <img className="w-full" src={iconHamburger} alt="close"/>
                }
            </div>
        </div>
    )
}

export default Navbar;