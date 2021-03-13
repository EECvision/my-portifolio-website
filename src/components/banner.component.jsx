import illustration from '../assets/illustration.svg';

function Banner({toggleNav}){
    return(
        <div className="relative w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-end items-center mt-24 mb-24 md:py-24">
            <div className="w-full flex items-center justify-center md:justify-start px-4 md:px-24">
                <div className="w-full max-w-xl flex flex-col justify-center items-center md:items-start text-white">
                    <span className="text-3xl lg:text-4xl text-center md:text-left mb-4 font-sans">Hello, I'm</span> 
                    <span className="text-5xl lg:text-6xl leading-none text-center md:text-left font-serif mb-4">Emmanuel Ezeka Chukwuka</span> 
                    <span className="text-xl text-center md:text-left font-sans">A Web Developer.</span>
                </div>
            </div>
            <div className="w-full flex items-center justify-center md:absolute max-w-lg md:max-w-xl lg:max-w-2xl mb-6 md:mb-0">
                <img className="w-full" src={illustration} alt="team work"/>
            </div>
        </div>
    )
}

export default Banner;