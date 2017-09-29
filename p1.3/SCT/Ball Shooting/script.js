var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var xPos = 100;
var yPos = 200;
var xSpeed = 2;
var ySpeed = 2;
var radius = 50;
var balls = [];
class Ball{
  constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  };

  draw(){
    context.beginPath();
    context.fillStyle = "brown";
    context.arc(this.xPos, this.yPos, this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  /*function animate(){
    if(xPos<=50){
      xSpeed = 2;
    }
    else if(xPos>=750){
      xSpeed = -2;
    }
    yPos += ySpeed;
    if(yPos<=50){
      ySpeed = 2;
    }
    else if(yPos>=550){
      ySpeed = -2;
    }
  }
  setInterval(animate,10);*/
}

for(let i = 0; i<500; i++){
  balls[i] = new Ball(Math.random()*canvas.width,Math.random()*canvas.height, Math.random()*50);
  balls[i].draw();
}

/*function animate(){
  context.clearRect(0,0,800,600);
  context.beginPath();
  context.fillStyle = "brown";
  context.arc(xPos, yPos, radius,0,2*Math.PI);
  context.stroke();
  context.fill();
  context.closePath();
  xPos += xSpeed;

  myBall.draw(context);
  if(xPos<=50){
    xSpeed = 2;
  }
  else if(xPos>=750){
    xSpeed = -2;
  }
  yPos += ySpeed;
  if(yPos<=50){
    ySpeed = 2;
  }
  else if(yPos>=550){
    ySpeed = -2;
  }
}

setInterval(animate, 10);
*/
