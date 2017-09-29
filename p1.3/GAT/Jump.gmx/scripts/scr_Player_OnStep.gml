//gravity
if(y + sprite_height < room_height)
{
    jumpForceCurrent += jumpGravity;
    jump = true;
}
else
{
    jumpForceCurrent = 0;
    y = room_height - sprite_height;
    jump = false;
}


//Jumping
if (!jump)
{
    if (keyboard_check(vk_space) || keyboard_check(ord('W')) || keyboard_check(vk_up))
    {
        jumpForceBuildUp += jumpForceCharge;
        if(jumpForceBuildUp >= jumpForce)
        {
            jumpForceBuildUp = jumpForce;
        }
        //jumpForceCurrent -= jumpForce;
        //jump = true;
    }
    else if(keyboard_check_released(vk_space))
    {
        if(jumpForceBuildUp <= jumpForceMinimum)
        {
            jumpForceBuildUp = jumpForceMinimum;
        }
        jumpForceCurrent -= jumpForceBuildUp;
        jumpForceBuildUp = 0;
    }
}


//Movement
if(keyboard_check(ord('A')) || keyboard_check(vk_left))
{
    moveSpeedCurrent -= moveSpeed;
    if (moveSpeedCurrent <= -moveSpeedMax){
        moveSpeedCurrent = -moveSpeedMax;
    }
}
else if (keyboard_check(ord('D')) || keyboard_check(vk_right))
{
    moveSpeedCurrent += moveSpeed;
    if (moveSpeedCurrent >= moveSpeedMax){
        moveSpeedCurrent = moveSpeedMax;
    }
}
else
{
    moveSpeedCurrent *= moveSpeedDecFactor;
    if(moveSpeedCurrent >= -moveSpeed && moveSpeedCurrent <= moveSpeed){
        moveSpeedCurrent = 0;
    }
}

x += moveSpeedCurrent;
y += jumpForceCurrent;
