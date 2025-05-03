import NavBar from '../components/NavBar.jsx';
import Post from '../components/Post.jsx';
import CreatePostButton from '../components/CreatePostButton.jsx';
import FilterPost from '../components/FilterPost.jsx';
import '../App.css';
import '../styles/Forum.css';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showFilterModal, setShowFilterModal] = useState(false);
    // eslint-disable-next-line
    const [filters, setFilters] = useState({ universities: [], classes: [] });

    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch("http://localhost/class_overflow/api/show_post.php");
            const data = await response.json();

            if (data.success) {
                setPosts(data.posts);
                setFilteredPosts(data.posts);
            } else {
                setError(data.error || 'Failed to fetch post');
            }
        } catch (error){
            console.error('Error fetching post:', error);
            setError('Could not fetch post. Try again later');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleApplyFilter = (newFilters) => {
        setFilters(newFilters);
        const { universities, classes } = newFilters;

        const filtered = posts.filter(post => {
            const matchUniversity = universities.length === 0 || universities.includes(post.school_name);
            const matchClass = classes.length === 0 || classes.includes(post.class_name);
            return matchUniversity && matchClass;
        });

        setFilteredPosts(filtered);
    };

    // Extract unique universities and classes from all posts
    const allUniversities = [...new Set(posts.map(p => p.school_name))];
    const allClasses = [...new Set(posts.map(p => p.class_name))];

    return (
        <>
            <NavBar />
            <div className='forum-container'>
                <div className='search-container'>
                    <input className='search-input' type='text' placeholder='Search'></input>
                    <button className='search-button'><FaSearch /></button>
                    <button className='filter-button' onClick={() => setShowFilterModal(true)}><FaFilter /></button>
                </div>

                <hr className='line' />

                {showFilterModal && (
                    <FilterPost
                        universities={allUniversities}
                        classes={allClasses}
                        onApply={handleApplyFilter}
                        onClose={() => setShowFilterModal(false)}
                    />
                )}

                {loading ? (
                    <div>Loading the posts...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    filteredPosts.map((post) => (
                        <Post
                            key={post.question_id}
                            username={post.title}
                            schoolName={post.school_name}
                            createdAt={post.created_at}
                            content={post.content}
                        />
                    ))
                )}

                <CreatePostButton handlePostCreation={fetchPosts} />
            </div>
        </>
    );
};

export default Forum;
