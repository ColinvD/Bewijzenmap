
class Line {
  constructor(xbegin,ybegin,xend,yend) {
    this.xbegin = xbegin;
    this.ybegin = ybegin;
    this.xend = xend;
    this.yend = yend;
  }
  draw(){
    let hill, yinter;
    let bx,by,ex,ey;

    hill = (this.yend-this.ybegin)/(this.xend-this.xbegin);
    yinter = this.ybegin - this.xbegin*hill;
    bx = 0;
    by = bx*hill+yinter;
    ex = 800;
    ey = ex*hill+yinter;

    if(this.xend-this.xbegin == 0){
      context.beginPath();
      context.moveTo(this.xbegin,0);
      context.lineTo(this.xend,450);
      context.stroke();
    }else{
      context.beginPath();
      context.moveTo(bx,by);
      context.lineTo(ex,ey);
      context.stroke();
    }
  }
}
