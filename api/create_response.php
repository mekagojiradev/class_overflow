<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'db.php'; // Include the database connection

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// If it's a preflight request, return early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the input data from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check if all required fields are provided
if (isset($data['content']) && isset($data['user_id'])) {
    $content = $data['content'];
    $user_id = $data['user_id'];


    // Prepare the SQL query to insert the new post
    $stmt = $conn->prepare("INSERT INTO responses (content, user_id, question_id) VALUES (?, ?, ?)");
    $stmt->bind_param("sii", $content, $user_id, $question_id); // Bind the parameters

    try {
        $stmt->execute(); // Execute the query
        echo json_encode([
            "success" => true,
            "post_id" => $stmt->insert_id, // Return post_id in response
        ]);
    } catch (mysqli_sql_exception $e) {
        echo json_encode([
            "success" => false,
            "error" => $e->getMessage()
        ]);
    }
} else {

    echo json_encode(["success" => false, "error" => "Missing fields."]); // Missing data error
}
?>
