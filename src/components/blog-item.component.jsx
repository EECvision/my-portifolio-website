import React from 'react';
import blogWork from '../assets/blog-work.svg';
import blogPlay from '../assets/blog-play.svg';
import blogJourney from '../assets/blog-journey.jpg';
import iconClock from '../assets/lnr-clock.svg';

const blogPreviews ={
    blogWork: blogWork,
    blogPlay: blogPlay,
    blogTool: blogWork,
    blogJourney: blogJourney
}


const BlogItem =({icon, projectName, description, linkUrl, publishedAt, readDuration})=>(
    <div className="w-full md:max-w-sm rounded-b-lg mt-12  overflow-hidden">
        <img className="w-full h-48" src={blogPreviews[icon]} alt="icon"/>
        <a href={linkUrl} target='_blank' rel="noreferrer">
            <div className="relative w-full h-48 border-2 transition delay-100 duration-500 ease-in-out bg-gray-200 hover:bg-gray-300 px-4 pb-4 overflow-y-scroll">
                <div className="sticky top-0 w-full flex items-center justify-between text-gray-700 bg-gray-200">
                    <div>{publishedAt}</div>
                    <div className="flex items-center justify-center">
                        <img className="w-3 h-3 mr-1" src={iconClock} alt="icon"/>
                        <div>{readDuration} mins read</div>
                    </div>
                </div>
                <div className="text-2xl font-bold text-blue-500 leading-tight mb-2">{projectName}</div>
                <div className="text-base text-gray-700">{description}</div>
            </div>
        </a>
    </div>
)

export default BlogItem