<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Beheren</title>
</head>
<body>
<h1>Beheren</h1>
<table>
    <?php

    $dbc = mysqli_connect('localhost', '22950', 'eqmwxjlt', '22950_crud_mg1a') or die('ERROR connection');
    $query = "SELECT * FROM maillist";
    $result = mysqli_query($dbc,$query) or die('Error querying');

    while($row = mysqli_fetch_array($result)) {
        $id = $row['id'];
        $mailadres = $row['mailadres'];
        $naam = $row['naam'];
        echo '<tr>';
        echo '<td>' . $row['id'] . '</td>';
        echo '<td>' . $row['mailadres'] . '</td>';
        echo '<td>' . $row['naam'] . '</td>';
        echo '<td>';
        echo '<form method="post" action="process_edit_1.php" >';
        echo '<input type="hidden" name="id" value="' . $id . '"/>';
        echo '<input type="hidden" name="mailadres" value="' . $mailadres . '"/>';
        echo '<input type="hidden" name="naam" value="' . $naam . '"/>';
        echo '<input type="submit" name="submit" value="edit" />';
        echo '</form>';
        echo '</td>';
        echo '</tr>';
    }

    mysqli_close($dbc);

    ?>
</table>
<a href="index.php">terug</a>
</body>
</html>