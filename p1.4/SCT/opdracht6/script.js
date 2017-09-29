var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var image = new Image();
var tilesOnARow = 8;
var sx,sy,sw=64,sh=64,x,y,w=64,h=64;
var myLevel = [31, 31, 31, 31, 31, 31, 31, 31,
               31,  0,  0,  0,  0,  0, 31, 31,
               31,  0, 31,  0,  0, 31,  0, 31,
               31,  0,  0, 31,  0,  0,  0, 31,
               31, 31,  0,  0, 31,  0,  0, 31,
               31,  0, 31,  0,  0,  0, 31, 31,
               31,  0,  0,  0, 31,  0,  0, 31,
               31, 31, 31, 31, 31, 31, 31, 31,];
var index = 0;//welk plaatje
var rotation;
var bullets = [];
image.src = "tankSheet.png";

image.addEventListener('load',()=>{
  setInterval(draw, 60);
})

function draw() {
  context.clearRect(0,0,512,512);
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
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].update();
    bullets[i].draw();
    if(bullets[i].index == 19){
      bullets.splice(i,1);
    }
  }
  console.log(bullets.length);
   // welk plaatje, de x coordinaat waar je wilt snijden, de y coordinaat waar je wilt snijden,
  //de wijdte, de hoogte, xpositie voor het tekenen, ypositie voor het tekenen,, wijdte, hoogte
}


class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.sx,this.sy;
    this.index = 8;
    this.vx = 2;
    this.vy = 0;
    this.rotation = 0.5*Math.PI;

    addEventListener('keydown', (e)=>{
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 32:
          var bullet = new Bullet(this.x,this.y,this.vx,this.vy,this.rotation);
          bullets.push(bullet);
          break;
        case 37:
          this.vx = -2;
          this.vy = 0;
          this.rotation = 3/2*Math.PI;
          break;
        case 38:
          this.vx = 0;
          this.vy = -2;
          this.rotation = 0;
          break;
        case 39:
          this.vx = 2;
          this.vy = 0;
          this.rotation = 0.5*Math.PI;
          break;
        case 40:
          this.vx = 0;
          this.vy = 2;
          this.rotation = Math.PI;
          break;
        case 65:
          this.vx = -4;
          this.vy = 0;
          this.rotation = 3/2*Math.PI;
          break;
        case 87:
          this.vx = 0;
          this.vy = -4;
          this.rotation = 0;
          break;
        case 68:
          this.vx = 4;
          this.vy = 0;
          this.rotation = 0.5*Math.PI;
          break;
        case 83:
          this.vx = 0;
          this.vy = 4;
          this.rotation = Math.PI;
          break;
      }
    })
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.index <= 1){
      this.index = 8;
    }
    else{
      this.index -=1;
    }
    if(this.x < -32){
      this.x = canvas.width + 32;
    } else if(this.x > canvas.width + 32){
      this.x = -32;
    }
    if(this.y < -32){
      this.y = canvas.height + 32;
    } else if(this.y > canvas.height + 32){
      this.y = -32;
    }
  }

  draw(){
    this.sx = (this.index %8) * 64;
    this.sy = Math.floor(this.index / 8) *64;
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(image, this.sx, this.sy, 64, 64, -32, -32, 64, 64);
    context.restore();
  }
}

class Bullet {
  constructor(x,y,vx,vy,rotation) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.rotation = rotation;
      this.index = 20;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x <= 0 || this.x >= canvas.width || this.y <= 0 || this.y >= canvas.height){
      this.index = 17;
      for (var i = 0; i < 2; i++) {
        this.index ++;
      }
    }
  }

  draw(){
    this.sx = (this.index %8) * 64;
    this.sy = Math.floor(this.index / 8) *64;
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(image, this.sx, this.sy, 64, 64, -32, -32, 64, 64);
    context.restore();
  }
}
var speler = new Player(150,150);
