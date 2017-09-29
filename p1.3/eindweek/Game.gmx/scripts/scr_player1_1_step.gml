//Movement
x = mouse_x;
y = mouse_y;

if(mouse_check_button_pressed(mb_left)){
    instance_create(x,y,obj_projectile);
}
//COLLISION WALL

//HORIZONTAL
if (x > room_width - sprite_width) 
{
    x = room_width - sprite_width ; //RIGHT
}
else if (x < 0 + sprite_width) 
{
    x = 0 + sprite_width; //LEFT
}

//VERTICAL
if (y > room_height - sprite_height) 
{
    y = room_height - sprite_height ; //DOWN
}
else if (y < 0 + sprite_height) 
{
    y = 0 + sprite_height; //UP
}
