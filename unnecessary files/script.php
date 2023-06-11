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
    $Studios = $_POST['Studios'];
    $Appartments = $_POST['Appartments'];
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
    $rooms = '';
    $language = $_POST['lang'];


if ($language == "de" || $language == "en")  {
  
  if ($Studios ==1){
    $rooms .= "- 1 Studio\n\t";
  }
  else if ($Studios >1){
    $rooms .= "- 2 Studios\n\t";
  }
  
  if($Appartments ==1){
    $rooms .= "- 1 Appartment\n\t";
  }
  
  if($Appartments >1){
    $rooms .= "- $Appartments Appartments\n\t";
  }
} 
if ($language == "it")
{
  if ($Studios ==1){
    $rooms .= "- 1 Studio \n";
  }
  else if ($Studios >1){
    $rooms .= "- 2 Studios \n";
  }
  
  if($Appartments ==1){
    $rooms .= "- 1 Appartamento \n";
  }
  
  if($Appartments >1){
    $rooms .= "- $Appartments Appartamenti \n";
  }

}  
  


if ($language == "de")
{

  if ($children >= 1) {
    $childAges .= " - Kind 1 Alter: $childAge1\n\t";
  }
  
  if ($children >= 2) {
    $childAges .= " - Kind 2 Alter: $childAge2\n\t";
  }
  if ($children >= 3) {
    $childAges .= " - Kind 3 Alter: $childAge3\n\t";
  }
  
  if ($children >= 4) {
    $childAges .= " - Kind 4 Alter: $childAge4\n\t";
  }
  if ($children >= 5) {
    $childAges .= " - Kind 5 Alter: $childAge5\n\t";
  }
  
  if ($children >= 6) {
    $childAges .= " - Kind 6 Alter: $childAge6\n\t";
  }
  if ($message) {
    $message = "- Nachricht:\n\t " . $message . "\n";
  }
  $message2 = $anrede . " " . $last_name . ",
  
  vielen Dank für Ihre Buchungsanfrage. Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden.
    
  Die Details der Buchungsanfrage sind wie folgt:
  - Aufenthalt: " . $formatted_date_from . " bis " . $formatted_date_to . "
  - Gewünschte Zimmer:\n\t". $rooms . "\n- Erwachsene: " . $parents . "
  - Kinder: " . $children . "\n\t" . $childAges . "
  ". $message ."
    
  Mit freundlichen Grüßen,
  Kastelart";

$subject2 = "Kastelart - Buchungsanfrage erhalten";

  
}

if ($language == "it")
{

  if ($children >= 1) {
    $childAges .= " - Bambino 1 Etá: $childAge1\n\t";
  }
  
  if ($children >= 2) {
    $childAges .= " - Bambino 2 Etá: $childAge2\n\t";
  }
  if ($children >= 3) {
    $childAges .= " - Bambino 3 Etá: $childAge3\n\t";
  }
  
  if ($children >= 4) {
    $childAges .= " - Bambino 4 Etá: $childAge4\n\t";
  }
  if ($children >= 5) {
    $childAges .= " - Bambino 5 Etá: $childAge5\n\t";
  }
  
  if ($children >= 6) {
    $childAges .= " - Bambino 6 Etá: $childAge6\n\t";
  }

$message2 = $anrede . " " . $last_name . ",

Grazie mille per la tua richiesta di prenotazione. Abbiamo ricevuto la tua richiesta e ti contatteremo il prima possibile.

I dettagli della richiesta di prenotazione sono i seguenti:
- Soggiorno: " . $formatted_date_from . " fino al " . $formatted_date_to . "
- Camere desiderate: \n" . $rooms . "

- Adulti: " . $parents . "
- Bambini: " . $children . "\n"
.$childAges . " - Messaggio: " . $message . "

Cordiali saluti,
Kastelart";



$subject2 = "Kastelart - Richiesta di prenotazione";



}
if ($language == "en")
{

  if ($children >= 1) {
    $childAges .= " - Child 1 Age: $childAge1\n\t";
  }
  
  if ($children >= 2) {
    $childAges .= " - Child 2 Age: $childAge2\n";
  }
  if ($children >= 3) {
    $childAges .= " - Child 3 Age: $childAge3\n\t";
  }
  
  if ($children >= 4) {
    $childAges .= " - Child 4 Age: $childAge4\n";
  }
  if ($children >= 5) {
    $childAges .= " - Child 5 Age: $childAge5\n\t";
  }
  
  if ($children >= 6) {
    $childAges .= " - Child 6 Age: $childAge6\n";
  }
  $message2 = $anrede . " " . $last_name . ",

Thank you very much for your booking request. We have received your request and will get back to you as soon as possible.

The details of the booking request are as follows:
- Stay: " . $formatted_date_from . " until " . $formatted_date_to . "
- Desired rooms: \n-" . $rooms . "

- Adults: " . $parents . "
- Children: " . $children . "\n"
.$childAges . " - Message: " . $message . "

Best regards,
Kastelart";
$subject2 = "Kastelart - Booking request received";
}

$subject = $last_name . "  : " . $formatted_date_from . " bis " . $formatted_date_to;

$message1 = "
  Wir haben eine neue Buchungsanfrage von " . $first_name . " " . $last_name . " erhalten.
  
  Die Details der Buchung sind wie folgt:
  - Aufenthalt: " . $formatted_date_from . " bis " . $formatted_date_to ."
  - Wohnung: " . $rooms . "
  - Anrede: " . $anrede . " 
  - Name: " . $first_name . " " . $last_name ."
  - E-Mail: " . $email . "
  - Land: " . $country . "
  - Erwachsene: " . $parents . "
  - Kinder: " . $children . "\n"
  . $childAges. "
  ". $message ."
  ";
  

  


    

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message1,$headers);
mail($from,$subject2,$message2,$headers2);
echo "Hello, this is a test message"  ; // sends a copy of the message to the sender
// You can also use header('Location: thank_you.php'); to redirect to another page.

?>
