event_inherited();

if (image_angle == 0){
    y -= moveSpeed;
}
if (image_angle == -90){
    x += moveSpeed;
}
if (image_angle == 180){
    y += moveSpeed;
}
if (image_angle == 90){
    x -= moveSpeed;
}
