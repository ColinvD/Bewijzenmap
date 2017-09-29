if(collision_circle(x,y,10,obj_Bullet_Enemy,false,true)){
    
    if(currentLives >0){
        currentLives--;
        currentPoints -= 20;
        show_message("leven eraf");
        }
    if(currentLives <=0){
        room_goto(GameOver);
        }
}
if(collision_circle(x,y,10,obj_Enemy,false,true)){
    currentLives -= 3;
    show_message("Dood");
    room_goto(GameOver);
}
