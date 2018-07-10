const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var a = new Point(400,200,20,"#ff0000");

var b = new Point(300,100,5,"#ff0000");

setInterval(drawing, 60);

function drawing() {
  context.clearRect(0,0,800,450);
  a.draw();
  a.drag();
  b.draw();
  b.drag();
}
