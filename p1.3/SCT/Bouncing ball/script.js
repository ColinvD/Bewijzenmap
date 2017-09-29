var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var xPos = 150;
var yPos = 100;
var xSpeed = 2;
var ySpeed = 2;

function animate(){
context.clearRect(0,0,800,600);
context.beginPath();
context.fillStyle = "blue";
context.arc(xPos,yPos,50,0,2*Math.PI);
context.stroke();
context.fill();
context.closePath();
xPos += xSpeed;
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

function player1(){
  context.beginPath();
  context.fillStyle = "black";
  context.rect(50,50,20,30);
  context.stroke();
  context.fill();
  context.closePath();
}


setInterval(animate, 10);
setInterval(player1, 10);
