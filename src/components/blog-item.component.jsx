import React from 'react';
import blogWork from '../assets/blog-work.svg';
import blogPlay from '../assets/blog-play.svg';

const blogPreviews ={
    blogWork: blogWork,
    blogPlay: blogPlay,
}


const BlogItem =({icon, projectName, description, linkUrl})=>(
    <div className="w-full md:max-w-sm rounded-b-lg mt-12 bg-gray-200 overflow-hidden">
        <img className="w-full h-48" src={blogPreviews[icon]} alt="icon"/>
        <a href={linkUrl} target='_blank' rel="noreferrer">
            <div className="w-full h-32 border-2 border-gray-300 transition delay-100 duration-500 ease-in-out hover:bg-gray-300 p-4">
                <div className="text-2xl font-bold text-blue-500">{projectName}</div>
                <div className="text-base text-gray-700">{description}</div>
            </div>
        </a>
    </div>
)

export default BlogItem