var platformAmount = instance_number(obj_Platform);
var platform = noone;

jump = true;
for (var i = 0; i < platformAmount; i++)
{
    platform = instance_find(obj_Platform, i);
    
    if
    (
        bbox_top <= platform.bbox_bottom &&
        bbox_bottom >= platform.bbox_top &&
        bbox_right >= platform.bbox_left &&
        bbox_left <= platform.bbox_right
    )
    {
        if (bbox_bottom - (y - yPrevious) <= platform.bbox_top)
        {
            //from top:
            y = platform.bbox_top - sprite_height;
            jumpForceCurrent = 0;
            jump = false;
        }
        else if(bbox_top - (y - yPrevious) >= platform.bbox_bottom)
        {
            //from bottom:
            y = platform.bbox_bottom;
            jumpForceCurrent = 0;
        }
        else if(bbox_left - (x - xPrevious) >= platform.bbox_right)
        {
            //from right:
            x = platform.bbox_right;
            moveSpeedCurrent = 0;
        }
        else if(bbox_right - (x - xPrevious) <= platform.bbox_left)
        {
            //from left:
            x = platform.bbox_left - sprite_width;
            moveSpeedCurrent = 0;
        }
    }
}

if (x > room_width){
    show_message("You win!!!!");
    game_end();
}
if (y > room_height){
    show_message("You Died start over");
    x = 96;
    y = 1088;
    moveSpeed = 0.5;
    moveSpeedMax = 10;
}
if (collision_circle(x,y,32,obj_Pickup_Speed,false,true)){
    moveSpeed = 1;
    moveSpeedMax = 20;
}
if (collision_circle(x,y,32,obj_Pickup_Slow,false,true)){
    moveSpeed = 0.5;
    moveSpeedMax = 10;
}
