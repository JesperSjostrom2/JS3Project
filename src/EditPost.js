import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import BlogDetails from './BlogDetails';

/**
   File to update our posts
 */

const EditPost = (theBlog) => {

    const id =  theBlog.id;

    const [title, setTitle] = useState(theBlog.title);
    const [body, setBody] = useState(theBlog.body);
    const [author, setAuthor] = useState(theBlog.author);

    const {editBlogpost} = useContext(BlogDetails);

    const editedBlogpost = {id, title, body, author}

    const handleSubmit = (e) => {
        e.preventDefault();
        editBlogpost(id, editedBlogpost)
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Blogbody"
                    name="body"
                    rows={3}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit post
            </Button>
        </Form>
     );
}
 
export default EditPost;
