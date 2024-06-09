import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditPost from "./EditPost";
import useFetch from "./useFetch";
import { Modal, Button } from "react-bootstrap";

/**
    This document shows detailed user information about a post
    This document also includes a delete and edit function
 */


//With this function the requested blogposts are fetched by their id's
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    //This handles the editmodule
    const [show, setShow] = useState(false);

    const handleEditClick = () => setShow(true);
    const handleEditClose = () => setShow(false);

    //Delete a post
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    //This returns the chosen posts with title and the two functions "edit and delete"
    return ( 
        <div className="blog-details">
            <div>
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={handleClick}>Delete</button>
                        <Button onClick={() => handleEditClick(id)}>Edit</Button>
                    </article>
                )}
            </div>
            <div>
                <Modal show={show} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Blogpost
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditPost theBlog={blog}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleEditClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
     );
}
 
export default BlogDetails;