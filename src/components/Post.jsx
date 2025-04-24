import '../styles/Post.css';
import { useState } from 'react';

const Post = ({setPosts}) => {
    // Use useState to store and manage posts
    const [username, setUsername] = useState("");
    const [college, setCollege] = useState("");
    const [content, setContent] = useState("");

    // handle post submission 
    function handleSubmit (event) {
        event.preventDefault(); // Prevents page reload

        // Prevent submission if title, author, or content fields are empty
        if (username.length === 0 || college.length === 0 || content.length === 0){
            // Display an error message if validation fails.
            alert("Did not fill in username, college, or content fields ")

        } 
        // creates an object called newPost
        const newPost = { username, college, content, date: new Date().toLocaleDateString() }; 
        
        setPosts((newPost)); // add post to the list
        setUsername("");
        setCollege("");
        setContent("");

    }

    return (

        <div>
            <div className='create-posts-text'> Create Posts</div>
            <div className='create-posts-line'></div>
            
            <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)} 
                placeholder="Enter the username">                
            </input>
            <br/>

            <input
                type="text" 
                value={college} 
                onChange={(event) => setCollege(event.target.value)} 
                placeholder="Enter the college">
            </input>
            <br/>

            <textarea
                type="text" 
                value={content} 
                onChange={(event) => setContent(event.target.value)} 
                placeholder="Enter the content">
            </textarea>
            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>

    );

};

export default Post;

