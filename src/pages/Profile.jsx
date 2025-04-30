import NavBar from '../components/NavBar.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../styles/Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [college, setCollege] = useState("");  // College or School, depending on what you save
    // control whether the checkbox is checked or not
    const [darkMode, setDarkMode] = useState(false);

    // only do this once after the component is rendered
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("User object from localStorage:", user); // Debugging step to check the object structure

        if (user) {
            setUsername(user.username);
            setCollege(user.school);  // Set the college (school) value from localStorage
            setDarkMode(user.dark_mode === 1);
            // change the css body to dark-mode class so it visually displays the dark mode
            document.body.classList.toggle("dark-mode", user.dark_mode === 1);

        } else {
            navigate("/login");  // Redirect to login if the user is not logged in
        }
    }, [navigate]);

    const handleDarkModeChange = async (event) => {
        const newValue = event.target.checked;
        setDarkMode(newValue);
        document.body.classList.toggle("dark-mode", newValue);

        const user = JSON.parse(localStorage.getItem("user"));

        // changing dark_mode for user in database
        const response = await fetch("http://localhost/class_overflow/api/profile.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                dark_mode: newValue ? 1 : 0,
            }),
        });

        const result = await response.json();

        if (result.success) {
            // Update localStorage user data
            const updatedUser = { ...user, dark_mode: newValue ? 1 : 0 };
            localStorage.setItem("user", JSON.stringify(updatedUser));
            console.log("Dark mode updated successfully.");
        }
        else {
            console.error("Failed to update dark mode:", result.error);
        }
    };

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
                        <input
                            type="checkbox"
                            id="darkMode"
                            checked={darkMode}
                            onChange={handleDarkModeChange}
                        />
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
