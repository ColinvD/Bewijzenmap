var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var n = 64;
var nRow = 8;
var elWidth = 100;
var elHeight = 100;
var grid = [];

class Bit{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = true;
  }

  draw(){
    context.beginPath();
    if(this.state){
      context.fillStyle = "#00ff00";
    } else {
      context.fillStyle = "#ff0000";
    }
    context.rect(this.x, this.y, 100, 100);
    context.stroke();
    context.fill();
    context.closePath();
  }
}

class Player{
  constructor(x,y){
    this.x = x;
    this.y = y;
    addEventListener('keydown', (e)=>{
      console.log(e);
      switch (e.keyCode) {
        case 37:
        this.x -= 10;
          break;
          case 38:
          this.y -= 10;
            break;
          case 39:
          this.x +=10;
          break;
          case 40:
          this.y += 10;
      }
      this.draw();
    })

  }

  draw(){
    context.beginPath();
    context.fillStyle = "#0000ff";
    context.arc(this.x, this.y, 10, 0, Math.PI*2);
    context.stroke();
    context.fill();
    context.closePath();
    //console.log("help");
  }
}
for (var i = 0; i < n; i++) {
  var x = i%nRow * elWidth;
  var y = Math.floor(i/nRow) * elHeight;
  var el = new Bit(x,y);
  el.draw();
  grid.push(el);
}

var play = new Player(150, 150);
play.draw();


function animate(){
  context.clearRect(0,0,800,800);
  for (var i = 0; i < grid.length; i++) {
    if(i == getGrid(play.x, play.y)){
      grid[i].state = true;
    } else {
      grid[i].state = false;
    }
    grid[i].draw();
  }
  play.draw();
  //console.log(play.x, play.y, getGrid(play.x, play.y));
}

setInterval(animate, 1);

function getGrid(x,y){
  var index = Math.floor(y/elHeight)* nRow + Math.floor(x/elWidth);
  return index;
}
