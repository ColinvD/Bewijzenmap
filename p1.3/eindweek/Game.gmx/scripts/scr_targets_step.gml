if (!hitWallRight && !hitWallLeft)
{
    if(Random >= 3)
    {
        x += enemyHorizontal;
    }
    else
    {
        x -= enemyHorizontal;
    }
}
else if (hitWallRight)
{
    x -= enemyHorizontal;
}
else if (hitWallLeft)
{
    x += enemyHorizontal;
}



//COLLISION WALL
if (x > room_width - sprite_width) 
{
    hitWallRight = true;
}

if (x < -sprite_width) 
{

    hitWallLeft = true;
    hitWallRight = false;
}
