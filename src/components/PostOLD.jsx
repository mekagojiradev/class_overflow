import '../styles/Post.css';
import '../App.css';
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';

const Post = ({username, schoolName, createdAt, content}) => {

    return (
        <div>
            <div className='container wide' style={{margin: '5px'}}>
                <div className='postHeader'>
                    <div className='postHeader left'>
                        <h2 className='postHeading'>{username}</h2>
                        <h2 className='postSubheading'>({schoolName})</h2>
                    </div>
                    <div className='postHeader right'>
                        <h2 className='postSubheading'>{createdAt}</h2>
                    </div>
                </div>
                <p className='normal post'>{content}</p>
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
            </div>
        </div>

    );

};

export default Post;