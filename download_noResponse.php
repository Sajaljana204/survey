
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

// Define the filename with the current date
$filename = "noresponse_data_" . date('Ymd') . ".csv";

// Set the headers to indicate that this is a CSV file
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=' . $filename);

// Create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// Output the column headings
fputcsv($output, array('Ename', 'Latitude', 'Longitude', 'DateTime'));

// Fetch the data from the database
$query = "SELECT Ename, latitude, longitude, DateTime FROM noresponse_data";
$result = $conn->query($query);

// Loop over the rows, outputting them
while ($row = $result->fetch_assoc()) {
    fputcsv($output, $row);
}

// Close database connection
$conn->close();

?>