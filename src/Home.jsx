import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
    const navigate = useNavigate(); // For navigation 

    const goToProfile = () => {
        navigate('/Profile');  // takes you to the Profile page 
    }

    const goToForum = () => {
        navigate('/Forum'); // takes you to the Home page 
    }

    return (
        <div className="home-page">
            <h1>Welcome to Collegiate Forum</h1>
            <button onClick={goToProfile}>Profile</button>
            <button onClick={goToForum}>Forum</button>
            <h2>What's This All About?</h2>
            <p>A student focused Q&A platform designed to help you ask and answer class related questions.</p>
            <h2>Who is this for?</h2>
            <p>Any student who wants to better understand their class material and connect with their peers.</p>
            <h2>How Does it Help You?</h2>
            <p><b>No more searching through irrelevant posts</b>. You can can quickly find discussions tailored to your exact courses.</p><br/>
            <p><b>Becoming a learning leader</b>. Share what you know and empower others to succeed alongside you.</p>
        </div>

    );

};

export default Home;
