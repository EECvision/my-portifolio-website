import React,{useState} from 'react';
import BlogItem from './blog-item.component';

const blogData = [
    {
        id: 1,
        projectName: 'my first blog',
        icon: 'blogWork',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        linkUrl: '#'
    },
    {
        id: 2,
        projectName: 'my second blog',
        icon: 'blogPlay',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        linkUrl: '#'
    },
    {
        id: 3,
        projectName: 'my third blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogWork',
        linkUrl: '#'
    },
    {
        id: 4,
        projectName: 'my fourth blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogWork',
        linkUrl: '#'
    },
    {
        id: 5,
        projectName: 'my fifth blog',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quo tempora corporis facere aspernatur nesciunt id cupiditate consequatur nostrum aperiam deleniti dicta, soluta assumenda aliquam dolores aut doloribus? Harum, illum?',
        icon: 'blogPlay',
        linkUrl: '#'
    },

]

const BlogMenu =()=>{
    const [data] = useState(blogData)
    return(
        <div className="w-full border-2 border-gray-300 rounded-b-xl shadow-lg flex flex-wrap justify-evenly items-evenly px-12 pb-12 mb-12">
            {
                data.map(({id,...otherProps})=>(
                    <BlogItem key={id} {...otherProps} />
                ))
            }
        </div>    
    )
}


export default BlogMenu;