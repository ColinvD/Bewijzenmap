<?php
$a[] = "Anna";
$a[] = "Colin";
$a[] = "Jason";
$a[] = "Peter";
$a[] = "Xander";
$a[] = "Yvon";
$a[] = "Coen";
$a[] = "Dirk";
$a[] = "Bo";
$a[] = "Erik";
$a[] = "Fiona";
$a[] = "Gerard";
$a[] = "Hans";
$a[] = "Ingrid";
$a[] = "Nancy";
$a[] = "Anneke";
$a[] = "Jan";
$a[] = "Mieke";
$a[] = "Oscar";
$a[] = "Karel";
$a[] = "Lars";
$a[] = "Quinta";
$a[] = "Ronald";
$a[] = "Steven";
$a[] = "Tristan";
$a[] = "Uba";
$a[] = "Vera";
$a[] = "Wilson";
$a[] = "Zane";
$a[] = "Nikita";
$a[] = "Robin";
$a[] = "Yassir";
$a[] = "Thijs";

$q = $_REQUEST["q"];

$hint = "";

if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach ($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if($hint === ""){
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

echo $hint === "" ? "no suggestion" : $hint;
 ?>
