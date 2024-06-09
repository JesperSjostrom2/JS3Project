import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/**
 * This following code shows all the available blogs from our JSON file.
 * There is also a search function where you can search for ur requested blog.
 */

//BlogList lists all blogs.
const BlogList = ({blogs, title }) => {

    const [query, setQuery] = useState('');
    
    return ( 
        <div className="blog-list">
            <div className='search-input'>
                <input className='input-field' 
                    type="text" 
                    name="term" 
                    placeholder="Search..." 
                    onChange={(e) => setQuery(e.target.value)}
                ></input>
            </div>
            <div className='blog-list'>
                <h2 className="h2blog-list"> All available blogs</h2>
                    {blogs.filter((blog) => 
                        blog.title.toLowerCase().includes(query)
                    ).map((blog) => (
                        <p key={blog.id} className='search-list'>
                             <Link to={`/blogs/${ blog.id }`}>
                                <h2>{ blog.title }</h2>
                                <p>Written by { blog.author }</p>
                            </Link>
                        </p>
                    ))}
            </div>
        </div>
     );
}

 
export default BlogList;