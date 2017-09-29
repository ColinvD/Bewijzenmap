// OPDRACHT A + B:


view_enabled = true;
view_visible[0] = true;
view_xview[0] = 0;
view_yview[0] = 0;
view_wview[0] = room_width;
view_hview[0] = room_height;

view_xport[0] = 0;
view_yport[0] = 0;
view_hport[0] = room_height;
view_wport[0] = room_width;

view_visible[1] = true;
view_xview[1] = 300;
view_yview[1] = 300;
view_wview[1] = 100;
view_hview[1] = 100;


view_xport[1] = 0;
view_yport[1] = 0;
view_hport[1] = 200;
view_wport[1] = 200;

view_object[1] = instance_find(obj_Player, 0);

view_visible[2] = false;
if (mouse_check_button(mb_left)){
view_visible[2] = true;
view_xview[2] = mouse_x - 45;
view_yview[2] = mouse_y - 45;
view_wview[2] = 100;
view_hview[2] = 100;


view_xport[2] = room_width - 200;
view_yport[2] = 0;
view_hport[2] = 200;
view_wport[2] = 200;
}
