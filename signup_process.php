<?php
require 'vendor/autoload.php'; // Include PhpSpreadsheet

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Load the existing spreadsheet or create a new one
    $filePath = 'data.xlsx'; // Path to your Excel file
    if (file_exists($filePath)) {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filePath);
    } else {
        $spreadsheet = new Spreadsheet();
    }

    $sheet = $spreadsheet->getActiveSheet();

    // Find the next empty row
    $lastRow = $sheet->getHighestRow() + 1;

    // Write data to the Excel file
    $sheet->setCellValue('A' . $lastRow, $username);
    $sheet->setCellValue('B' . $lastRow, $email);
    $sheet->setCellValue('C' . $lastRow, $password);

    // Save the spreadsheet
    $writer = new Xlsx($spreadsheet);
    $writer->save($filePath);

    // Redirect or show a success message
    echo "Sign Up Successful!";
}
?>