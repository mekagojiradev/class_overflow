import '../styles/Post.css';
import '../App.css';
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Post = ({ id, username, schoolName, createdAt, content }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        fetch('http://localhost/class_overflow/api/get_post_likes.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                question_id: id,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.like_count !== undefined && data.dislike_count !== undefined) {
                setLikes(data.like_count);
                setDislikes(data.dislike_count);
            } else {
                console.error('Error fetching counts:', data);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }, [id]);

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
                        <button className = 'like-button'><FaThumbsUp /> {likes}</button>
                        <button className = 'dislike-button'><FaThumbsDown /> {dislikes}</button>
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