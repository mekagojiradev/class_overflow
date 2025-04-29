<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require 'db.php'; // Include your database connection

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
    // // Prepare the SQL query to select post data along with related user, school, and class information
    $stmt = $conn->prepare("
        SELECT
            questions.id AS question_id,
            questions.title,
            questions.content,
            users.username,
            schools.name AS school_name,
            classes.name AS class_name,
            questions.created_at
        FROM questions 
            JOIN users ON questions.user_id = users.id
            JOIN schools ON questions.school_id =schools.id
            JOIN classes ON questions.class_id =classes.id
        ORDER BY questions.created_at DESC
    ");
    $stmt->execute(); // Execute the query
    $result = $stmt->get_result();
    $posts = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode([
        "success" => true,
        "posts" => $posts
    ]);

} catch (mysqli_sql_exception $e) {
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ]);
}
?>