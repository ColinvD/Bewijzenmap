var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var image = new Image();
var tilesOnARow = 8;
var sx,sy,sw=64,sh=64,x,y,w=64,h=64;
var myLevel = [31, 31, 31, 31, 31, 31, 31, 31,
               31, 0, 31, 0, 0, 0, 0, 31,
               31, 0, 31, 0, 0, 31, 0, 31,
               31, 0, 0, 31, 0, 0, 0, 31,
               31, 31, 0, 0, 31, 0, 0, 31,
               31, 0, 31, 0, 0, 0, 31, 31,
               31, 0, 0, 0, 31, 0, 0, 31,
               31, 31, 31, 31, 31, 31, 31, 31];
var index = 0;//welk plaatje
image.src = "tankSheet.png";

image.addEventListener('load',()=>{
  draw();
})

function draw() {
  for(var i = 0; i < myLevel.length; i++){
    index = myLevel[i];
    sx = (index % tilesOnARow) * sw;
    sy = Math.floor(index/tilesOnARow) * sh;
    x = (i % tilesOnARow) * sw; // tekenen meer naar rechts
    y = Math.floor(i / tilesOnARow) * sh; // tekenen meer naar onder
    context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
  }
   // welk plaatje, de x coordinaat waar je wilt snijden, de y coordinaat waar je wilt snijden,
  //de wijdte, de hoogte, xpositie voor het tekenen, ypositie voor het tekenen,, wijdte, hoogte
}
