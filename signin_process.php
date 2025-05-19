<?php
require 'vendor/autoload.php'; // Include PhpSpreadsheet

use PhpOffice\PhpSpreadsheet\IOFactory;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];  // Plain text password

    // Load the Excel file
    $filePath = 'data.xlsx'; // Path to your Excel file
    if (file_exists($filePath)) {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filePath);
    } else {
        die("No user data found.");
    }

    $sheet = $spreadsheet->getActiveSheet();
    $rowCount = $sheet->getHighestRow();

    $userFound = false;

    // Check each row for matching email and password
    for ($row = 1; $row <= $rowCount; $row++) {
        $storedEmail = $sheet->getCell('B' . $row)->getValue();
        $storedPassword = $sheet->getCell('C' . $row)->getValue();

        // Check if the email and password match
        if ($storedEmail == $email && $storedPassword == $password) {
            $userFound = true;
            break;
        }
    }

    if ($userFound) {
        echo "Sign-In Successful!";
    } else {
        echo "Invalid email or password.";
    }
}
?>
