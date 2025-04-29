import NavBar from '../components/NavBar.jsx';
import Post from '../components/Post.jsx';
import CreatePostButton from '../components/CreatePostButton.jsx';
import '../App.css';
import '../styles/Forum.css';
import { FaSearch, FaFilter } from 'react-icons/fa';
// import Response from '../components/Response.jsx';
import { useState, useEffect, useCallback } from 'react';

const Forum = () => {
    const [posts, setPosts] = useState([]); // state to hold the fetched post
    const [loading, setLoading] = useState(true); // state to track loading status
    const [error, setError] = useState(""); // state to track any fetch errors

    // Use useCallback to memoize the fetchPosts function
    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch("http://localhost/class_overflow/api/show_post.php");
            const data = await response.json();

            if (data.success) {
                setPosts(data.posts); // update the post state with fetched data
            } else {
                setError(data.error || 'Failed to fetch post');
            }
        } catch (error){ // catch any error during the fetch process
            console.error('Error fetching post:', error);
            setError('Could not fetch post. Try again later')
        } finally {
            setLoading(false); // loading is finished if it was successful in getting the post or there was an error
        }
        
    }, []); // left an empty array since it does not depend on external variable

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]); // have a dependency array to re-run the code if the fetchPosts function changes
    
    return (
        <>
            <NavBar />
            <div className='forum-container'> {/* add search bar */}
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder='Search'></input>
                    <button className='search-button'><FaSearch/></button>
                    <button className='filter-button'><FaFilter/></button>
                </div>
                <hr className='line'></hr>
                { loading ? (
                    <div>Loading the posts...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    posts.map((post) => (
                        <Post
                        // get the info from the database and pass them as props for Post.jsx
                        key={post.question_id} // question id
                        username = {post.title}// if user want to display their username or just anonymous
                        schoolName = {post.school_name}// school name
                        createdAt = {post.created_at} // when the post was created
                        content = {post.content} // post content
                        ></Post>
                    )))}
                {/* <Response></Response>  */}
                <CreatePostButton handlePostCreation = {fetchPosts} />  {/* pass the fetchPosts function as a prop*/}
            </div>
        </>

    );
};

export default Forum;
