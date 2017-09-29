<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Document</title>
</head>
<body>
<h1>Process Afmelden</h1>

<?php

$mailadres = $_POST['mailadres'];
$naam = $_POST['naam'];

$dbc = mysqli_connect('localhost', '22950', 'eqmwxjlt', '22950_crud_mg1a') or die('Error connecting');
$query = "DELETE FROM maillist WHERE mailadres= '$mailadres' && naam= '$naam'";
$result = mysqli_query($dbc, $query);
mysqli_close($dbc);

?>
<a href="afmelden.php">terug</a>

</body>
</html>