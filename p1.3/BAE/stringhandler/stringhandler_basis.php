<!DOCTYPE html>
<html lang="nl">
	 <head>
		<meta charset="utf-8">
		<meta name="description" content="scripting GD">
		<meta name="author" content="Ma">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="style.css">
		<title>PHP String handler</title>
	</head>
	 <body>
		 <?php
		 if ( !empty($_GET)) {
				 $input1 =  $_GET['input1']; // input uit html
				 $input2 =  $_GET['input2']; // input uit html
			 }
			else{
				 $input1 = ""; //lege string
				 $input2 = ""; //lege string
			 }
		  ?>
		<div class="wrapper">
			<form method="GET" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
				<fieldset>
				 <legend>Zet hier jouw naam + klas</legend>
				 <input type = "text" name = "input1"  placeholder = "string 1"><br>
				 <input type = "text" name = "input2"   placeholder = "string 2">
				 <input type = "submit"  id = "submit" name = "submit" value = "submit">
			 </fieldset>
			</form>
			<hr>
			<?php

			?><ul>
				<li>Ingevoerde string 1:  <?php  echo $input1;  ?> </li>
				<li>Ingevoerde string 2:  <?php  echo $input2;  ?> </li>
				<li>String 1 getrimd trim():  <?php $input1 = trim($input1); echo $input1; ?> </li>
                <li>String 2 getrimd trim():  <?php $input2 = trim($input2); echo $input2; ?> </li>
                <li>String 3 String 1 en String 2 bij elkaar:  <?php $input3 =  $input1 . $input2; echo $input3; ?></li>
                <li>De lengte van string 3 is:  <?php echo strlen($input3); ?></li>
                <li>Spaties zoeken. Op positie(s) <?php echo strpos($input3, " "); ?> zit een spatie.</li>
                <li>@ zoeken. Op positie(s) <?php echo strpos($input3, "@"); ?> zit een @.</li>
                <li>. zoeken. Op positie(s) <?php echo strpos($input3, "."); ?> zit een . .</li>







                <li>Het woord "html" word vervangen door "PHP". <?php echo str_replace("html", "PHP", $input3); ?></li>
                <li>Eerste letter word hoofdletter uit string 3. <?php echo ucfirst($input3); ?></li>
                <li>Alles hoofdletters. <?php echo strtoupper($input3); ?></li>
				</ul>
				<hr>
				<h4>Bonus opdracht: maak code waarmee jij controleert of een input een geldig e-mail adres is</h4>
				<h4>Bonus opdracht: na submitten form, schrijf de eerder ingevoerde strings terug met PHP</h4>
			</div>
	 </body>
</html>
