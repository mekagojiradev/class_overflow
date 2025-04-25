import '../styles/Post.css';
import '../App.css';
import { FaThumbsUp, FaThumbsDown, FaReply, FaTimes } from 'react-icons/fa';

const Post = () => {

    return (
        <div>
            <div className='container wide'>
                <div className='postHeader'>
                    <div className='postHeader left'>
                        <h2 className='postHeading'>Username</h2>
                        <h2 className='postHeading' style={{color: 'rgb(82, 82, 82)'}}>(College)</h2>
                    </div>
                    <div className='postHeader right'>
                        <h2 className='postHeading' style={{color: 'rgb(82, 82, 82)'}}>Date</h2>
                    </div>
                </div>
                <p className='normal'>Content content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent content</p>
                <button className='show-response-button'>Show Responses</button>
                <div className='postInfo'>
                    <div className='postInfo left'>
                        <button className = 'like-button'><FaThumbsUp /></button>
                        <button className = 'dislike-button'><FaThumbsDown /></button>
                    </div>
                    <div className='postInfo right'>
                        <button className = 'reply-button'><FaReply /></button>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className = 'delete-button'><FaTimes /></button>
                </div>
            </div>
        </div>

    );

};

export default Post;