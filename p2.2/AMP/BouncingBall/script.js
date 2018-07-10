const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var ball = new Point(100,100,20,"#ff0000");
let position = new Vector(200,200);
let velocity = new Vector(1,2);
let acceleration = new Vector(0,1);

function drawing() {
  requestAnimationFrame(drawing);
  context.clearRect(0,0,800,450);
  ball.x = position.dx;
  ball.y = position.dy;
  position.add(velocity);
  velocity.add(acceleration);
  if(position.dx<0 || position.dx>800){
    velocity.dx = -velocity.dx;
  }if(position.dy<0 || position.dy>450){
    velocity.dy = -velocity.dy;
  }
  ball.draw();
}

drawing();
