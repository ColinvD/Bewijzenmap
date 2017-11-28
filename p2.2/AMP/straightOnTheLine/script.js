const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(100,40,20,"#ff0000");
var b = new Point(500,50,20,"#ff0000");
var c = new Point(125,100,20,"#ff0000");
setInterval(drawing, 1000/12);

function drawing() {
  LineA = new Line(a.x, a.y, b.x, b.y);
  LineB = new Line(b.x, b.y, c.x, c.y);
  LineC = new Line(a.x, a.y, c.x, c.y);
  Line_a = new PerpendicularLine(c.x, c.y, LineA.hill, LineA.inter);
  Line_b = new PerpendicularLine(a.x, a.y, LineB.hill, LineB.inter);
  Line_c = new PerpendicularLine(b.x, b.y, LineC.hill, LineC.inter);
  snijd_a = new Point(0,0,10,"#9900ff");
  snijd_b = new Point(0,0,10,"#9900ff");
  snijd_c = new Point(0,0,10,"#9900ff");
  context.clearRect(0,0,800,450);
  a.draw();
  a.drag();
  b.draw();
  b.drag();
  c.draw();
  c.drag();
  context.lineWidth = 3;
  LineA.draw();
  LineB.draw();
  LineC.draw();
  Line_a.draw();
  Line_b.draw();
  Line_c.draw();
  context.lineWidth = 1;
  snijd_a.x = (Line_a.inter - LineA.inter)/(LineA.hill - Line_a.hill);
  snijd_a.y = snijd_a.x*LineA.hill+LineA.inter;
  snijd_b.x = (Line_b.inter - LineB.inter)/(LineB.hill - Line_b.hill);
  snijd_b.y = snijd_b.x*LineB.hill+LineB.inter;
  snijd_c.x = (Line_c.inter - LineC.inter)/(LineC.hill - Line_c.hill);
  snijd_c.y = snijd_c.x*LineC.hill+LineC.inter;
  snijd_a.draw();
  snijd_b.draw();
  snijd_c.draw();
}
