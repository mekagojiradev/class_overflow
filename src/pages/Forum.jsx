import NavBar from '../components/NavBar.jsx';
import '../App.css';
import '../styles/Forum.css';
import Post from '../components/Post.jsx';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Response from '../components/Response.jsx';

const Forum = () => {
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
                <Post></Post>
                <Response></Response> 
                
                
            </div>
        </>

    );
};

export default Forum;