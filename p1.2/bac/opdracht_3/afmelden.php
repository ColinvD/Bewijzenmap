<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Afmelden</title>
</head>
<body>
    <form method="post" action="process_afmelden.php">
      <p>Uitloggen:</p>
       <input type="email" name="mailadres" />
        <input type="text" name="naam" />
        <input type="submit" name="submit" value="uitschrijven" />
    </form>
    <a href="index.php">terug</a>
</body>
</html>