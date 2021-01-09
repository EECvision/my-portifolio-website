import {useState} from 'react';
import BlogMenu from '../components/blog-menu.component';

const blogData = [
    {
        id: 1,
        projectName: 'my first blog',
        icon: 'blogWork',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        linkUrl: '#',
        category: 'tech'
    },
    {
        id: 2,
        projectName: 'my second blog',
        icon: 'blogPlay',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        linkUrl: '#',
        category: 'self development'    },
    {
        id: 3,
        projectName: 'my third blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogWork',
        linkUrl: '#',
        category: 'tech'    },
    {
        id: 4,
        projectName: 'my fourth blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogWork',
        linkUrl: '#',
        category: 'self development'    },
    {
        id: 5,
        projectName: 'my fifth blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogPlay',
        linkUrl: '#',
        category: 'tech'    },

]


function BlogsPage() {
    const [data] = useState(blogData)
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
            <div className="w-full h-24 bg-gray-200 shadow-2xl flex items-center justify-evenly">
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
