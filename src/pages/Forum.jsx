import NavBar from '../components/NavBar.jsx';
import Post from '../components/Post.jsx';
import CreatePostButton from '../components/CreatePostButton.jsx';
import '../App.css';

const Forum = () => {
    return (
        <>
            <NavBar />
            <h1 className='title'>Forum</h1>
            <Post />
            <CreatePostButton />
        </>

    );

};

export default Forum;