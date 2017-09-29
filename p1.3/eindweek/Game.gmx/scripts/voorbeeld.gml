/*show_message("hi");
if(keyboard_check(vk_left)){
    x -= 10;
}
if(keyboard_check(vk_right)){
    x += 10;
}
if(keyboard_check(vk_up)){
    y -= 10;
}
if(keyboard_check(vk_down)){
    y += 10;
}
*/
x = mouse_x;
y = mouse_y;
if(mouse_check_button_pressed(mb_left)){
    instance_create(x,y,projectile);
}
