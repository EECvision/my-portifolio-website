import BlogItem from './blog-item.component';

const BlogMenu =({data})=>{
    return(
        <div className="w-full max-w-6xl border-b border-l border-r border-gray-300 rounded-b-xl shadow-lg flex flex-wrap justify-evenly items-evenly px-2 pb-12 mb-12">
            {
                data.map(({id,...otherProps})=>(
                    <BlogItem key={id} {...otherProps} />
                ))
            }
        </div>    
    )
}


export default BlogMenu;