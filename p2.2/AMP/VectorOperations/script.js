const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,20,"#ff00ff");
let B = new Point(400,100,20,"#ff00ff");
let C = new Point(100,400,20,"#ff00ff");

let num = document.getElementById('num').value;
let a = new Vector2();
let b = new Vector2();
let ab = new Vector2();
let amb = new Vector2();
let bma = new Vector2();
let am = new Vector2();

A.drag();
B.drag();
C.drag();

function animationLoop() {
  requestAnimationFrame(animationLoop);
  num = document.getElementById('num').value;
  context.clearRect(0,0,800,450);
  A.draw();
  B.draw();
  C.draw();
  a.dx = B.x-A.x;
  a.dy = B.y-A.y;
  a.draw(context,A.x,A.y,1);
  b.dx = C.x-A.x;
  b.dy = C.y-A.y;
  b.draw(context,A.x,A.y,1);

  ab.sumVector(a,b);
  ab.draw(context, A.x, A.y, 0.5);
  amb.subtractVector(a,b);
  amb.draw(context, C.x, C.y, 0.5);
  bma.subtractVector(b,a);
  bma.draw(context, B.x, B.y, 0.5);
  am.multiplyVector(a,num);
  am.draw(context, A.x, A.y, 1);
}

animationLoop();
