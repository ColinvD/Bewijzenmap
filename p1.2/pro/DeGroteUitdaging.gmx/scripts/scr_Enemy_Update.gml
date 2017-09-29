// Aftellen van beweegtijd:
if (moveTimeCurrent > 0)
{ moveTimeCurrent--; }
else
{
    // Zodra de tijd om is, bepaal de nieuwe richting.
    // Zet de tijd weer op zijn oorspronkelijke waarde.
    moveDirection = floor(random(4));
    moveTimeCurrent = moveTime;
}

// Voer de beweging in de huidige richting uit:
if      (moveDirection == 0) // Links
{ 
    x -= moveSpeed; 
    image_angle = point_direction(x, y, x-1, y)-90;
}
else if (moveDirection == 1) // Rechts
{ 
    x += moveSpeed; 
    image_angle = point_direction(x, y, x+1, y)-90;
}
else if (moveDirection == 2) // Omhoog
{ 
    y -= moveSpeed;
    image_angle = point_direction(x, y, x, y-1)-90;
}
else if (moveDirection == 3) // Omlaag
{ 
    y += moveSpeed; 
    image_angle = point_direction(x, y, x, y+1)-90;
}

if (shootTimeCurrent > 0)
    { shootTimeCurrent--; }
else
{
    shootTimeCurrent = (floor(random(3))+1) * room_speed;;
    var enemybullet = instance_create(x,y, obj_Bullet_Enemy);
    enemybullet.image_angle = image_angle;
}
    
