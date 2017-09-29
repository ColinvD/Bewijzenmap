var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var binair = document.getElementById('binair');
var decimaal = document.getElementById('decimaal');
var byte = [];
var byteValue = 0;
var bin;
var binValue = [128,64,32,16,8,4,2,1];

function getMousePos(canvas, evt){
  var rect = canvas.getBoundingClientRect();
  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

class Bit{
  constructor(x,y){
    if(Math.random()<=0.5){
      this.state = true;
    }
    else{
      this.state=false;
    }
    this.x = x;
    this.y = y;
    addEventListener('mousedown',(e) => {
      let mouseX = getMousePos(canvas,e).x;
      let mouseY = getMousePos(canvas,e).y;
      //console.log("alert mouse is down")
      //console.log(getMousePos(canvas,e).x, getMousePos(canvas,e).y);
      if(mouseX > this.x && mouseY > this.y && mouseX < this.x + 100 && mouseY < this.y + 100){
        this.state = !this.state;
        this.draw(context);
      }
    })
  }

  draw(context){
    if (this.state == true){
      context.fillStyle = "orange";
    }
    else{
      context.fillStyle = "blue";
    }
    context.lineWidth = 1;
    context.strokeRect(this.x,this.y,99,99);
    context.fillRect(this.x,this.y,99,99);
  }
}

for(let i = 0; i<8; i++){
  for(let j =0; j<8; j++){
    var joop = new Bit(j*100,i*100);
    joop.draw(context);
    byte.push(joop);
  }
}
canvas.addEventListener("mousedown",(evt) =>{
  byteValue = 0;
  bin = "";
  for(let i=0; i<byte.length; i++){
    bin += +byte[i].state;
    if(byte[i].state){
      byteValue += byte[i].state*binValue[i];
    }
  }
  binair.value = bin;
  decimaal.value = byteValue;
})
//console.log();
console.log(byte[0], byte[1], byte[2], byte[3], byte[4], byte[5], byte[6], byte[7], byte[40]);
