// Opdracht A

image_speed = 0;

randomize();
image_index = floor(random(sprite_get_number(spr_Gems)));


// Maak hier het puntenlijstje "pointsArray" af.
// Minimaal 5 verschillende puntenwaardes:

// pointsArray
pointsArray[0] = "gem1";
pointsArray[1] = "gem2";
pointsArray[2] = "gem3";
pointsArray[3] = "gem4";
pointsArray[4] = "gem5";


points = pointsArray[irandom(array_length_1d(pointsArray)-1)];
// points = ... (een willekeurig aantal uit het punten lijstje)
show_message(points);

