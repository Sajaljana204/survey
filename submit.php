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
$stmt_section_a = $conn->prepare("INSERT INTO section_a (QEn, Q1Gen, Q2Age, Q3Inc, Q4Emp, Q5Edu, Q6City, Latitude, Longitude, StartSurveyTime, SPSurveyStartingtime, SurveyEndingTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt_section_a->bind_param("ssssssssssss", $ename, $gender, $age, $income, $employment, $education, $city, $latitude, $longitude, $StartDateTime, $SPSurveyStartingtime, $EndDateTime);

// Prepare and bind SQL statement for section_b
$stmt_section_b = $conn->prepare("INSERT INTO section_b (Q7, `Q7(a)`, Q8, `Q8(a)`, `Q8(b)`, `Q8(c)`) VALUES (?, ?, ?, ?, ?, ?)");
$stmt_section_b->bind_param("ssssss", $Q7, $Q7a, $Q8, $Q8a, $Q8b, $Q8c);


// // // Prepare and bind SQL statement for column_b
// $stmt_column_b = $conn->prepare("INSERT INTO column_b (Q13s, Q14s, Q15s, Q16s, Q17s, Q18s, Q19s, Q20s, Q21s, overallFbnmt, Q22s, Q23s, Q24s, Q25s, Q26s, Q27s, Q28s, overallFbpara, Q29s, Q30s, Q31s, Q32s, Q33s, overallFbpersonal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
// $stmt_column_b->bind_param("ssssssssssssssssssssssss", $q13s, $q14s, $q15s, $q16s, $q17s, $q18s, $q19s, $q20s, $q21s, $overallFbnmt, $q22s, $q23s, $q24s, $q25s, $q26s, $q27s, $q28s, $overallFbpara, $q29s, $q30s, $q31s, $q32s, $q33s, $overallFbpersonal);

// // Prepare and bind SQL statement for column_f
// $stmt_column_f = $conn->prepare("INSERT INTO column_f (fQ13s, fQ14s, fQ15s, fQ16s, fQ17s, fQ18s, fQ19s, fQ20s, fQ21s, overallFfnmt, fQ22s, fQ23s, fQ24s, fQ25s, fQ26s, fQ27s, fQ28s, overallFfpara, fQ29s, fQ30s, fQ31s, fQ32s, fQ33s, overallFfpersonal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
// $stmt_column_f->bind_param("ssssssssssssssssssssssss", $fQ13s, $fQ14s, $fQ15s, $fQ16s, $fQ17s, $fQ18s, $fQ19s, $fQ20s, $fQ21s, $overallFfnmt, $fQ22s, $fQ23s, $fQ24s, $fQ25s, $fQ26s, $fQ27s, $fQ28s, $overallFfpara, $fQ29s, $fQ30s, $fQ31s, $fQ32s, $fQ33s,$overallFfpersonal);


// // Prepare and bind SQL statement for section_c
// $stmt_section_c = $conn->prepare("INSERT INTO section_c (Smart_Phone, Data_Package, Q41, Q42, Q43, Q44, Q45) VALUES (?, ?, ?, ?, ?, ?, ?)");
// $stmt_section_c->bind_param("sssssss", $smartPhone, $dataPackage, $q41, $q42, $q43, $q44, $q45);

// // Prepare and bind SQL statement for section_c
// $stmt_section_mode = $conn->prepare("INSERT INTO mode_choice (m1walk, m2walk, m3walk, m4walk, m21walk, m22walk, m23walk, m24walk, m31walk, m32walk, m33walk, m34walk, m41walk, m42walk, m43walk, m44walk, m51walk, m52walk, m53walk, m54walk, m61walk, m62walk, m63walk, m64walk, r1walk, r2walk, r3walk, r4walk, r21walk, r22walk, r23walk, r24walk, r31walk, r32walk, r33walk, r34walk, r41walk, r42walk, r43walk, r44walk, r51walk, r52walk, r53walk, r54walk, r61walk, r62walk, r63walk, r64walk) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
// $stmt_section_mode->bind_param("ssssssssssssssssssssssssssssssssssssssssssssssss", $m1walk, $m2walk, $m3walk, $m4walk, $m21walk, $m22walk, $m23walk, $m24walk, $m31walk, $m32walk, $m33walk, $m34walk, $m41walk, $m42walk, $m43walk, $m44walk, $m51walk, $m52walk, $m53walk, $m54walk, $m61walk, $m62walk, $m63walk, $m64walk, $r1walk, $r2walk, $r3walk, $r4walk, $r21walk, $r22walk, $r23walk, $r24walk, $r31walk, $r32walk, $r33walk, $r34walk, $r41walk, $r42walk, $r43walk, $r44walk, $r51walk, $r52walk, $r53walk, $r54walk, $r61walk, $r62walk, $r63walk, $r64walk);

// Set parameters and execute statement for each data entry
foreach ($data as $row) {
    // Validate required fields
    if (!isset($row['Ename']) || empty($row['Ename'])) {
        echo "Error: 'Ename' is required.";
        continue; // Skip this row
    }

    //Set parameters
    $ename = $row['Ename'];
    $gender = isset($row['Gender']) ? $row['Gender'] : '';
    $age = isset($row['Age']) ? $row['Age'] : '';
    $income = isset($row['Income']) ? $row['Income'] : '';
    $employment = isset($row['Employment']) ? $row['Employment'] : '';
    $education = isset($row['Education']) ? $row['Education'] : '';
    // $originArea = isset($row['OriginArea']) ? $row['OriginArea'] : '';
    // $originPin = isset($row['OriginPin']) ? $row['OriginPin'] : '';
    // $destinationArea = isset($row['DestinationArea']) ? $row['DestinationArea'] : '';
    // $destinationPin = isset($row['DestinationPin']) ? $row['DestinationPin'] : '';
    $city = isset($row['City']) ? $row['City'] : '';
    $latitude = isset($row['Latitude']) ? $row['Latitude'] : '';
    $longitude = isset($row['Longitude']) ? $row['Longitude'] : '';
    $StartDateTime = isset($row['StartdateTime']) ? $row['StartdateTime'] : '';
    $SPSurveyStartingtime = isset($row['SPSurveyStartingtime']) ? $row['SPSurveyStartingtime'] : '';
    $EndDateTime = isset($row['EndDateTime']) ? $row['EndDateTime'] : '';

    // Execute the query for 'section_a'
    if (!$stmt_section_a->execute()) {
        echo "Error: " . $stmt_section_a->error;
    }

    // // Section B
    $Q7 = isset($row['TravelWork']) ? $row['TravelWork'] : '';
    $Q7a = isset($row['TravelPartner']) ? $row['TravelPartner'] : '';
    $Q8 = isset($row['Q8']) ? $row['Q8'] : '';
    $Q8a = isset($row['TravelPurpose']) ? $row['TravelPurpose'] : '';
    $Q8b = isset($row['Travel11']) ? $row['Travel11'] : '';
    $Q8c = isset($row['Withwhom']) ? $row['Withwhom'] : '';
    // $originType = isset($row['OriginType']) ? $row['OriginType'] : '';
    // $startingTime = isset($row['StartingTime']) ? $row['StartingTime'] : '';
    // $duration = isset($row['Duration']) ? $row['Duration'] : '';
    // $bOptions = isset($row['Transportation']) ? $row['Transportation'] : '';
    // $waitingTime = isset($row['WaitingTime']) ? $row['WaitingTime'] : '';
    // $cToE = isset($row['CToe']) ? $row['CToe'] : '';
    // $durationD = isset($row['durationD']) ? $row['durationD'] : '';
    // $waitingTimeE = isset($row['WaitingTimeE']) ? $row['WaitingTimeE'] : '';
    // $durationF = isset($row['Durationf']) ? $row['Durationf'] : '';
    // $fOptions = isset($row['Ftransportation']) ? $row['Ftransportation'] : '';
    // $destinationType = isset($row['DestinationType']) ? $row['DestinationType'] : '';
    // $endTime = isset($row['EndTime']) ? $row['EndTime'] : '';
    // $q34 = isset($row['Q34']) ? $row['Q34'] : '';
    // $q35 = isset($row['Q35']) ? $row['Q35'] : '';
    // $q36 = isset($row['Q36']) ? $row['Q36'] : '';
    // $q37 = isset($row['Q37']) ? $row['Q37'] : '';
    // $q38 = isset($row['Q38']) ? $row['Q38'] : '';
    // $q39 = isset($row['Q39']) ? $row['Q39'] : '';
    // $q40 = isset($row['Q40']) ? $row['Q40'] : '';
    // $q40a = isset($row['Q40a']) ? $row['Q40a'] : '';
    // $q40b = isset($row['Q40b']) ? $row['Q40b'] : '';
    $stmt_section_b->execute();

    // // Column B
    // // Assuming you have fields Q13i through Q33s in your JSON data and in your database table
    // $overallFbnmt = isset($row['overallFbnmt']) ? $row['overallFbnmt'] : '';
    // $overallFbpara = isset($row['overallFbpara']) ? $row['overallFbpara'] : '';
    // $overallFbpersonal = isset($row['overallFbpersonal']) ? $row['overallFbpersonal'] : '';
    // for ($i = 13; $i <= 33; $i++) {
    //     ${"q$i" . "s"} = isset($row["Q{$i}s"]) ? $row["Q{$i}s"] : '';
    // }
    // $stmt_column_b->execute();

    // // Column F
    // // Assuming you have fields fQ13i through fQ33s in your JSON data and in your database table
    // $overallFfnmt = isset($row['overallFfnmt']) ? $row['overallFfnmt'] : '';
    // $overallFfpara = isset($row['overallFfpara']) ? $row['overallFfpara'] : '';
    // $overallFfpersonal = isset($row['overallFfpersonal']) ? $row['overallFfpersonal'] : '';
    // for ($i = 13; $i <= 33; $i++) {
    //     ${"fQ$i" . "s"} = isset($row["fQ{$i}s"]) ? $row["fQ{$i}s"] : '';
    // }
    // $stmt_column_f->execute();

    // // Section C
    // // Assuming you have fields Smart_Phone through o7s in your JSON data and in your database table
    // $smartPhone = isset($row['smartphone']) ? $row['smartphone'] : '';
    // $dataPackage = isset($row['data_package']) ? $row['data_package'] : '';
    // $q41 = isset($row['Q41']) ? $row['Q41'] : '';
    // $q42 = isset($row['Q42']) ? $row['Q42'] : '';
    // $q43 = isset($row['Q43']) ? $row['Q43'] : '';
    // $q44 = isset($row['Q44']) ? $row['Q44'] : '';
    // $q45 = isset($row['Q45']) ? $row['Q45'] : '';
    // $stmt_section_c->execute();


    // //section mode-chice
    // $keys = array(
    //     'm1walk', 'm2walk', 'm3walk', 'm4walk', 'm21walk', 'm22walk', 'm23walk', 'm24walk', 'm31walk', 'm32walk', 'm33walk', 'm34walk', 'm41walk', 'm42walk', 'm43walk', 'm44walk', 'm51walk', 'm52walk', 'm53walk', 'm54walk', 'm61walk', 'm62walk', 'm63walk', 'm64walk', 'r1walk', 'r2walk', 'r3walk', 'r4walk', 'r21walk', 'r22walk', 'r23walk', 'r24walk', 'r31walk', 'r32walk', 'r33walk', 'r34walk', 'r41walk', 'r42walk', 'r43walk', 'r44walk', 'r51walk', 'r52walk', 'r53walk', 'r54walk', 'r61walk', 'r62walk', 'r63walk', 'r64walk'
    // );
    // // Loop through keys and assign values to variables
    // foreach ($keys as $key) {
    //     ${$key} = isset($row[$key]) ? $row[$key] : '';
    // }
    // $stmt_section_mode->execute();

}

// Close statement
$stmt_section_a->close();
$stmt_section_b->close();
// $stmt_column_b->close();
// $stmt_column_f->close();
// $stmt_section_c->close();
// $stmt_section_mode->close();

// Close database connection
$conn->close();

// Send response to client
http_response_code(200);


?>