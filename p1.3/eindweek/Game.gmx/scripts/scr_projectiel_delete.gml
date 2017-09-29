if (timecurrent < time){
    timecurrent++;
    depth += 1.5;
    size -= 0.1;
}
//var allinstances = instance_nearest(x, y, obj_target);
var raak = collision_rectangle(x , y, x + sprite_width, y + sprite_height, obj_target, false, false);
if(raak &&  depth >= raak.depth){
    with(raak){
        instance_destroy();
    }
    instance_destroy();
} else if(timecurrent >= time){
    instance_destroy();
}

