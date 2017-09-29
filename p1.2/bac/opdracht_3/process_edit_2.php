<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Process Edit 2</title>
</head>
<body>
<h1>Process Edit 2</h1>
<?php
    $id = $_POST['id'];
    $mailadres = $_POST['mailadres'];
    $naam = $_POST['naam'];

    $dbc = mysqli_connect('localhost', '22950', 'eqmwxjlt', '22950_crud_mg1a') or die('Error connecting');
    $query = "UPDATE maillist
                Set mailadres='$mailadres'
                Where id='$id'";
    $result = mysqli_query($dbc, $query);
    mysqli_close($dbc);
?>
<a href="beheren.php">terug</a>
</body>
</html>