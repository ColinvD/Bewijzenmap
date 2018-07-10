class Circle {
  constructor(x,y,r,width,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.width = width;
    this.color = color || "#000000";
    this.sAngle = 0;
    this.eAngle = 2*Math.PI;
  }
  draw(){
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.width;
    context.arc(this.x,this.y,this.r,this.sAngle,this.eAngle);
    context.stroke();
    context.lineWidth = 1;
    context.closePath();
  }
}
