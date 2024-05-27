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

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    // Get the selected rows to delete
    $deleteIds = isset($_POST["deleteIds"]) ? $_POST["deleteIds"] : [];

    // Validate and sanitize the IDs
    $deleteIds = array_map('intval', $deleteIds);
    $deleteIds = array_filter($deleteIds);

    if (!empty($deleteIds)) {
        // Construct the DELETE query
        $deleteQuery = "DELETE FROM section_a WHERE id IN (" . implode(",", $deleteIds) . ")";
        $conn->query($deleteQuery);

        // Execute the DELETE query
        //if ($conn->query($deleteQuery) === TRUE) {
        //    echo "Selected rows deleted successfully.";
        //} else {
        //    echo "Error deleting rows: " . $conn->error;
        //}
    }
}

// SELECT query to fetch data from all tables
$sql_select_all_data = "SELECT 
    section_a.*, 
    section_b.*, 
    section_c.*, 
    sp_survey.*
FROM 
    section_a
    JOIN section_b ON section_a.id = section_b.id
    JOIN section_c ON section_a.id = section_c.id
    JOIN sp_survey ON section_a.id = sp_survey.id";

$result_all_data = $conn->query($sql_select_all_data);

// Check if data is available
$hasData = ($result_all_data && $result_all_data->num_rows > 0);



// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSV Upload</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            /* Set margin to 0 */
            padding: 0;
            /* Set padding to 0 */
            background-color: #f4f4f4;
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            text-align: center;
            margin-left: 0;
            /* Set margin-left to 0 */
        }


        table {
            margin-left: 0;
        }

        #downloadBtn {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
            margin: 5px;

        }

        button {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
            margin: 5px;
        }

        button:hover {
            background-color: #45a049;
        }



        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-left: 0;
            /* Set margin-left to 0 */
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 15px;
            text-align: left;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:hover {
            background-color: #f5f5f5;
        }


        #downloadBtn:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>

    

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <button id="downloadBtn">Download CSV</button>
        <button type="submit" name="delete">Delete Selected Rows</button>

        <table>
            <?php
            if ($hasData) {
            if ($result_all_data !== null) {
                // Display header row with checkbox column
                echo "<tr><th>Delete</th>";
                foreach ($result_all_data->fetch_assoc() as $key => $value) {
                    echo "<th>" . $key . "</th>";
                }
                echo "</tr>";

                $result_all_data->data_seek(0); // Reset result set pointer
            
                while ($row = $result_all_data->fetch_assoc()) {
                    // Display data with checkboxes
                    echo "<tr>";
                    echo "<td><input type='checkbox' name='deleteIds[]' value='" . $row['id'] . "'></td>";
                    foreach ($row as $value) {
                        echo "<td>" . $value . "</td>";
                    }
                    echo "</tr>";
                }
            } else {
                echo '<script>';
                echo 'alert("No Data in here.");';
                echo 'window.location.href = window.location.href;';
                echo '</script>';
            }
        }else{
            echo '<tr><td colspan="100%">No Data in here.</td></tr>';
        }
            ?>
        </table>
    </form>


    <script>
        const downloadBtn = document.getElementById('downloadBtn');
        const successPopup = document.getElementById('successPopup');
        const successMessage = document.getElementById('successMessage');

        downloadBtn.addEventListener('click', () => {
            const table = document.querySelector('table');
            const rows = table.querySelectorAll('tr');
            const csvData = [];

            // Add headers
            const headerRow = rows[0].querySelectorAll('th');
            const headers = [];
            for (const headerCell of headerRow) {
                headers.push(headerCell.textContent);
            }
            csvData.push(headers.join(','));

            // Add data rows
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.querySelectorAll('td');
                const data = [];
                for (const cell of cells) {
                    data.push(cell.textContent);
                }
                csvData.push(data.join(','));
            }

            // Convert CSV data to blob and create download link
            const blob = new Blob([csvData.join('\n')], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'data.csv';

            link.click();
            URL.revokeObjectURL(url);

            alert('Data downloaded sucessfully');
        });

       
    </script>
</body>

</html>