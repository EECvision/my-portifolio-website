import illustration from '../assets/illustration.svg';

function Banner(){
    return(
        <div className="relative w-full h-full flex flex-col-reverse md:flex-row justify-end items-center my-20 md:py-24">
            <div className="w-full px-4 md:px-24">
                <div className="w-full max-w-xl flex flex-col justify-center items-center md:items-start text-white">
                    <span className="text-3xl lg:text-4xl text-center md:text-left mb-4 font-sans">Hello, I'm</span> 
                    <span className="text-5xl lg:text-6xl leading-none text-center md:text-left font-serif mb-4">Ezeka Emmanuel Chukwuka</span> 
                    <span className="text-xl text-center md:text-left font-sans">A Front-End Developer.</span>
                </div>
            </div>
            <img className="w-full md:absolute max-w-lg md:max-w-xl lg:max-w-3xl mb-6 md:mb-0 px-0 md:px-24" src={illustration} alt="team work"/>
        </div>
    )
}

export default Banner;