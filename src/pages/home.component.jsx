import Navbar from '../components/navbar.component';
import Banner from '../components/banner.component';

function HomePage(){
    return(
        <div className="w-full flex flex-col justify-between bg-gradient-to-r from-blue-500 to-blue-700" id='home'>
            <Navbar/>
            <Banner/>
        </div>
    )
}

export default HomePage;