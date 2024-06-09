import { useState } from "react";
import { useHistory } from 'react-router-dom';

/**
 * With this function we are able to create a new user in our JSON database
*/

const Create = () => {
    //states
    const  [title, setTitle] = useState('');
    const  [body, setBody] = useState('');
    const  [author, setAuthor] = useState('');
    const  [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //function for submit new blog posts
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        //fetches new post and adds it to the db.json file
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //this converts the data into json
            body: JSON.stringify(blog)
        }) .then(() => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        }) 
    }

    //Makes form to create a new blog
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    placeholder="Enter information"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Marcus">Marcus</option>
                    <option value="Cihan">Cihan</option>
                    <option value="Rebecka">Rebecka</option>
                    <option value="Kalle">Kalle</option>
                    <option value="Anka">Anka</option>
                    <option value="Pelle">Pelle</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;