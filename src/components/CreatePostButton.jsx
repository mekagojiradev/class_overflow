import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const FloatingAddQuestionButton = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [formData, setFormData] = useState({
    content: "",
    class: "",
  });
  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(false); // For success state
  const [anonymous, setAnonymous] = useState(false); // For the anonymous checkbox
  const [username, setUsername] = useState(""); // For storing the username

  // Get user info from localStorage when the component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User object from localStorage:", user); // Debugging step to check the object structure
    if (user) {
      setUsername(user.username); // Set the username from localStorage
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle anonymous checkbox change
  const handleAnonymousChange = (e) => {
    setAnonymous(e.target.checked);
  };

  // Submit the form to create a post
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get user_id and school_id from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user ? user.id : null;
    const school_id = user ? user.school_id : null;

    // Check if user_id and school_id are available
    if (!user_id || !school_id) {
      setError("User is not logged in or missing school information.");
      return;
    }

    // Set title based on the anonymous checkbox or username
    const title = anonymous ? "anonymous" : username || "anonymous";

    // Prepare the data for submission
    const postData = {
      title: title,
      content: formData.content,
      class: formData.class,
      user_id: user_id,
      school_id: school_id,
    };

    try {
      const response = await fetch("http://localhost/class_overflow/api/create_post.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      // Handle success or error based on the response
      if (data.success) {
        setSuccess(true); // Show success message
        console.log("Post created successfully");
        // Optionally redirect after success, if desired
        setShowForm(false);
      } else {
        setError(data.error || "Error creating post");
      }
    } catch (error) {
      console.error("There was an error during post creation", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Floating plus button */}
      <button
        onClick={() => setShowForm(true)}
        className="floating-plus-button"
      >
        +
      </button>

      {/* Create Post Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Create a New Post</h2>

            {error && <p className="message" style={{ color: "red" }}>{error}</p>}
            {success && <p className="message" style={{ color: "green" }}>Post created successfully!</p>}

            <form className="form" onSubmit={handleSubmit}>
              <label className="label">
                Question:
                <textarea
                  name="content"
                  className="input"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="label">
                Class:
                <input
                  type="text"
                  name="class"
                  className="input"
                  value={formData.class}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={handleAnonymousChange}
                />
                Anonymous?
              </label>

              <button type="submit" className="button">Create Post</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAddQuestionButton;
