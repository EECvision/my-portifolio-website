import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    return (
      <div className="w-full bg-orange-100 rounded-xl overflow-hidden transform">
        <Slide easing="ease">
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> Be kind to the people you meet on your way up for you are likely to meet to them on your way down</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> Be kind to the people you meet on your way up for you are likely to meet to them on your way down</span>
            </div>
        </Slide>
      </div>
    )
};

export default Slideshow;