// import {useState} from 'react';
import { Link} from "react-scroll";
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';
import ListMenu from './list-menu.component';

function Navbar({toggleNav, setToggleNav, isActiveLink, setLinkActive}){    
    const setActiveLink=(e)=>{
        setLinkActive(e)
    }
    return (
        <div className="fixed shadow-xl z-50 w-full flex justify-between items-center py-4 px-12 bg-white text-gray-800">
            <Link 
                to='home' 
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={()=>setActiveLink(0)}
                className="opacity-75 "
            >
                <span className="cursor-default text-lg focus:outline-none text-gray-700 hover:text-blue-500 font-bold">EECvision</span>
            </Link>
            <ListMenu isActiveLink={isActiveLink} setLinkActive={setLinkActive}/>
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