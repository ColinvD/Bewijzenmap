var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var index;
var sx,sy;
var x;
var y;

var image = new Image();
image.src = "numberedTile.png";

image.addEventListener('load',()=>{
  for(i = 0; i<32*32; i++){
    index = Math.floor(Math.random()*31);
    sx = (index % 8)*32;
    sy = Math.floor(index/8)*32;
    x = i%32 * 32;
    y = Math.floor(i/32) * 32;
    context.drawImage(image,sx,sy,32,32,x,y,32,32);
  }
})
