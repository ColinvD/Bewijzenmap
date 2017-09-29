if (keyboard_check_pressed(vk_enter))
{
    effect_create_above(ef_spark, 50, 50, 2, c_aqua);
    audio_play_sound(snd_Piano, 1, false);
}
draw_set_colour(c_black)
if (keyboard_check_pressed(vk_right))
{
if room_exists(room_next(room)) room_goto_next();
}
if (keyboard_check_pressed(vk_left))
{
if room_exists(room_previous(room)) room_goto_previous();
}
