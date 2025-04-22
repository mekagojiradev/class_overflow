// Changed the structure of the directory so we can keep track of pages, styles, and components
// Added a navigation bar and cleaned up the homepage
// Started on the profile page
// Protected components can no longer be accessed without logging in first
// Current user's information can be gathered with "const user = JSON.parse(localStorage.getItem("user"));"...
  // as long as the user is logged in (see lines 12-17 in Profile.jsx for more context)

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Forum from "./pages/Forum";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Changed so that if the user is logged in, path / routes to home, and if not, routes to login */}
          <Route path="/" 
            element={localStorage.getItem("isLoggedIn") === "true"
            ? <Navigate to="/home" replace />
            : <Navigate to="/login" replace />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/forum" element={<ProtectedRoute><Forum /></ProtectedRoute>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
