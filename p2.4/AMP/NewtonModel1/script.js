const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let earth, moon;

function init(){
  earth = new GameObject(new Point(1,1,80,"blue"), new Vector2(canvas.width / 2, canvas.height / 2), new Vector2(0,0), new Vector2(0,0));
  moon = new GameObject(new Point(1,1,50,"yellow"), new Vector2(500,500), new Vector2(0,-20), new Vector2(0,0));
  loop();
}

function loop()
{
    requestAnimationFrame(loop);
    //context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0,0,canvas.width, canvas.height);
    earth.update();

    moon.acc.difVectors(moon.pos, earth.pos);
    moon.acc.mulScalar(0.001);

    moon.update();

    earth.draw();

    moon.draw();
}

init();
