const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,10,"yellow","A");
let B = new Point(400,300,10,"blue","B");
let g = {};
    g.pos = new Vector2(450,200);
    g.point = new Point(g.pos.dx,g.pos.dy,10, "red", "g");
    g.vel = new Vector2(5,5);
    g.update = () =>
    {
        g.pos.add(g.vel);
        g.point.x = g.pos.dx;
        g.point.y = g.pos.dy;
        if(g.pos.dx > 800 || g.pos.dx < 0){
            g.vel.dx = -g.vel.dx;
        }
        if(g.pos.dy > 450 || g.pos.dy < 0){
            g.vel.dy = -g.vel.dy;
        }
    };

let h = {};
    h.pos = new  Vector2(1,1);
    h.point = new Point(450,100,10,"yellow","h");
    h.update = () =>{
        h.point.x = h.pos.dx;
        h.point.y = h.pos.dy;
    };
    h.rad = new Vector2(1,1);
    h.tan = new Vector2(1,1);

let l = new LineairFunction(1,1);
let m = new LineairFunction(1,1);

A.drag();
B.drag();

function loop()
{
    requestAnimationFrame(loop);
    context.clearRect(0,0,800,450);

    l.draw(0,800);
    l.letTwoPointsDefineLine(A,B);

    m.letSlopeAndPointDefineLine(-1/l.slope,g.point);
    m.draw(0,800);

    if(g.pos.dy >= g.pos.dx * l.slope + l.yIntercept){
      //g.point.color = "blue";
      h.tan.angle += Math.PI;
      g.vel.addVectors(h.tan,h.rad);
    } else{
        //g.point.color = "green";
    }

    g.update();
    g.point.draw();
    g.vel.draw(context, g.pos.dx, g.pos.dy, 10);

    h.pos.dx = l.intersection(m).x;
    h.pos.dy = l.intersection(m).y;
    h.update();

    h.rad.dx = 1;
    h.rad.dy = l.slope;
    h.rad.r = 1;
    h.rad.r = h.rad.dot(g.vel);
    h.rad.draw(context,h.pos.dx,h.pos.dy, 10);

    h.tan.dx = -h.rad.dy;
    h.tan.dy = h.rad.dx;
    h.tan.r = 1;
    h.tan.r = h.tan.dot(g.vel);
    h.tan.draw(context,h.pos.dx,h.pos.dy,10);

    h.point.draw();

    A.draw();
    B.draw();
}

loop();
