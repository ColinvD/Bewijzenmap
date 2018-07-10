const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g = new GameObject(new Point(1,1,50,"blue", "g"), new Vector2(100,100), new Vector2(1,2), new Vector2(0,0));
let P = new Point(200,225,50,"lime", "p");
let Q = new Point(600,225,50,"lime", "q");

g.rad = new Vector2(1,1);
g.tan = new Vector2(1,1);
g.rad2 = new Vector2(1,1);
g.tan2 = new Vector2(1,1);

function loop()
{
    requestAnimationFrame(loop);
    context.clearRect(0,0,800,450);
    P.draw();
    Q.draw();
    g.update();

    g.rad.dx = P.x - g.pos.dx;
    g.rad.dy = P.y - g.pos.dy;
    g.rad.r = 1;
    g.rad.r = g.rad.dot(g.vel);

    g.tan.dx = -g.rad.dy;
    g.tan.dy = g.rad.dx;
    g.tan.r = 1;
    g.tan.r = g.tan.dot(g.vel);

    g.rad2.dx = Q.x - g.pos.dx;
    g.rad2.dy = Q.y - g.pos.dy;
    g.rad2.r = 1;
    g.rad2.r = g.rad2.dot(g.vel);

    g.tan2.dx = -g.rad2.dy;
    g.tan2.dy = g.rad2.dx;
    g.tan2.r = 1;
    g.tan2.r = g.tan2.dot(g.vel);

    if(g.point.distance(P) <= P.r + g.point.r){
      g.rad.angle += Math.PI;
      g.vel.addVectors(g.rad, g.tan);
    }
    if(g.point.distance(Q) <= Q.r + g.point.r){
      g.rad2.angle += Math.PI;
      g.vel.addVectors(g.rad2, g.tan2);
    }

    g.draw();
    g.vel.draw(context, g.pos.dx, g.pos.dy, 35);
    g.rad.draw(context, g.pos.dx, g.pos.dy, 35);
    g.tan.draw(context, g.pos.dx, g.pos.dy, 35);
}

loop();
