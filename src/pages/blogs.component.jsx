import {useState} from 'react';
import BlogMenu from '../components/blog-menu.component';
import { BLOG_DATA } from './blog-data';

function BlogsPage() {
    const [data] = useState(BLOG_DATA)
    const [isCategory, setIsCategory] = useState('')
    const categories=['tech', 'self development', 'all blogs']

    const handleClick=(e)=>{
        if(e === "all blogs"){
            e = ''
        }
        setIsCategory(e)
    }

    const filteredData = data
    .filter( data=> data.category.toLowerCase()
    .includes(isCategory.toLocaleLowerCase()))

    return (
        <div id='blogs' className="flex flex-col items-center justify-start overflow-hidden">
            <div className="w-full h-24 bg-gray-700 shadow-2xl flex justify-center items-center">
                <div className="text-4xl text-white text-center font-bold">My Blogs</div>
            </div>
            <div className="w-full h-24 bg-gray-200 shadow-lg flex flex-wrap items-center justify-around">
                {
                    categories.map((category, idx)=>(
                        <div key={idx} onClick={()=>handleClick(category)} className="cursor-pointer text-lg text-blue-900 text-center border-2 border-gray-400 rounded-lg px-6 font-bold capitalize">{category}</div>
                    ))
                }
            </div>

            <div className="w-full px-4 md:px-24">
                <BlogMenu data={filteredData}/>
            </div>
        </div>
    )
}

export default BlogsPage;
