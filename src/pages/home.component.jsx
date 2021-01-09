import {useState} from 'react';
import Navbar from '../components/navbar.component';
import Banner from '../components/banner.component';
import DropdownMenu from '../components/dropdown-menu.component';

function HomePage(){
    const [toggleNav, setToggleNav] = useState(false);
    const [isActiveLink, setIsActiveLink] = useState(0);

    const setActiveLink = (e) => {
        setIsActiveLink(e)
    }  

    return(
        <div className="w-full flex flex-col justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700" id='home'>
            <Navbar 
                toggleNav={toggleNav} 
                setToggleNav={setToggleNav} 
                isActiveLink={isActiveLink}
                setLinkActive={setActiveLink}
            />
            {
                toggleNav
                ?
                <DropdownMenu 
                    isActiveLink={isActiveLink} 
                    setLinkActive={setActiveLink}
                />
                :
                null
            }
            <Banner toggleNav={toggleNav}/>
        </div>
    )
}

export default HomePage;