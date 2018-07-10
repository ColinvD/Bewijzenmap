const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(100,100,20,"#ff0000");
var b = new Point(100,200,20,"#ff0000");
var c = new Point(200,150,20,"#ff0000");

setInterval(drawing, 100);

function drawing() {
  LineA = new Line(a.x, a.y, b.x, b.y);
  context.clearRect(0,0,800,450);
  a.draw();
  a.drag();
  b.draw();
  b.drag();
  context.lineWidth = 3;
  LineA.draw();
  context.lineWidth = 1;
  if(c.y > c.x*LineA.hill+LineA.intercept){
    c.color = "#ffff00";
  } else if(c.y < c.x*LineA.hill+LineA.intercept){
    c.color = "#00ff00";
  } else if(c.y == c.x*LineA.hill+LineA.intercept){
    c.color = "#0000ff";
  }
  c.draw();
  c.drag();
}
