var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var binair = document.getElementById('binair');
var decimaal = document.getElementById('decimaal');

var byte = [];
var byteValue = 0;
var bin;
var binValue = [128,64,32,16,8,4,2,1];
for(let i = 0; i<8; i++){
    var joop = new Bit(i*100,0);
    joop.draw(context);
    byte.push(joop);
}

canvas.addEventListener("click",(evt) =>{
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
