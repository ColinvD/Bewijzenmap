// Zorgt ervoor dat de game daadwerkelijk willekeurige waardes gebruikt.
// (Zie de Game Maker handleiding.)
currentLives = 3;
randomize();

// Beweegsnelheid:
moveSpeed = 1;

// Tijd voordat de vijand van richting verandert (2 sec.):
moveTime = 2 * room_speed;
moveTimeCurrent = moveTime;

// De richting waarin de vijand beweegt:
// 0 = links, 1 = rechts, 2 = omhoog, 3 = omlaag
moveDirection = floor(random(4)); // Resultaat = Getal tussen 0 en 3

shootTimeCurrent = (floor(random(3))+1) * room_speed;
