import NavBar from '../components/NavBar.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../styles/Profile.css';

const Profile = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [college, setCollege] = useState("");

    // only do this once after the component is rendered
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUsername(user.username);
            setCollege(user.college);
        }
    }, []);

    function logOut() {
        localStorage.removeItem("isLoggedIn");
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
                        <p className='normal'>College: {college}</p>
                    </div>
                    <hr className='line'></hr>
                    <p className='normal'>Post History</p>
                    
                </div>
            </div>
        </>

    );

};

export default Profile;
