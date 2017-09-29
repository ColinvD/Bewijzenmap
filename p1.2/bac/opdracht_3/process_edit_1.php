<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Process Edit 1</title>
</head>
<body>
<h1>Process Edit 1</h1>
<?php
    $id = $_POST['id'];
    $mailadres = $_POST['mailadres'];
    $naam = $_POST['naam'];
    echo $mailadres;
?>
<form method="post" action="process_edit_2.php">
    <input type="hidden" name="id" value="<?php echo $id; ?>" />
    <input type="text" name="mailadres" value="<?php echo $mailadres; ?>" />
    <input type="text" name="naam" value="<?php echo $naam; ?>" />
    <input type="submit" name="submit" value="save" />
</form>
<a href="beheren.php">terug</a>
</body>
</html>