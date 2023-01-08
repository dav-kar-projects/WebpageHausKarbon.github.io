<?php
  session_start();
  $to = "youremail@example.com";
  $from = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
  } else {
    mail($to,$subject,$message,$from);
    echo "Email sent!";
  }
?>