import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import iconHamburger from '../assets/icon-hamburger.svg';
import iconClose from '../assets/icon-close.svg';
import ListMenu from './list-menu.component';

function Navbar({ toggleNav, setToggleNav, isActiveLink, setLinkActive }) {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
      setToggleNav(false)
    })
  }, [scrollTop, setToggleNav]);

  const setActiveLink = (e) => {
    setLinkActive(e)
  }
  return (
    <div className="fixed z-50 w-full flex justify-between items-center py-4 px-4 md:px-12 bg-white border-b-2 border-blue-700 text-gray-800">
      <Link
        to='home'
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onSetActive={() => setActiveLink(0)}
        className="opacity-75 "
      >
        <span className="cursor-default text-lg focus:outline-none text-gray-700 hover:text-blue-500 font-bold">EECvision</span>
      </Link>
      <ListMenu isActiveLink={isActiveLink} setLinkActive={setLinkActive} />
      <div onClick={() => setToggleNav(!toggleNav)} className="flex md:hidden">
        {
          toggleNav
            ?
            <img className="w-full" src={iconClose} alt="hamburger" />
            :
            <img className="w-full" src={iconHamburger} alt="close" />
        }
      </div>
      {
        scrollTop
          ?
          <Link
            to='home'
            smooth={true}
            offset={-70}
            duration={500}
            className="fixed right-0 bottom-0 mb-48 mr-4 cursor-pointer"
          >
            <span className="text-blue-800 font-bold text-2xl  lnr lnr-chevron-up-circle"></span>
          </Link>
          : null
      }
    </div>
  )
}

export default Navbar;