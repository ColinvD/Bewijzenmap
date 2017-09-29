//Movement

if(keyboard_check(ord('D')) ) 
{
    x += horizontalSpeed; //Right
}

if(keyboard_check(ord('A')) ) 
{
    x -= horizontalSpeed; //Left
}

if(keyboard_check(ord('W')) ) 
{
    y -= verticalSpeed; //Up
}

if(keyboard_check(ord('S')) ) 
{
    y += verticalSpeed; //Down
}
if(keyboard_check_pressed(vk_space)){
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
if (y > room_height - sprite_height-50) 
{
    y = room_height - sprite_height -50; //DOWN
}
else if (y < 0 + sprite_height + 50) 
{
    y = 0 + sprite_height +50; //UP
}
