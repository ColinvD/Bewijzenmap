var yScale = 1 - ((jumpForceBuildUp / jumpForce) * 0.90);
var yOffset = sprite_height * (1 - yScale);
var xScale = 1 + ((jumpForceBuildUp / jumpForce) * 0.90);
var xOffset = (sprite_height * (1 + xScale)) / 2;
//draw_sprite_ext(spr_Player, image_index, x - xOffset, y + yOffset, xScale, yScale, 0, c_white, 1);
draw_sprite(spr_Player, image_index, x,y);

