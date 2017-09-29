//Movement

if keyboard_check(vk_right) 
{
    x += horizontalSpeed; //Right
}

if keyboard_check(vk_left)
{
    x -= horizontalSpeed; //Left
}

if keyboard_check(vk_up)
{
    y -= verticalSpeed; //Up
}

if keyboard_check(vk_down)
{
    y += verticalSpeed; //Down
}

if(keyboard_check_pressed(vk_enter)){
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
if (y > room_height - sprite_height - 50) 
{
    y = room_height - sprite_height -50; //DOWN
}
else if (y < 0 + sprite_height +50) 
{
    y = 0 + sprite_height + 50; //UP
}
