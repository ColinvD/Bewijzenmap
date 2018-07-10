const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(100,100,20,"#ff0000");
var b = new Point(100,200,20,"#ff0000");

setInterval(drawing, 60);

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
}
