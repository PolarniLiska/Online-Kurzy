<?php
ini_set('display_errors', 0);
function returnSuccess()
{
    echo '{
        "success": true
    }';
}
function returnFailure()
{
    echo '{
        "success": false
    }';
}
function sanitizeInput($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $phone = sanitizeInput($_POST['phone']);
    $message = wordwrap(sanitizeInput($_POST['message']), 70, "\r\n");

    $headers = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To:' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $mailContent = 'Email: ' . $email . "\r\nTelefonní číslo: " . $phone . "\r\nJméno: " . $name . "\r\nZpráva:\r\n" . $message;
    if (isset($_POST['intendedFor'])) {
        $mailContent = 'Určeno pro: ' . $_POST['intendedFor'] . "\r\n\r\n" . $mailContent;
    }

    $success = mail('salon.anno@gmail.com', 'www.salonanno.cz - Nová zpráva - ' . $email, $mailContent, $headers);
    if ($success) {
        returnSuccess();
    } else {
        returnFailure();
    }

} else {
    returnFailure();
}
?>