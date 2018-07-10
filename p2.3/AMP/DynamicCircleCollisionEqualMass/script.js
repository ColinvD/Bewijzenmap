const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g,h,l;

function init(){
  g = new GameObject(new Point(1,1,75,"blue", "g"), new Vector2(100,100), new Vector2(3,6), new Vector2(0,0));
  h = new GameObject(new Point(1,1,75,"blue", "h"), new Vector2(400,250), new Vector2(3,6), new Vector2(0,0));
  l = new LineairFunction(1,1);

  g.rad = new Vector2(1,1);
  g.tan = new Vector2(1,1);

  h.rad = new Vector2(1,1);
  h.tan = new Vector2(1,1);
}

function loop()
{
    requestAnimationFrame(loop);
    context.clearRect(0,0,800,450);
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
      //console.log("hit");
      //console.log("Before g: " + g.rad.dx + " & " + g.rad.dy);
      //console.log("Before h: " + h.rad.dx + " & " + h.rad.dy);
      let temp = new Vector2();
      temp.dx = g.rad.dx;
      temp.dy = g.rad.dy;

      g.rad.dx = h.rad.dx;
      g.rad.dy = h.rad.dy;

      h.rad.dx = temp.dx;
      h.rad.dy = temp.dy;

      //console.log("After g: " + g.rad.dx + " & " + g.rad.dy);
      //console.log("After h: " + h.rad.dx + " & " + h.rad.dy);
      g.vel.addVectors(g.rad,g.tan);
      h.vel.addVectors(h.rad,h.tan);
    }

    l.letTwoPointsDefineLine(g.point, h.point);
    g.point.draw(context);
    h.point.draw(context);
    g.vel.draw(context, g.point.x, g.point.y, 30);
    h.vel.draw(context, h.point.x, h.point.y, 30);
    l.draw(0,800,"black");

    g.tan.draw(context, g.pos.dx, g.pos.dy, 35);
    g.rad.draw(context, g.pos.dx, g.pos.dy, 35);
    h.tan.draw(context, h.pos.dx, h.pos.dy, 35);
    h.rad.draw(context, h.pos.dx, h.pos.dy, 35);
    //console.log(g.vel.r + h.vel.r);
}

init();
loop();
