import NavBar from '../components/NavBar.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../styles/Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [college, setCollege] = useState("");  // College or School, depending on what you save

    // only do this once after the component is rendered
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("User object from localStorage:", user); // Debugging step to check the object structure

        if (user) {
            setUsername(user.username);
            setCollege(user.school);  // Set the college (school) value from localStorage
        } else {
            navigate("/login");  // Redirect to login if the user is not logged in
        }
    }, [navigate]);

    function logOut() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <>
            <NavBar />
            {/* centers the page */}
            <div className="page-content">
                <div className='container wide' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className='title'>{username}'s Profile</h1>
                    <button className='button' onClick={logOut}>Logout</button>
                    <hr className='line'></hr>
                    <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
                        <p className='normal' style={{ marginRight: '10px' }}>Dark Mode</p>
                        <input type="checkbox" id="darkMode" />
                    </div>
                    <br />
                    <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
                        <p className='normal'>College: {college}</p>  {/* Displays the school name */}
                    </div>
                    <hr className='line'></hr>
                    <p className='normal'>Post History</p>
                </div>
            </div>
        </>
    );
};

export default Profile;
