<?php
/**
 * Created by PhpStorm.
 * User: vanDo
 * Date: 13-3-2017
 * Time: 12:18
 */
function dobbelsteen($worp){
    $im = @imagecreate(200,200) or die("Cannot Initialize new GD image stream");
    $background_color = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));

    $color1 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color2 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color3 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color4 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color5 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color6 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    $color7 = imagecolorallocate($im, random_int(0, 255),random_int(0, 255),random_int(0, 255));
    /*
    $punt1 = imagefilledellipse($im, 50, 50, 40, 40, $color1);
    $punt2 = imagefilledellipse($im, 50, 100, 40, 40, $color2);
    $punt3 = imagefilledellipse($im, 50, 150, 40, 40, $color3);
    $punt4 = imagefilledellipse($im, 100, 100, 40, 40, $color4);
    $punt5 = imagefilledellipse($im, 150, 50, 40, 40, $color5);
    $punt6 = imagefilledellipse($im, 150, 100, 40, 40, $color6);
    $punt7 = imagefilledellipse($im, 150, 150, 40, 40, $color7);
    */
    switch ($worp)
    {
        case "1": imagefilledellipse($im, 100, 100, 40, 40, $color4); break;
        case "2":
            imagefilledellipse($im, 50, 50, 40, 40, $color1);
            imagefilledellipse($im, 150, 150, 40, 40, $color7);
            break;
        case "3":
            imagefilledellipse($im, 50, 50, 40, 40, $color1);
            imagefilledellipse($im, 100, 100, 40, 40, $color4);
            imagefilledellipse($im, 150, 150, 40, 40, $color7);
            break;
        case "4":
            imagefilledellipse($im, 50, 50, 40, 40, $color1);
            imagefilledellipse($im, 50, 150, 40, 40, $color3);
            imagefilledellipse($im, 150, 50, 40, 40, $color5);
            imagefilledellipse($im, 150, 150, 40, 40, $color7);
            break;
        case "5":
            imagefilledellipse($im, 50, 50, 40, 40, $color1);
            imagefilledellipse($im, 50, 150, 40, 40, $color3);
            imagefilledellipse($im, 100, 100, 40, 40, $color4);
            imagefilledellipse($im, 150, 50, 40, 40, $color5);
            imagefilledellipse($im, 150, 150, 40, 40, $color7);
            break;
        case "6":
            imagefilledellipse($im, 50, 50, 40, 40, $color1);
            imagefilledellipse($im, 50, 100, 40, 40, $color2);
            imagefilledellipse($im, 50, 150, 40, 40, $color3);
            imagefilledellipse($im, 150, 50, 40, 40, $color5);
            imagefilledellipse($im, 150, 100, 40, 40, $color6);
            imagefilledellipse($im, 150, 150, 40, 40, $color7);
            break;
        default :
            return "error";
            break;
    }

    imagepng($im, "$worp". ".png");
    imagedestroy($im);
}



function analyse($worpen){//lustellers

    $aScore = array (0,0,0,0,0,0,0);//init op 0

    for ($i = 1 ; $i <= 6 ; $i++){//outer loop
        for ($j = 0 ; $j <5 ; $j++){//inner loop

            if ($worpen[$j] == $i){

                $aScore[$i]++;

            }}}

    //print "<p>" . $aScore[0] . $aScore[1] . $aScore[2] . $aScore[3] . $aScore[4] . $aScore[5] . $aScore[6] . "</p>";
    return $aScore; //$aScore is een lokale var.

    //via return komt de array 'buiten de functie'
}

function score($aScore, $worpen)
{
    rsort($aScore);
    if($aScore[0] == 5){
        return "poker";
    }
    if($aScore[0] == 4){
        return "carr&eacute";
    }
    if($aScore[0] == 3){
        if($aScore[1] == 2){
            return "full house";
        }
        else
            return "3 of a kind";
    }
    if($aScore[0] == 2){
        if ($aScore[1] == 2){
            return "2 pairs";
        }
        else
            return "1 pair";
    }
    if($aScore[0] == 1){
        if($aScore[1] ==1){
            if($aScore[2] ==1){
                if($aScore[3] ==1){
                    if($aScore[4] ==1){
                        return "small street";
                    }
                }
            }
        }
    }
    else
        return "error";
}



//hoofdprogramma======================================
$worp = rand(1 , 6) ; //1e steen
dobbelSteen($worp);
print "<img src=$worp.png?".date("U") .">&nbsp;";
$worp2 = rand(1 , 6) ; //2e steen
dobbelSteen($worp2);
print "<img src=$worp2.png?".date("U").">&nbsp;";
$worp3 = rand(1 , 6) ; //3e steen
dobbelSteen($worp3);
print "<img src=$worp3.png?".date("U").">&nbsp;";
$worp4 = rand(1 , 6) ; //4e steen
dobbelSteen($worp4);
print "<img src=$worp4.png?".date("U").">&nbsp;";
$worp5 = rand(1 , 6) ; //5e steen
dobbelSteen($worp5);
print "<img src=$worp5.png?".date("U").">&nbsp;";
$worpen = [$worp, $worp2, $worp3, $worp4, $worp5];
sort($worpen);
$aScore = analyse($worpen);
$Resultaat = score($aScore, $worpen);
print "<p>" . $Resultaat . "</p>";
//print "<p>" . $worpen[0] . $worpen[1]. $worpen[2] . $worpen[3] . $worpen[4] . "</p>";
print '<form action="./"><input type="submit" value="retry" /></form>';
?>