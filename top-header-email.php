<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];
    $to = 'info@bellbizzer.com';
    $subject = 'Subscribe From Website';
    $headers .= 'From: <'.$email.'>' . "\r\n";
    $send_email = mail($to,$subject,$email,$headers);

    return ($send_email) ? 'success' : 'error';

}
else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}



?>