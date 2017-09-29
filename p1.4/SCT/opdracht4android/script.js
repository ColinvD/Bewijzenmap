var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');

var image = new Image();
image.src = "android_sheet.png";
var sx, sy, sw, sh, x, y, w, h, index = 0, nRow = 10;
var maxindex;
var minindex;

image.addEventListener('load',()=>{
  sw = image.width/10;
  sh = image.height/3;
  setInterval(animate,100);
})
function animate() {
  context.clearRect(0,0,800,600);
  plaatje.update();
  plaatje.draw();
}

class Android {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.sx, this.sy;
    this.index = 0;
    this.maxindex = 0;
    this.minindex = 0;

    addEventListener('keydown', (e)=>{
      //console.log(e.keyCode);
      switch (e.keyCode) {
        case 37:
          this.maxindex = 18;
          this.minindex = 10;
        break;
        case 39:
          this.maxindex = 9;
          this.minindex = 0;
        break;
        case 40:
          this.maxindex = 28;
          this.minindex = 20;
        break;
      }
      this.index = this.minindex;
    })
  }
  update(){
    if(this.index > this.maxindex){
      this.index = this.minindex;
    } else if(this.index < this.minindex){
      this.index = this.minindex;
    } else {
      this.index +=1;
    }
    console.log(this.index);
  }
  draw(){
    this.sx = (this.index%10)*sw;
    this.sy = Math.floor(this.index/10)*sh;
    context.drawImage(image, this.sx,this.sy,329,241,this.x,this.y,329,241);
    console.log(this.sx,this.sy,329,241,this.x,this.y,329,241);
  }
}
var plaatje = new Android(100,100);
