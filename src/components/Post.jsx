import '../styles/Post.css';

const Post = () => {

    return (
        <>
            <div className="container post">
                <div style={{display: 'flex'}}>
                    <h2 className='postHeading'>Username</h2>
                    <h2 className='postHeading'>College</h2>
                    <h2 className='postHeading'>4/23/2025</h2>
                </div>
                <p>Example text, Example text, Example text,Example text,Example text,Example text,Example text,Example text,</p>
                <button style={{width: '100%', margin: '10px'}}>Show Responses</button>
                <div style={{display: 'flex'}}>
                    <button>Like</button>
                    <button>Dislike</button>
                    <button>Reply</button>
                </div>
            </div>
        </>
    );

};

export default Post;