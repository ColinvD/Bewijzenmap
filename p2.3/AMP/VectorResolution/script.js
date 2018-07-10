const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,10);
let B = new Point(200,200,10);
let C = new Point(155, 413, 10);
let v = new Vector2(B.x - A.x,B.y - A.y);
let lineVector = new Vector2(1,1);
let PerVector = new Vector2(1,1);

A.drag();
B.drag();
C.drag();

function AnimLoop() {
  requestAnimationFrame(AnimLoop);
  context.clearRect(0,0,800,450);
  v.dx = B.x - A.x;
  v.dy = B.y - A.y;
  let l = new Line(A.x,A.y,C.x,C.y,4);
  let Pl = new PerpendicularLine(A.x,A.y, l.hill, l.inter, 5);

  lineVector.dx = 1;
  lineVector.dy = l.hill;
  lineVector.r = 1;
  lineVector.r = lineVector.dot(v);

  PerVector.dx = -lineVector.dy;
  PerVector.dy = lineVector.dx;
  PerVector.r = 1;
  PerVector.r = PerVector.dot(v);

  A.draw();
  B.draw();
  C.draw();

  v.draw(context, A.x, A.y, 1);
  lineVector.draw(context, A.x,A.y,1);
  Pl.draw();
  l.draw();
  PerVector.draw(context, A.x, A.y, 1);
}

AnimLoop();
