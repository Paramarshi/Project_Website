<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $property_id = $_POST['property_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address (the real estate agent's email)
    $to = "agent@example.com"; // Replace with the agent's email address

    // Create the email subject and body
    $subject = "Inquiry about Property ID: $property_id";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Inquiry sent successfully.";
    } else {
        echo "Failed to send inquiry. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>