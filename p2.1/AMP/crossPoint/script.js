const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(100,50,20,"#ff0000");
var b = new Point(500,50,20,"#ff0000");
var c = new Point(125,100,20,"#ff0000");
var d = new Point(300,100,20,"#ff0000");
setInterval(drawing, 60);

function drawing() {
  LineA = new Line(a.x, a.y, b.x, b.y);
  LineB = new Line(c.x, c.y, d.x, d.y);
  snijd = new Point(0,0,20,"#ffff00");
  context.clearRect(0,0,800,450);
  a.draw();
  a.drag();
  b.draw();
  b.drag();
  c.draw();
  c.drag();
  d.draw();
  d.drag();
  context.lineWidth = 3;
  LineA.draw();
  LineB.draw();
  context.lineWidth = 1;
  snijd.x = (LineB.inter - LineA.inter)/(LineA.hill - LineB.hill);
  snijd.y = snijd.x*LineA.hill+LineA.inter;
  snijd.draw();
}
