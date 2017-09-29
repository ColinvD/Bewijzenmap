/// @description Insert description here
// You can write your code in this editor
switch(action){

	case 0:
		room_goto(players1);
		break;
		
	case 1:
		room_goto(players2);
		break;
	
	case 2:
		game_end();
		break;
		
	case 3:
		room_goto(menu);
		break;
		
	case 4:
		room_goto(how2play);
		break;
}