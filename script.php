<?php
    $to = "david.karbon@gmail.com"; // the recipient of the email
    
    $from = $_POST['email']; // the sender's email address
    $ankunft = $_POST['dates'];
    $dates = explode(" bis ", $ankunft);
    $date_from = $dates[0];
    $date_to = $dates[1];

    $formatted_date_from = date("d-m-Y", strtotime($date_from));
    $formatted_date_to = date("d-m-Y", strtotime($date_to));

    $anrede = $_POST['anrede'];
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $country = $_POST['country'];
    $parents = $_POST['adults'];
    $children = $_POST['children'];
    $child1 = $_POST['childAge1'];
    $child2 = $_POST['childAge2'];
    $child3 = $_POST['childAge3'];

    $message = $_POST['message'];

    $children = $_POST['children'];
    $childAge1 = isset($_POST['childAge1']) ? $_POST['childAge1'] : '';
    $childAge2 = isset($_POST['childAge2']) ? $_POST['childAge2'] : '';
    $childAge3 = isset($_POST['childAge3']) ? $_POST['childAge3'] : '';
    $childAge4 = isset($_POST['childAge4']) ? $_POST['childAge4'] : '';
    $childAge5 = isset($_POST['childAge5']) ? $_POST['childAge5'] : '';
    $childAge6 = isset($_POST['childAge6']) ? $_POST['childAge6'] : '';
    $childAges = '';

if ($children >= 1) {
  $childAges .= " - Kind 1 Alter: $childAge1\n";
}

if ($children >= 2) {
  $childAges .= " - Kind 2 Alter: $childAge2\n";
}
if ($children >= 3) {
    $childAges .= " - Kind 3 Alter: $childAge1\n";
}

if ($children >= 4) {
$childAges .= " - Kind 4 Alter: $childAge2\n";
}
if ($children >= 5) {
$childAges .= " - Kind 5 Alter: $childAge1\n";
}

if ($children >= 6) {
$childAges .= " - Kind 6 Alter: $childAge2\n";
}

$subject = $last_name . "  : " . $formatted_date_from . " bis " . $formatted_date_to;
$subject2 = "Buchungsanfrage erhalten";


$message1 = "
Wir haben eine neue Buchungsanfrage von " . $first_name . " " . $last_name . " erhalten.

Die Details der Buchung sind wie folgt:
- Aufenthalt: " . $formatted_date_from . " bis " . $formatted_date_to ."
- Anrede: " . $anrede . " 
- Name: " . $first_name . " " . $last_name ."
- E-Mail: " . $email . "
- Land: " . $country . "
- Erwachsene: " . $parents . "
- Kinder: " . $children . "\n"
. $childAges
. " - Nachricht: " . $message . "
";

    
$message2 = $anrede. " ". $last_name .",

vielen Dank für Ihre Buchungsanfrage. Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden.

Die Details der Buchungsanfrage sind wie folgt:
- Aufenthalt: " . $formatted_date_from . " bis " . $formatted_date_to ."
- Erwachsene: " . $parents . "
- Kinder: " . $children . "\n"
.$childAges . " - Nachricht: " . $message . "


Mit freundlichen Grüßen,
Kastelart";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message1,$headers);
mail($from,$subject2,$message2,$headers2);
echo "Hello, this is a test message."; // sends a copy of the message to the sender
// You can also use header('Location: thank_you.php'); to redirect to another page.

?>
