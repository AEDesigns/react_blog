import {useState, useEffect} from 'react';
import BlogList from './blogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        // Fetch Data
        fetch('http://localhost:8000/blogs')
        .then(res => {
            //format data to json
            return res.json()
        })
        .then(data => {
            //setState to data from fetch call
            setBlogs(data)
        })
    }, []);

    return ( 
        <div className="home">
            {/* BllogList wont render until blogs is true, when the api finishes */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;