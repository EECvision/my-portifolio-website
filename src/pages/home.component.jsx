import { useState } from 'react';
import Navbar from '../components/navbar.component';
import Banner from '../components/banner.component';
import DropdownMenu from '../components/dropdown-menu.component';

function HomePage() {
  const [toggleNav, setToggleNav] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(0);

  const setActiveLink = (e) => {
    setIsActiveLink(e)
  }

  return (
    <div className="w-full flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700" id='home'>
      <Navbar
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        isActiveLink={isActiveLink}
        setLinkActive={setActiveLink}
      />
      <div className={`w-full mt-16 fixed left-0 z-10 flex items-center justify-center ${toggleNav ? "h-48" : "h-0"} transition-all duration-300 ease-in-out overflow-hidden shadow-lg`}>
        <DropdownMenu
          isActiveLink={isActiveLink}
          setLinkActive={setActiveLink}
        />
      </div>
      <Banner toggleNav={toggleNav} />
    </div>
  )
}

export default HomePage;