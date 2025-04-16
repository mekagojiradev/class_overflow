import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component
import "./App.css"; // Import global styles

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
