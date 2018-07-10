const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let g,h,l;

function init(){
  g = new GameObject(new Point(1,1,50,"blue", "g"), new Vector2(100,100), new Vector2(7,15), new Vector2(0,0));
  h = new GameObject(new Point(1,1,175,"blue", "h"), new Vector2(400,250), new Vector2(3,6), new Vector2(0,0));
  l = new LineairFunction(1,1);

  g.rad = new Vector2(1,1);
  g.tan = new Vector2(1,1);

  h.rad = new Vector2(1,1);
  h.tan = new Vector2(1,1);
  g.m = g.point.r * g.point.r * Math.PI;
  h.m = h.point.r * h.point.r * Math.PI;
}

function loop()
{
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);
    g.update();
    h.update();

    g.rad.dx = h.pos.dx - g.pos.dx;
    g.rad.dy = h.pos.dy - g.pos.dy;
    g.rad.r = 1;
    g.rad.r = g.rad.dot(g.vel);

    g.tan.dx = -g.rad.dy;
    g.tan.dy = g.rad.dx;
    g.tan.r = 1;
    g.tan.r = g.tan.dot(g.vel);

    h.rad.dx = g.pos.dx - h.pos.dx;
    h.rad.dy = g.pos.dy - h.pos.dy;
    h.rad.r = 1;
    h.rad.r = h.rad.dot(h.vel);

    h.tan.dx = -h.rad.dy;
    h.tan.dy = h.rad.dx;
    h.tan.r = 1;
    h.tan.r = h.tan.dot(h.vel);

    if(g.point.distance(h.point) < g.point.r + h.point.r){
      let A1 = new Vector2(g.rad.dx,g.rad.dy);
      let A2 = new Vector2(h.rad.dx,h.rad.dy);
      let Am1 = (g.m-h.m)/(g.m+h.m);
      let Am2 = (2*h.m)/(h.m+g.m);
      A1.mulScalar(Am1);
      A2.mulScalar(Am2);

      let B1 = new Vector2(g.rad.dx,g.rad.dy);
      let B2 = new Vector2(h.rad.dx,h.rad.dy);
      let Bm1 = (2*g.m)/(g.m+h.m);
      let Bm2 = (h.m-g.m)/(g.m+h.m);
      B1.mulScalar(Bm1);
      B2.mulScalar(Bm2);
      g.rad.addVectors(A1,A2);
      h.rad.addVectors(B1,B2);
      g.vel.addVectors(g.rad,g.tan);
      h.vel.addVectors(h.rad,h.tan);
      console.log(g.rad, h.rad);
    }

    l.letTwoPointsDefineLine(g.point, h.point);
    g.point.draw(context);
    h.point.draw(context);
    g.vel.draw(context, g.point.x, g.point.y, 30);
    h.vel.draw(context, h.point.x, h.point.y, 30);
    l.draw(0,canvas.width,"black");

    g.tan.draw(context, g.pos.dx, g.pos.dy, 35);
    g.rad.draw(context, g.pos.dx, g.pos.dy, 35);
    h.tan.draw(context, h.pos.dx, h.pos.dy, 35);
    h.rad.draw(context, h.pos.dx, h.pos.dy, 35);
}

init();
loop();
