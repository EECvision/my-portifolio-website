import { Link} from "react-scroll";

function ListMenu({isActiveLink, setLinkActive}){

    const setActiveLink  =(e)=>{
        setLinkActive(e)
    }
    
    const Navlink = ({linkName, linkId, linkUrl})=>(
        <div className={`w-auto text-center cursor-pointer transition duration-500 ease-in-out hover:bg-gray-300 ${isActiveLink===linkId ? 'text-blue-500 border-b-2 border-white border-blue-500':''} px-4 py-2 font-bold`}>
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
        <div className="w-full max-w-lg hidden md:flex justify-center">
            <nav className="w-full flex items-center justify-between text-sm text-gray-700">
                <Navlink linkName="ABOUT" linkId={1} linkUrl="about"/>
                <Navlink linkName="PROJECTS" linkId={2} linkUrl="projects"/>
                <Navlink linkName="BLOGS" linkId={3} linkUrl="blogs"/>
                <Navlink linkName="QUOTES" linkId={4} linkUrl="quotes"/>
                <Navlink linkName="CONTACT" linkId={5} linkUrl="contact"/>
            </nav>
        </div>
    )
}

export default ListMenu;
