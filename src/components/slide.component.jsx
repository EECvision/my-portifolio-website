import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    return (
      <div className="w-full bg-orange-100 rounded-xl overflow-hidden transform">
        <Slide easing="ease">
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> The mind is too good to do anything when set</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> When you don't have all it takes to succeed, use some of what you have. Although you may fail, you will learn to try some more</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> We may not have equal chances to perfection but we do have equal chances to self control</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> They cannot tell you more than you can hear yourself. Listen to your mind</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> Earth is the simplest place to live in. Why? Because in heaven, you live by God's will and in hell, you live by the will of the devil but on earth, you live by your will. Make you best choice today.</span>
            </div>
            <div className="each-slide w-full h-48 flex items-center justify-center">
                <span className="w-full max-w-sm text-center text-gray-600 font-serif"> A vivid disparity between success and failure is uncertainty</span>
            </div>
        </Slide>
      </div>
    )
};

export default Slideshow;