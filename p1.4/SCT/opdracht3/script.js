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
  setInterval(draw, 60);
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
  speler.update();
  speler.draw();
   // welk plaatje, de x coordinaat waar je wilt snijden, de y coordinaat waar je wilt snijden,
  //de wijdte, de hoogte, xpositie voor het tekenen, ypositie voor het tekenen,, wijdte, hoogte
}


class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.sx,this.sy;
    this.index = 1;
    this.vx = 2;
    this.vy = 0;

    addEventListener('keydown', (e)=>{
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37:
        this.vx = -2;
        this.vy = 0;
          break;
          case 38:
          this.vx = 0;
          this.vy = -2;
            break;
          case 39:
          this.vx = 2;
          this.vy = 0;
          break;
          case 40:
          this.vx = 0;
          this.vy = 2;
      }
    })
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.index >= 8){
      this.index = 1;
    }
    else{
      this.index +=1;
    }
  }

  draw(){
    this.sx = (this.index %8) * 64;
    this.sy = Math.floor(this.index / 8) *64;
    context.drawImage(image, this.sx, this.sy, 64, 64, this.x, this.y, 64, 64);
  }
}
var speler = new Player(150,150);
