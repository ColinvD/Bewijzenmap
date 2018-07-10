
class Line {
  constructor(xbegin,ybegin,xend,yend,color) {
    this.color = color || "#000000";
    this.xbegin = xbegin;
    this.ybegin = ybegin;
    this.xend = xend;
    this.yend = yend;
    this.hill = (this.yend-this.ybegin)/(this.xend-this.xbegin);
    this.inter = this.ybegin - this.xbegin*this.hill;
  }
  draw(){
    let hill, yinter;
    let bx,by,ex,ey;
    hill = this.hill;
    yinter = this.inter;
    bx = 0;
    by = bx*hill+yinter;
    ex = 800;
    ey = ex*hill+yinter;

    if(this.xend-this.xbegin == 0){
      context.beginPath();
      context.strokeStyle = this.color;
      context.moveTo(this.xbegin,0);
      context.lineTo(this.xend,450);
      context.stroke();
    }else{
      context.beginPath();
      context.strokeStyle = this.color;
      context.moveTo(bx,by);
      context.lineTo(ex,ey);
      context.stroke();
    }
  }
}
