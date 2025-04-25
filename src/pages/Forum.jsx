import NavBar from '../components/NavBar.jsx';
<<<<<<< HEAD
import Post from '../components/Post.jsx';
import CreatePostButton from '../components/CreatePostButton.jsx';
=======
>>>>>>> 9038f71735328ffd10b9679d47ef3a25f99113ec
import '../App.css';
import '../styles/Forum.css';
import Post from '../components/Post.jsx';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Response from '../components/Response.jsx';

const Forum = () => {
    return (
        <>
            <NavBar />
<<<<<<< HEAD
            <h1 className='title'>Forum</h1>
            <Post />
            <CreatePostButton />
=======
            <div className='forum-container'> {/* add search bar */}
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder='Search'></input>
                    <button className='search-button'><FaSearch/></button>
                    <button className='filter-button'><FaFilter/></button>
                </div>
                <hr className='line'></hr>
                <Post></Post>
                <Response></Response> 
                
                
            </div>
>>>>>>> 9038f71735328ffd10b9679d47ef3a25f99113ec
        </>

    );
};

export default Forum;