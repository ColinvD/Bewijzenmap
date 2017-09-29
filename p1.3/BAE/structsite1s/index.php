<?php
// ------------------------------------------------------------------------
// Maak het onderstaande script werkend:
// Vul de code aan en zorg dat de include-bestanden in de juiste map staan
// ------------------------------------------------------------------------

// hier komen de instellingen van deze web app
include 'views/config.php';

if(!empty($_GET)){
    $page = $_GET['page'];
}
else{
    $page = 'home';
}

// hier komt de head sectie <head> etc.
include 'views/head.php';

// hier komt de header sectie etc.
include 'views/header.php';

// hier komt de navigatie
include 'views/menu.php';

// hier komt de content van de home page

switch ($page){

    case 'contact':
        include 'views/contact.php';
        break;
    case 'about':
        include 'views/about.php';
        break;
    case 'articles':
        include 'views/articles.php';
        break;
    case 'home':
        include 'views/home.php';
        break;

    default:
        echo 'This page is not available';
}


// hier komt de footer
include 'views/footer.php';
?>