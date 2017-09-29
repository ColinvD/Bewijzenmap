<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Process nieuwsbrief</title>
</head>
<body>
<h1>Process nieuwsbrief</h1>
<?php

    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = '22950@ma-web.nl';

    $dbc = mysqli_connect('localhost', '22950', 'eqmwxjlt', '22950_crud_mg1a') or die('ERROR connection');
    $query = "SELECT * FROM maillist";
    $result = mysqli_query($dbc,$query) or die('Error querying');

    while($row = mysqli_fetch_array($result)) {
        $to = $row['mailadres'];
        mail($to,$subject,$message,'From:' . $from);
        echo 'Mail verzonden naar ' . $to . '<br>';
    }

    mysqli_close($dbc);

?>
<a href="mailen.php">terug</a>
</body>
</html>