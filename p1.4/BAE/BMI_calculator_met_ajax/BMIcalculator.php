<?php
		 if ( !empty($_GET)) {
				 $input1 =  $_GET['input1']; // input uit html
				 $input2 =  $_GET['input2']; // input uit html
         $input3 =  $_GET['input3']; // input uit html
         $input4 =  $_GET['input4'];
			 }
			else{
				 $input1 = ""; //lege string
				 $input2 = ""; //lege string
         $input3 = ""; //lege string
         $input4 = "";
			 }
			 $input2 /= 100;
		    $input5 = $input3 / ($input2 * $input2);
		    $input5 = round($input5, 1, PHP_ROUND_HALF_UP);
		    if($input4 == "male"){
					$mv = "Meneer ";
                switch (true){
                    case $input5 <=20:
                        echo "Dit betekent ondergewicht";
                        echo "<body style='background-color: aqua;'>";
                        break;
                    case $input5 >=20 && $input5 <= 25:
                        echo "Dit betekent normaal gewicht";
                        echo "<body style='background-color: green;'>";
                        break;
                    case $input5 >=25 && $input5 <= 30:
                        echo "Dit betekent matig overgewicht";
                        echo "<body style='background-color: orange;'>";
                        break;
                    case $input5 >=30 && $input5 <= 40:
                        echo "Dit betekent obesitas";
                        echo "<body style='background-color: orangered;'>";
                        break;
                    case $input5 >=40:
                        echo "Dit betekent morbide obesitas";
                        echo "<body style='background-color: hotpink;'>";
                        break;
                    default :
                        echo "er is iets fout gegaan";
                        break;
                }
            }
		    else if($input4 == "female"){
					$mv = "Mevrouw ";
                switch (true){
                    case $input5 <=18.6:
                        echo "Dit betekent ondergewicht";
                        echo "<body style='background-color: aqua;'>";
                        break;
                    case $input5 >=18.6 && $input5 <= 23.8:
                        echo "Dit betekent normaal gewicht";
                        echo "<body style='background-color: green;'>";
                        break;
                    case $input5 >=23.9 && $input5 <= 28.5:
                        echo "Dit betekent matig overgewicht";
                        echo "<body style='background-color: orange;'>";
                        break;
                    case $input5 >=28.6 && $input5 <= 40:
                        echo "Dit betekent obesitas";
                        echo "<body style='background-color: orangered;'>";
                        break;
                    case $input5 >=40:
                        echo "Dit betekent morbide obesitas";
                        echo "<body style='background-color: hotpink;'>";
                        break;
                    default :
                        echo "er is iets fout gegaan";
                        break;
                }
            }
		  ?>
<p>Beste <?php echo $mv; echo $input1 ?> jouw BMI is: <?php echo $input5 ?></p>
