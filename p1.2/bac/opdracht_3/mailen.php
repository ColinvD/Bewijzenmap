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
<form method="post" action="process_mailen.php">
    <p>Onderwerp:</p>
    <input type="text" name="subject" />
    <p>Bericht:</p>
    <textarea cols="50" rows="10" name="message"></textarea>
    <input type="submit" name="submit" value="verstuur" />
</form>
<a href="index.php">terug</a>
</body>
</html>