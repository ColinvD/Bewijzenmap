if keyboard_check(ord("W")){
    y -= moveSpeed;
    image_angle = point_direction(x, y, x, y-1)-90;
}
if keyboard_check(ord("D")){
    x += moveSpeed;
    image_angle = point_direction(x, y, x+1, y)-90;
}
if keyboard_check(ord("S")){
    y += moveSpeed;
    image_angle = point_direction(x, y, x, y+1)-90;
}
if keyboard_check(ord("A")){
    x -= moveSpeed;
    image_angle = point_direction(x, y, x-1, y)-90;
}
if keyboard_check_pressed(vk_space){
    var bullet;
    var bulletx = x;
    var bullety = y;
    if (image_angle == 0){
        bullety -= 20;
    } 
    if (image_angle == -90){
        bulletx += 20;
    }
    if (image_angle == 180){
        bullety += 20;
    }
    if (image_angle == 90){
        bulletx -= 20; 
    }
    bullet = instance_create(bulletx, bullety, obj_Bullet);
    bullet.image_angle = image_angle;
    bullet.player = self;
}

