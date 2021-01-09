import React from 'react';
import BlogMenu from '../components/blog-menu.component';

function BlogsPage() {
    return (
        <div id='blogs' className="flex flex-col items-center justify-start overflow-hidden">
            <div className="w-full h-24 bg-gray-700 shadow-2xl flex justify-center items-center">
                <div className="text-4xl text-white text-center font-bold">My Blogs</div>
            </div>
            <div className="w-full h-24 bg-gray-200 shadow-2xl flex items-center justify-evenly">
                <div className="cursor-pointer text-lg text-blue-900 text-center font-bold">Technology</div>
                <div className="cursor-pointer text-lg text-blue-900 text-center font-bold">Self Development</div>
            </div>

            <div className="w-full px-4 md:px-24">
                <BlogMenu/>
            </div>
        </div>
    )
}

export default BlogsPage;
