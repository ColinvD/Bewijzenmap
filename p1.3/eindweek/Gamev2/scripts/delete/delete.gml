if (timecurrent < time){
	timecurrent++;
	size -= 0.1;
	depth += 1.5;
}
var allinstances = instance_nearest(x, y, target);
var raak = collision_rectangle(sprite2.x,sprite2.y,sprite_width,sprite_width, allinstances, false, false);
if(raak && depth >= raak.depth){
	instance_destroy(raak);
	instance_destroy();
} else if(timecurrent >= time){
	instance_destroy();
}