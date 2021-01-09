import BlogItem from './blog-item.component';

const BlogMenu =({data})=>{
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