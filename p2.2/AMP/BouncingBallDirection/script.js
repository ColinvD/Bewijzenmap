const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var ball = new Point(100,100,20,"#ff0000");
let position = new Vector2(200,200);
let velocity = new Vector2(2,3);
let acceleration = new Vector2(0,1);
let Epoty = 450 - position.dy;
//let Epotx = 800 - position.dx;
let size = 100;
let balls = [size];
let velocitys = [size];
let accelerations = [size];
let positions = [size];

for (var i = 0; i < size; i++) {
  balls[i] = new Point(Math.floor((Math.random() * 100) + 1),Math.floor((Math.random() * 100) + 1),20,"#ff0000");
  positions[i] = new Vector2(Math.floor((Math.random() * 400) + 1), Math.floor((Math.random() * 100) + 1));
  velocitys[i] = new Vector2(Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1));
  accelerations[i] = new Vector2(0,Math.floor((Math.random() * 5) + 1));
}

function drawing() {
  requestAnimationFrame(drawing);
  context.clearRect(0,0,800,450);
  for (var i = 0; i < size; i++) {
    balls[i].x = positions[i].dx;
    balls[i].y = positions[i].dy;
    positions[i].add(velocitys[i]);
    velocitys[i].add(accelerations[i]);
    if(positions[i].dx<0 || positions[i].dx>800){
      //velocitys[i].dx = Math.sqrt(2*Epotx);
      velocitys[i].dx = -velocitys[i].dx;
    }if(positions[i].dy<0 || positions[i].dy>450){
      velocitys[i].dy = Math.sqrt(3*Epoty);
      velocitys[i].dy = -velocitys[i].dy;
    }
    balls[i].draw();
    velocitys[i].draw(context, balls[i].x, balls[i].y, 5);
  }
}

drawing();
