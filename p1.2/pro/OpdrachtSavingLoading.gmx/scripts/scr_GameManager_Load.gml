// OPDRACHT A, B & C:

ini_open("plek.ini");
    horizontaal = ini_read_real("player", "positiex", "UNDENIFINED");
    verticaal = ini_read_real("player", "positiey", "UNDENIFINED");
ini_close();

player.x = horizontaal;
player.y = verticaal;
