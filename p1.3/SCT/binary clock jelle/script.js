var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var time = new Date();
var seconds = [];
var minutes = [];
var hours = [];

class Bit{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = true;
    this.trueImage = new Image();
    this.trueImage.src = "true.jpg";
    this.falseImage = new Image();
    this.falseImage.src = "false.jpg";
  }
  draw(context){
    context.beginPath();
    if(this.state){
      context.drawImage(this.trueImage, this.x, this.y, 100, 100);
    } else {
      context.drawImage(this.falseImage, this.x, this.y, 100, 100);
    }

    //context.rect(this.x, this.y, 100, 100);
    //context.stroke();
    //context.fill();
    context.closePath();
  }
}
for(let i=0; i<6; i++){
  let bit = new Bit(i*100, 0);
  bit.draw(context);
  hours.push(bit);
  //seconds[i] = bit;
}for(let i=0; i<6; i++){
  let bit = new Bit(i*100, 100);
  bit.draw(context);
  minutes.push(bit);
  //seconds[i] = bit;
}
for(let i=0; i<6; i++){
  let bit = new Bit(i*100, 200);
  bit.draw(context);
  seconds.push(bit);
  //seconds[i] = bit;
}

function animate() {
  time = new Date();
  var binSec = dec2bin(time.getSeconds());
  var binMin = dec2bin(time.getMinutes());
  var binUur = dec2bin(time.getHours());
  console.log(binSec, binMin, binUur);
  for(let i=0; i<6; i++){
    seconds[i].state = binSec[i];
    seconds[i].draw(context);
  }
  for(let i=0; i<6; i++){
    minutes[i].state = binMin[i];
    minutes[i].draw(context);
  }
  for(let i=0; i<6; i++){
    hours[i].state = binUur[i];
    hours[i].draw(context);
  }
}

setInterval(animate,10);

function dec2bin(dec) {
  var ans = [];
  var bin = [32,16,8,4,2,1];
  for(let i=0; i<bin.length; i++){
    if(dec >= bin[i]){
      ans.push(1);
      dec -= bin[i];
    } else {
      ans.push(0);
    }
  }
  return ans;
}
