<?php
require 'db.php'; // Include the database connection
header("Access-Control-Allow-Origin: *"); // Allow all origins (for development only)
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// Get the input data from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check if all required fields are provided
if (isset($data['email']) && isset($data['password']) && isset($data['displayName'])) {
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password
    $username = $data['displayName'];

    // Prepare the SQL query to insert the new user
    $stmt = $conn->prepare("INSERT INTO users (username, password_hash, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email); // Bind the parameters

    try {
        $stmt->execute(); // Execute the query
        echo json_encode(["success" => true]); // Return success response
    } catch (mysqli_sql_exception $e) {
        echo json_encode(["success" => false, "error" => "Email or username may already exist."]); // Handle any errors
    }
} else {
    echo json_encode(["success" => false, "error" => "Missing fields."]); // Missing data error
}
?>
