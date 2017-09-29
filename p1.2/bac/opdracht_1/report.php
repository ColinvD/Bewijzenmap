<!DOCTYPE html>
<html>
<head>
  <title>>Aliens abducted me</title>
</head>
<body>
  <h2>Aliens abducted me - Report an abduction</h2>
  <?php
  $firstname    = $_POST['firstname'];
  $middlename = $_POST['middlename'];
  $lastname = $_POST['lastname'];
  $fangspotted = $_POST['fangspotted'];
  $eigenschap = $_POST['eigenschap'];
   $other        = $_POST['other'];
   $email = $_POST['email'];
   $types = $_POST['types'];
   $to='22950@ma-web.nl';
   $subject='Abduction Report';
   $msg= "Hello $firstname, this is your confirmation e-mail. When we asked you ".
   "whether you had seen our dog Fang, you said $fangspotted".
   "Apart from that you told us this: $other";
   $from = $_POST['email'];
   echo 'Thanks for submitting the form.<br>';
   echo 'Your first name is ' . $firstname . '<br>';
   echo 'Your middle name is ' . $middlename . '<br>';
   echo 'Your last name is ' . $lastname . '<br>';
   echo 'When I asked you if you had spotted Fang you said ' . $fangspotted . '<br>';
   echo 'The characteristics of the dog you have seen are ' . $eigenschap . '<br>';
   echo 'Other stuff you said: ' . $other . '<br>';
   echo 'Your email is ' . $email . '<br>';
   echo 'The dog type you have seen is ' . $types . '<br>';
   mail($to, $subject, $msg, 'From: '. $from);
   ?>
 </body>
 </html>
