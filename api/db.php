<?php
// Database configuration
$servername = "localhost"; // Use 'localhost' for XAMPP
$username = "root";        // Default username for MySQL in XAMPP
$password = "";            // Default password is empty for XAMPP
$dbname = "ClassOverflow"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
