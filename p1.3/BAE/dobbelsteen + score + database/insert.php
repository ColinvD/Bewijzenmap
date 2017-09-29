<?php
require_once("db_const.php");
function insertDB($User_Id, $Worp, $Score){
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    #check connection
    if ($mysqli->connect_errno) {
        echo "<p>MySQL error no {$mysqli->connect_errno} : {$mysqli->connect_error}</p>";
        exit();
    }
    $userID = "789";
    $aWorp = array(1, 2, 2, 2, 1);//initialiseer de array voor de test
    $worp = implode($aWorp);//maar van array een string
    $score = "fulle house !!!";
    echo $worp;//debug
    //maak de sql
    $sql = "INSERT INTO dobbel_scores (User_ID , Worp , Score)
        VALUES ('$userID', '$worp', '$score')";
    if ($mysqli->query($sql) === TRUE) {
        echo "<br>update succesvol<br>";
        echo $sql;//debug
    } else {
        echo "<br>Error: " . $sql . "<br>" . $mysqli->error;
    }
    $mysqli->close(); // save resources
}
?>