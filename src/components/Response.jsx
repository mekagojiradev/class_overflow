import '../styles/Post.css';
import '../App.css'
import '../styles/Forum.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import CreateResponseButton from './CreateResponseButton';

const Response = () => {

    return (
        <div>
            <div className='response-wrapper'>
                <div className='container wide response'>
                    <div className='postHeader'>
                        <div className='postHeader left'>
                            <h2 className='postHeading'>Username</h2>
                        </div>
                        <div className='postHeader right'>
                            <h2 className='postHeading' style={{color: 'rgb(82, 82, 82)'}}>Date</h2>
                        </div>
                    </div>
                    <p className='normal'>Content content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent contentontent content Content contentContent contentContent contentContent contentContent contentContent contentContent content</p>
                    <div className='postInfo'>
                        <div className='postInfo left'>
                            <button className = 'like-button'><FaThumbsUp /></button>
                            <button className = 'dislike-button'><FaThumbsDown /></button>
                        </div>
                        <div className='postInfo right'>
                            <CreateResponseButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Response;