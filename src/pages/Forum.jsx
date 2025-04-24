import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Post from '../components/Post.jsx';
import '../App.css';

const Forum = ({posts, setPosts}) => {
    // load saved post from browser memory when the page first load or use an empty list if none are saved
    const [forumPosts, setForumPosts] = useState( () => {         
        const storedPosts = localStorage.getItem('forumPosts')
        return storedPosts ? JSON.parse(storedPosts) : [];
    })

    const handleAddPost = (newPost) => {
        setForumPosts(prevPosts => [...prevPosts, {...newPost, id: Date.now()}]);
    };

    // remove the selected post
    function handleDelete(indexToDelete) {
        setForumPosts(prevPosts => prevPosts.filter(post => post.id !== indexToDelete)); 
    }

    return (
        <>
            <NavBar />
            <div className='forum-container'> {/* add search bar */}
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder='Type for Search'></input>
                    <button className='search-button'>Press to Search</button>
                </div>
                <select className='filter-options'> {/* add filter option */}
                    <option value=''>Filter by</option>
                    <option value='College'>College</option>
                    <option value='Course'>Course</option>
                    <option value='College and Course'>Both</option>
                </select>
            </div>

            {/* create post */}
            <Post setPosts={handleAddPost} />

            {/* display text "Recent post" */}
            <div className='recent-posts-text'> Recent Posts</div>
            <div className='recent-posts-line'></div>

            <h1 className='title' style={{color:'green'}}>Forum</h1>

            {/* display list of forum posts */}
            {forumPosts.map((post) => (
                <div key={post.id} className='container post' style={{margin:'10px'}}>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <h2 className='postHeading'>{post.username}</h2>
                        <h2 className='postHeading'>{post.college}</h2>
                        <h2 className='postHeading'>{post.date}</h2>
                    </div>
                    <p>{post.content}</p>
                    <button className='show-response-button'>Show Responses</button>
                    <div style={{display:'flex'}}>
                        <button className = 'like-button'>Like</button>
                        <button className = 'dislike-button'>Dislike</button>
                        <button className = 'reply-button'>Reply</button>
                    </div>
                    <button onClick={() => handleDelete(post.id)}> Delete</button>
                </div>
            ))}
        </>

    );
};

export default Forum;