//Initialize
array [0] = 0;
array [1] = 238;
array [2] = 476;
array [3] = 714;
array [4] = 952;
//[0,238,476,714]
//Spawning
var EnemyAmount = instance_number(obj_target);

if(!EnemyFull && EnemyAmount < 16 )
{
    for(j = 0; j < 2; j++;){
    
        for(i = 0; i < 4; i++; )
        {
            RandomSpawnerX = array[i];
            RandomSpawnerY = spawn1;
            instance_create(RandomSpawnerX, RandomSpawnerY, obj_target);
            //draw_rectangle_colour(obj_target.x, obj_target.y, obj_target.bbox_right, obj_target.bbox_bottom, c_red, c_red, c_red, c_red, false);
        }
        for(i = 0; i < 4; i++; )
        {
            RandomSpawnerX = array[i];
            RandomSpawnerY = spawn2;
            instance_create(RandomSpawnerX, RandomSpawnerY, obj_target);
            //draw_rectangle_colour(obj_target.x, obj_target.y, obj_target.bbox_right, obj_target.bbox_bottom, c_red, c_red, c_red, c_red, false);
        }
    }
}


if(EnemyAmount >= 16)
{
    EnemyFull = true;
}
