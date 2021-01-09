import React from 'react';
import SlideShow from '../components/slide.component';

function QuotesPage() {
    return (
        <div id='quotes' className="relative flex flex-col">
            <div className="absolute w-full h-32 md:h-48 bg-gray-700 flex items-start justify-center">
                <div className="text-gray-100 text-4xl text-center font-bold mt-4">My Quotes</div>
            </div>
            <div className="w-full flex flex-col items-center px-4 md:px-24 mt-24 mb-12">
            <div className=" w-full flex items-center justify-center bg-white border-2 border-gray-300 shadow-lg rounded-xl transform md:py-12 py-6 px-2 md:px-24">
                <div className="text-xl md:text-2xl text-center text-gray-700 font-serif">Apart from my burining desire to solve challenges through coding, I am often inspired to write quotes about human nature and existence</div>
            </div>
            <div className="w-full border-b-2 border-red-700 my-6"/>
                <SlideShow/>
            </div>
        </div>
    )
}

export default QuotesPage;
