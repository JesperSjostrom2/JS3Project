import React from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";

/**
 * 
    This file fetches all of our blog posts.
 */

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            <div>
                
                { error && <div>{ error }</div>}
                { isPending && <div> Loading...</div> }
                {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            </div>
        </div>
      
     );    
}


 
export default Home;