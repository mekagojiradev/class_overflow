import NavBar from '../components/NavBar.jsx';
import Post from '../components/Post.jsx';
import '../App.css';

const Forum = () => {
    return (
        <>
            <NavBar />
            <h1 className='title'>Forum</h1>
            <Post />
        </>

    );

};

export default Forum;