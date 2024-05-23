<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "main_survey"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Receive the JSON data sent from client-side JavaScript
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is received
if (!is_array($data) || empty($data)) {
    die("Error: No valid data received.");
}

// Prepare and bind SQL statement to insert data into MySQL database
$stmt_noresponse_data = $conn->prepare("INSERT INTO noresponse_data (Ename, latitude, longitude, DateTime) VALUES (?, ?, ?, ?)");
$stmt_noresponse_data->bind_param("sdds", $ename, $latitude, $longitude, $dateTime);



// Set parameters and execute statement for each data entry
foreach ($data as $row) {

    // Set parameters
    $ename = $row['EmulatorName'];
    $latitude = isset($row['LatitudeNo']) ? $row['LatitudeNo'] : '';
    $longitude = isset($row['LongitudeNo']) ? $row['LongitudeNo'] : '';
    $dateTime = isset($row['DateTimeNo']) ? $row['DateTimeNo'] : '';
    $stmt_noresponse_data->execute();
   
}

// Close statement
$stmt_noresponse_data->close();


// Close database connection
$conn->close();

// Send response to client
http_response_code(200);


?>