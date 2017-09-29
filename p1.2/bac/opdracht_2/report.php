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
   $dbc = mysqli_connect('localhost', '22950_ontvoering', 'Harry', '22950_aliens')
   or die('Error connecting to MySQL server.');

   $query = "INSERT INTO opdrachten(firstname,middlename,lastname,fangspotted,eigenschap,other,email,types)
   VALUES ('$firstname','$middlename','$lastname','$fangspotted','$eigenschap','$other','$email','$types')";
   $result = mysqli_query($dbc, $query) or die('Error querying database.');

   mysqli_close($dbc);
   echo 'Thanks for submitting the form.<br>';
   echo 'Your first name is ' . $firstname . '<br>';
   echo 'Your middle name is ' . $middlename . '<br>';
   echo 'Your last name is ' . $lastname . '<br>';
   echo 'When I asked you if you had spotted Fang you said ' . $fangspotted . '<br>';
   echo 'The characteristics of the dog you have seen are ' . $eigenschap . '<br>';
   echo 'Other stuff you said: ' . $other . '<br>';
   echo 'Your email is ' . $email . '<br>';
   echo 'The dog type you have seen is ' . $types . '<br>';
   ?>
 </body>
 </html>
