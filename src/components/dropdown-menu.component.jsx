import { Link} from "react-scroll";

function DropdownMenu({isActiveLink, setLinkActive}){
    const setActiveLink = (e) => {
        setLinkActive(e)
    }  

    const Navlink = ({linkName, linkId, linkUrl})=>(
        <div className={`w-32 text-center cursor-pointer transition duration-500 ease-in-out hover:bg-gray-300 ${isActiveLink===linkId ? 'text-blue-500 border-b-2 border-white border-blue-500':''} px-4 py-2 font-bold`}>
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

    return(
        <div className="w-full h-full max-w-sm md:hidden bg-white">
            <nav className="flex flex-col items-center justify-evenly text-sm text-gray-700">
                <Navlink linkName="ABOUT" linkId={1} linkUrl="about"/>
                <Navlink linkName="PROJECTS" linkId={2} linkUrl="projects"/>
                <Navlink linkName="BLOGS" linkId={3} linkUrl="blogs"/>
                <Navlink linkName="CONTACT" linkId={4} linkUrl="contact"/>
            </nav>
        </div>
    )
}

export default DropdownMenu;