const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Planet {
  constructor(posX,posY,size,color,angle) {
    this.rel_pos = new Vector2(posX,posY);
    this.point = new Point(0,0,size,color);
    this.pos = new Vector2(0,0);
    this.dAngle = angle;
  }

  draw(object){
    this.rel_pos.angle += this.dAngle;
    this.pos.addVectors(object.pos, this.rel_pos);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
    this.point.draw(canvas);
  }
}

let sun;
let mercury;
let venus;
let earth;
let moon;
let mars;
let jupiter;
let saturnrod;
let uranus;
let neptune;
let pluto;

function init(){
  sun = new Point(canvas.width/2,canvas.height/2,40,"yellow");
  sun.pos = new Vector2(sun.x, sun.y);

  mercury = new Planet(200,0,10,"lightgray", 0.03);
  venus = new Planet(300,0,10,"yellow", 0.01);
  earth = new Planet(400,0,10,"blue", 0.007);
  moon = new Planet(50,0,7,"gray", 0.05);
  mars = new Planet(500,0,10,"red", 0.004);
  jupiter = new Planet(600,0,10,"orange", 0.001);
  saturn = new Planet(700,0,10,"palegoldenrod", 0.0008);
  uranus = new Planet(800,0,10,"powderblue", 0.0005);
  neptune = new Planet(900,0,10,"powderblue", 0.0002);
  pluto = new Planet(1000,0,10,"maroon", 0.00009);

  loop();
}

function loop()
{
    requestAnimationFrame(loop);
    //context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0,0,canvas.width, canvas.height);
    sun.draw(canvas);

    mercury.draw(sun);
    venus.draw(sun);
    earth.draw(sun);
    moon.draw(earth);
    mars.draw(sun);
    jupiter.draw(sun);
    saturn.draw(sun);
    uranus.draw(sun);
    neptune.draw(sun);
    pluto.draw(sun);
}

init();
