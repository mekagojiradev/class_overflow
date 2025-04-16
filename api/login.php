<?php
require 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];

    // Check if user exists
    $stmt = $conn->prepare("SELECT id, username, password_hash FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password_hash'])) {
            // Successful login
            echo json_encode(["success" => true, "user" => ["id" => $user['id'], "username" => $user['username']]]);
        } else {
            echo json_encode(["success" => false, "error" => "Incorrect password."]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "User not found."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Missing email or password."]);
}
?>
