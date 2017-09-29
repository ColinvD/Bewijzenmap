if(collision_circle(x,y,10,obj_Bullet,false,true)){
    if(currentLives >0){
        currentLives--;
    }
    if(currentLives <=0){
        instance_destroy();
        }
}
