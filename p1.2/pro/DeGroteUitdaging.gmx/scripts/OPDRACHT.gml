/*


Je mag GEEN gebruik maken van drag-and-drop functionaliteiten. (Met uitzondering
van "Execute Script") Alles moet worden uitgewerkt in scripts!

100 punten kunnen behaald worden, bestaande uit de volgende onderdelen.



================== Basis Punten ================== klaar(8/14) bijna (1/14) bezig(1/14) maybe (1/14) niet (3/14)
(3,6,7,11,12,14)
1.[ 3 punten] klaar - De speler moet kunnen bewegen en schieten.
2.[ 2 punten] klaar - De speler en vijanden mogen 3x geraakt kunnen worden door kogels.
                Daarna verdwijnen ze. (Levenspunten)
3.[ 3 punten] bijna - Zodra de speler of alle vijanden in het level gedood zijn, ga je naar het
                "GAME OVER" scherm.
4.[ 2 punten] klaar - Zodra de speler een vijand aanraakt, is de speler meteen dood.

5.[ 3 punten] klaar - Je past op een zinvolle manier OVERERVING toe. (Parent/Child)
6.[ 2 punten] bezig - Je scripts hebben een logische naam en zijn op een nette wijze georganiseerd.

7.[ 5 punten] niet - Kogels verdwijnen als ze een speler, een vijand of muren raken. Kogels
                moeten over water kunnen vliegen.
                
8.[ 5 punten] klaar - De vijanden schieten één keer om de x-hoeveelheid tijd.
                (OPTIONEEL: Ter variatie kunnen de vijanden één keer tussen 1 en 3 seconden
                schieten OF elke seconde bepalen of ze schieten of niet (random).)

9.[ 5 punten] klaar - Vijanden mogen elkaar niet neer kunnen schieten. De kogels van vijanden mogen
                dus door/over de vijanden heen gaan.

10.[ 5 punten] klaar - De levens EN punten van de speler moeten altijd zichtbaar zijn. (Interface)
                Per gedoode vijand krijgt de speler een hoeveelheid punten.

11.[ 5 punten] maybe - De richting waarin de speler en vijanden bewegen moet de richting van hun
                sprite bepalen. (Draw Event - Custom Drawing!)
                (Omhoog bewegen = Omhoog kijken, links bewegen = links kijken, etc...)


12.[10 punten] niet - De speler en vijanden mogen niet door muren of over water kunnen bewegen.

13.[10 punten] klaar - De speler en de vijanden moeten in de richting kunnen schieten waarin zij
                naartoe bewegen/kijken. Als de speler of een vijand schiet, moet de kogel
                vóór de tank gespawned worden. (NIET EROP!)

14.[10 punten] niet - Er moet een KLEINE kans bestaan dat vijanden een extra levenspunt op de grond
                laten vallen als zij doodgaan. Deze levenspunt kan zowel door vijanden als
                door de speler worden opgepakt.


================== Extra Punten ================== niet(3/3)(15,16,17)

15.[10 punten] niet

Het spel bevat 5 levels, je moet zelf dus nog 4 extra levels maken waarin alle elementen van
de game terugkomen: Een speler, een paar vijanden en muren/water om het level in te richten.
Alles moet nog steeds correct functioneren zoals in het eerste level! Zodra alle vijanden in
een level dood zijn, gaat de speler naar het volgende level. Als het laatste level gehaald is,
wordt het "GAME OVER" scherm getoond.
(OPTIONEEL: Maak gebruik van de tileset "Woods" om bos toe te voegen zoals in Level 1.)


16.[10 punten] niet

Je maakt de game speelbaar voor 2 spelers door middel van splitscreen (views) toe te passen.
De spelers delen samen de score maar hebben allebei hun eigen hoeveelheid levens. Elke speler
moet de gezamenlijk behaalde punten en eigen levens op zijn/haar eigen scherm kunnen zien.
Het spel eindigt pas als BEIDE spelers dood zijn.


17.[10 punten] niet

Aan het einde van elk level wordt de huidige score meegenomen naar het volgende level. Zorg
er dus voor dat de huidige score tijdelijk wordt opgeslagen en kan worden geladen. (SAVE/LOAD)
Als de speler dood is of alle levels gehaald zijn wordt het "GAME OVER" scherm getoond waarin
de behaalde score van de speler wordt weergegeven. Tevens wordt in dit scherm een HIGHSCORE
lijst getoond waarin de top-10 hoogste scores getoond worden. De score van de speler wordt dus
in de HIGHSCORE-lijst opgenomen als de score van de speler hoog genoeg is.




*/
