var woord1 = ["Ik ", "Jij ", "Hij ", "Zij ", "Wij ", "Jullie "];
var woord2 = ["heb ", "had ", "ben ", "was "];
var woord3 = ["jarig.", "gespeeld.", "gegamed", "woedend."];
var plaatje = ["http://www.grappigplaatje.nl/wp-content/uploads/2013/09/Grappig-Plaatje-beheerder-team-aan-het-werk.jpg", "http://dierenplaatjes.us/apen/apen01/apen-plaatje023.jpg", "http://www.grappigplaatje.nl/wp-content/uploads/2015/09/Hoeveel-rimpels-staan-er-op-dit-plaatje.jpg"];
//array links naar images
function randomKeuze(localArray =[ ]){ //localArray is een lokale variable
              console.log(localArray);
            let lengte = localArray.length;
            console.log(lengte + "\n");
            let randomNummer = Math.random(); // 0 <= waarde < 1 (dus exclusief
            randomNummer = Math.floor(randomNummer * lengte);
            console.log(localArray[randomNummer]);
            return localArray[randomNummer];
            }
function maakEenTekst(){
            document.getElementById("deel1").innerHTML =randomKeuze(woord1);
            document.getElementById("deel2").innerHTML =randomKeuze(woord2);
            document.getElementById("deel3").innerHTML =randomKeuze(woord3);
            document.getElementById("image").src = randomKeuze(plaatje);
            }
            var nieuw = document.getElementById("knop");
            nieuw.addEventListener("click", maakEenTekst);
