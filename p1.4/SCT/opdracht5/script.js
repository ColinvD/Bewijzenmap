const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();
var hoekseconds = 0;
var hoekminutes = 0;
var hoekhours = 0;

const face = new Image();
face.src = "images/face.png";

const secondsPointer = new Image();
secondsPointer.src = "images/seconds.png";

const minutesPointer = new Image();
minutesPointer.src = "images/minutes.png";

const hoursPointer = new Image();
hoursPointer.src = "images/hours.png";

secondsPointer.addEventListener('load', ()=>{
  setInterval(draw,10);
})
function draw() {
  time = new Date();
  context.clearRect(0,0,500,500);
  context.drawImage(face,0,0);
  context.save();
  context.translate(250,250);
  context.rotate(hoekseconds);
  context.drawImage(secondsPointer,-26,-224);
  context.restore();
  context.save();
  context.translate(250,250);
  context.rotate(hoekminutes);
  context.drawImage(minutesPointer,-30,-224);
  context.restore();
  context.save();
  context.translate(250,250);
  context.rotate(hoekhours);
  context.drawImage(hoursPointer,-26,-190);
  context.restore();
  myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  hoekseconds = time.getSeconds()/60*2*Math.PI;
  hoekminutes = time.getMinutes()/60*2*Math.PI;
  hoekhours = ((time.getHours()/12) + (time.getMinutes() / 720))*(2*Math.PI);
}
