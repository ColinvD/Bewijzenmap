const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(400,225);
let direction = new Vector2(1,0);
let velocity = new Vector2(1,0);

let player = new Point(position.dx, position.dy,10,"red");
let bullets = [];

window.addEventListener('keydown', (evt)=>{
  switch (evt.keyCode) {
    case 37:
      velocity.angle -= 0.1;
      break;
    case 38:
      velocity.r += 1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 40:
      velocity.r -= 1;
      break;
    case 32:
    let bullet = {};
    bullet.position = new Vector2(position.dx, position.dy);
    bullet.velocity = new Vector2(velocity.r + 1, 0);
    bullet.velocity.angle = velocity.angle;
    bullet.point = new Point(bullet.position.dx, bullet.position.dy,10);
    bullets.push(bullet);
      console.log(bullets.length);
      break;
    default:

  }
})

function animationLoop() {

  //console.log(velocity);
  context.clearRect(0,0,800,450);
  requestAnimationFrame(animationLoop);
  player.x = position.dx;
  player.y = position.dy;
  position.add(velocity);
  player.draw();
  velocity.draw(context,player.x,player.y,50);
  //direction.draw(context,player.x,player.y,50);
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].point.x = bullets[i].position.dx;
    bullets[i].point.y = bullets[i].position.dy;
    bullets[i].position.add(bullets[i].velocity);
    bullets[i].point.draw();
    //bullets[i].velocity.draw(context, bullets[i].point.x, bullets[i].point.y, 50);
    if(bullets[i].position.dx < 0 || bullets[i].position.dx > 800 || bullets[i].position.dy < 0 || bullets[i].position.dy > 450){
      bullets.splice(i,1);
    }
  }

  if(position.dx < 0){
    position.dx = 800;
  }
  if(position.dx > 800){
    position.dx = 0;
  }
  if(position.dy < 0){
    position.dy = 450;
  }
  if(position.dy > 450){
    position.dy = 0;
  }
  FunnyShoot();
}

animationLoop();

function FunnyShoot() {
  velocity.angle += 0.1;
  let bullet = {};
  bullet.position = new Vector2(position.dx, position.dy);
  bullet.velocity = new Vector2(velocity.r + 1, 0);
  bullet.velocity.angle = velocity.angle;
  bullet.point = new Point(bullet.position.dx, bullet.position.dy,10);
  bullets.push(bullet);
}