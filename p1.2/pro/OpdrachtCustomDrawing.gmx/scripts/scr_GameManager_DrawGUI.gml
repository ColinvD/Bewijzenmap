// OPDRACHT A:


draw_set_font(font_Points);
draw_text_colour(10,0,player.currentPoints, c_silver, c_aqua, c_green, c_navy, 1);
// Teken hier de score en levens van de speler op het scherm door middel van
// het tekenen van tekst en sprites.


if (player.currentLives ==  3)
{
draw_sprite_ext(spr_Lives, 0, room_width - 40, 50, 1, 1, 0, c_white, 1);
draw_sprite_ext(spr_Lives, 0, room_width - 40, 80, 1, 1, 0, c_white, 1);
draw_sprite_ext(spr_Lives, 0, room_width - 40, 110, 1, 1, 0, c_white, 1);
}
if (player.currentLives == 2)
{
draw_sprite_ext(spr_Lives, 0, room_width - 40, 50, 1, 1, 0, c_white, 1);
draw_sprite_ext(spr_Lives, 0, room_width - 40, 80, 1, 1, 0, c_white, 1);
}
if (player.currentLives == 1)
{
draw_sprite_ext(spr_Lives, 0, room_width - 40, 50, 1, 1, 0, c_white, 1);
}
