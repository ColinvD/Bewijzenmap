draw_set_font(font_Points);
draw_text_colour(10,0,player.currentPoints,c_red,c_white,c_dkgray,c_blue,1);
if (player.currentLives >= 3){
    draw_sprite_ext(spr_Health, 0, 0, 30, 1, 1, 0, c_white, 1);
    draw_sprite_ext(spr_Health, 0, 30, 30, 1, 1, 0, c_white, 1);
    draw_sprite_ext(spr_Health, 0, 60, 30, 1, 1, 0, c_white, 1);
}
if (player.currentLives == 2){
    draw_sprite_ext(spr_Health, 0, 0, 30, 1, 1, 0, c_white, 1);
    draw_sprite_ext(spr_Health, 0, 30, 30, 1, 1, 0, c_white, 1);
}
if (player.currentLives == 1){
    draw_sprite_ext(spr_Health, 0, 0, 30, 1, 1, 0, c_white, 1);
}
