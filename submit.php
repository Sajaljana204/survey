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
$stmt_section_a = $conn->prepare("INSERT INTO section_a (QEn, Q1Gen, Q2Age, Q3Inc, Q4Emp, Q5Edu, Q6City, Latitude, Longitude, StartSurveyTime, SPSurveyStartingtime, SurveyEndingTime, Email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt_section_a->bind_param("sssssssssssss", $ename, $gender, $age, $income, $employment, $education, $city, $latitude, $longitude, $StartDateTime, $SPSurveyStartingtime, $EndDateTime, $Requestedemil);

// Prepare and bind SQL statement for section_b
$stmt_section_b = $conn->prepare("INSERT INTO section_b (Q7, `Q7(a)`, Q8, `Q8(a)`, `Q8(b)`, `Q8(c)`, `Q9(a)OT`, `Q9(a)OA`, `Q9(a)OP`, `Q9(a)ST`, `Q9(a)AT`, `Q9(a)MC`, `Q9(a)WT`, `Q9(b)DT`, `Q9(b)DA`, `Q9(b)DP`, `Q9(b)ET`, `Q9(b)AT`, `Q9(b)MC`, `Q9(b)WT`, `Q9(c)MMM`, Q9TT, `Q11(1)`, `Q11(2)`, `Q11(3)`, `Q11(4)`, `Q11(5)`, `Q11(6)`, `Q12`, `Q12(a)`, `Q12(b)`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt_section_b->bind_param("sssssssssssssssssssssssssssssss", $Q7, $Q7a, $Q8, $Q8a, $Q8b, $Q8c, $Q9aOT, $Q9aOA, $Q9aOP, $Q9aST, $Q9aAT, $Q9aMC, $Q9aWT, $Q9bDT, $Q9bDA, $Q9bDP, $Q9bET, $Q9bAT, $Q9bMC, $Q9bWT, $Q9MMM, $Q9TT, $Q11_1, $Q11_2, $Q11_3, $Q11_4, $Q11_5, $Q11_6, $Q12, $Q12a, $Q12b);


// // // Prepare and bind SQL statement for column_b
$stmt_mode_choice_question = $conn->prepare("INSERT INTO mode_choice_ans (`Q10(a_1)`, `Q10(a_2)`, `Q10(a_3)`, `Q10(a_4)`, `Q10(a_5)`, `Q10(a_6)`, `Q10(a_7)`, `Q10(a_8)`, `Q10(a_9)`, `Q10(a)OR`, `Q10(b_1)`, `Q10(b_2)`, `Q10(b_3)`, `Q10(b_4)`, `Q10(b_5)`, `Q10(b_6)`, `Q10(b_7)`, `Q10(b_8)`, `Q10(b_9)`, `Q10(b)OR`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt_mode_choice_question->bind_param("ssssssssssssssssssss", $q13s, $q14s, $q15s, $q16s, $q17s, $q18s, $q19s, $q20s, $q21s, $Q10aOR, $fQ13s, $fQ14s, $fQ15s, $fQ16s, $fQ17s, $fQ18s, $fQ19s, $fQ20s, $fQ21s, $Q10bOR);

// // Prepare and bind SQL statement for column_f it insert into mode_choice_question
// $stmt_column_f = $conn->prepare("INSERT INTO mode_choice_ans (`Q10(b_1)`, `Q10(b_2)`, `Q10(b_3)`, `Q10(b_4)`, `Q10(b_5)`, `Q10(b_6)`, `Q10(b_7)`, `Q10(b_8)`, `Q10(b_9)`, `Q10(b)OR`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
// $stmt_column_f->bind_param("ssssssssss", $fQ13s, $fQ14s, $fQ15s, $fQ16s, $fQ17s, $fQ18s, $fQ19s, $fQ20s, $fQ21s, $Q10bOR);


// // Prepare and bind SQL statement for section_c
$stmt_section_c = $conn->prepare("INSERT INTO section_c (Q13, `Q13(a)`, `Q13(b_1)`, `Q13(b_2)`, `Q13(b_3)`, `Q13(b_4)`, `Q13(b_5)`) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt_section_c->bind_param("sssssss", $smartPhone, $dataPackage, $q41, $q42, $q43, $q44, $q45);

// // Prepare and bind SQL statement for section_c
$stmt_section_mode = $conn->prepare("INSERT INTO sp_survey (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44, m51, m52, m53, m54, m61, m62, m63, m64, r11, r12, r13, r14, r21, r22, r23, r24, r31, r32, r33, r34, r41, r42, r43, r44, r51, r52, r53, r54, r61, r62, r63, r64) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt_section_mode->bind_param("ssssssssssssssssssssssssssssssssssssssssssssssss", $m11, $m12, $m13, $m14, $m21, $m22, $m23, $m24, $m31, $m32, $m33, $m34, $m41, $m42, $m43, $m44, $m51, $m52, $m53, $m54, $m61, $m62, $m63, $m64, $r11, $r12, $r13, $r14, $r21, $r22, $r23, $r24, $r31, $r32, $r33, $r34, $r41, $r42, $r43, $r44, $r51, $r52, $r53, $r54, $r61, $r62, $r63, $r64);

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
    
    
   
    $city = isset($row['City']) ? $row['City'] : '';
    $latitude = isset($row['Latitude']) ? $row['Latitude'] : '';
    $longitude = isset($row['Longitude']) ? $row['Longitude'] : '';
    $StartDateTime = isset($row['StartdateTime']) ? $row['StartdateTime'] : '';
    $SPSurveyStartingtime = isset($row['SPSurveyStartingtime']) ? $row['SPSurveyStartingtime'] : '';
    $EndDateTime = isset($row['EndDateTime']) ? $row['EndDateTime'] : '';
    $Requestedemil = isset($row['Requestedemil']) ? $row['Requestedemil'] : '';

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

    $Q9aOT = isset($row['OriginType']) ? $row['OriginType'] : '';
    $Q9aOA = isset($row['OriginArea']) ? $row['OriginArea'] : '';
    $Q9aOP = isset($row['OriginPin']) ? $row['OriginPin'] : '';
    $Q9aST = isset($row['StartingTime']) ? $row['StartingTime'] : '';

    $Q9aAT = isset($row['Duration']) ? $row['Duration'] : '';
    $Q9aMC= isset($row['Transportation']) ? $row['Transportation'] : '';

    $Q9aWT = isset($row['WaitingTime']) ? $row['WaitingTime'] : '';

    $Q9MMM = isset($row['CToe']) ? $row['CToe'] : '';
    $Q9TT = isset($row['durationD']) ? $row['durationD'] : '';
    $Q9bWT = isset($row['WaitingTimeE']) ? $row['WaitingTimeE'] : '';
    $Q9bAT = isset($row['Durationf']) ? $row['Durationf'] : '';
    $Q9bMC = isset($row['Ftransportation']) ? $row['Ftransportation'] : '';

    $Q9bDT = isset($row['DestinationType']) ? $row['DestinationType'] : '';
    $Q9bDA = isset($row['DestinationArea']) ? $row['DestinationArea'] : '';
    $Q9bDP = isset($row['DestinationPin']) ? $row['DestinationPin'] : '';
    $Q9bET = isset($row['EndTime']) ? $row['EndTime'] : '';

    $Q11_1 = isset($row['Q34']) ? $row['Q34'] : '';
    $Q11_2 = isset($row['Q35']) ? $row['Q35'] : '';
    $Q11_3 = isset($row['Q36']) ? $row['Q36'] : '';
    $Q11_4 = isset($row['Q37']) ? $row['Q37'] : '';
    $Q11_5= isset($row['Q38']) ? $row['Q38'] : '';
    $Q11_6 = isset($row['Q39']) ? $row['Q39'] : '';
    $Q12 = isset($row['Q40']) ? $row['Q40'] : '';
    $Q12a = isset($row['Q40a']) ? $row['Q40a'] : '';
    $Q12b = isset($row['Q40b']) ? $row['Q40b'] : '';
    $stmt_section_b->execute();

    // // Column B
    //Assuming you have fields Q13i through Q33s in your JSON data and in your database table
    $Q10aOR= isset($row['overallFbRating']) ? $row['overallFbRating'] : '';
    for ($i = 13; $i <= 33; $i++) {
        ${"q$i" . "s"} = isset($row["Q{$i}s"]) ? $row["Q{$i}s"] : '';
    }
    

    // // Column F
    // Assuming you have fields fQ13i through fQ33s in your JSON data and in your database table
    $Q10bOR = isset($row['overallFfRating']) ? $row['overallFfRating'] : '';
    for ($i = 13; $i <= 33; $i++) {
        ${"fQ$i" . "s"} = isset($row["fQ{$i}s"]) ? $row["fQ{$i}s"] : '';
    }
    $stmt_mode_choice_question->execute();

    // // Section C
    // // Assuming you have fields Smart_Phone through o7s in your JSON data and in your database table
    $smartPhone = isset($row['smartphone']) ? $row['smartphone'] : '';
    $dataPackage = isset($row['data_package']) ? $row['data_package'] : '';
    $q41 = isset($row['Q41']) ? $row['Q41'] : '';
    $q42 = isset($row['Q42']) ? $row['Q42'] : '';
    $q43 = isset($row['Q43']) ? $row['Q43'] : '';
    $q44 = isset($row['Q44']) ? $row['Q44'] : '';
    $q45 = isset($row['Q45']) ? $row['Q45'] : '';
    $stmt_section_c->execute();


    // //section mode-chice
    $keys = array(
        'm11', 'm12', 'm13', 'm14', 'm21', 'm22', 'm23', 'm24', 'm31', 'm32', 'm33', 'm34', 'm41', 'm42', 'm43', 'm44', 'm51', 'm52', 'm53', 'm54', 'm61', 'm62', 'm63', 'm64', 'r11', 'r12', 'r13', 'r14', 'r21', 'r22', 'r23', 'r24', 'r31', 'r32', 'r33', 'r34', 'r41', 'r42', 'r43', 'r44', 'r51', 'r52', 'r53', 'r54', 'r61', 'r62', 'r63', 'r64'

    );
    // Loop through keys and assign values to variables
    foreach ($keys as $key) {
        ${$key} = isset($row[$key]) ? $row[$key] : '';
    }
    $stmt_section_mode->execute();

}

// Close statement
$stmt_section_a->close();
$stmt_section_b->close();
$stmt_mode_choice_question->close();
// $stmt_column_f->close();
$stmt_section_c->close();
$stmt_section_mode->close();

// Close database connection
$conn->close();

// Send response to client
http_response_code(200);


?>