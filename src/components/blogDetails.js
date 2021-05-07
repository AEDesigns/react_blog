import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-details">
            {isLoading && <div>Blog is loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;