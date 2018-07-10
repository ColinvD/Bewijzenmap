
class Line {
  constructor(xbegin,ybegin,xend,yend) {
    this.xbegin = xbegin;
    this.ybegin = ybegin;
    this.xend = xend;
    this.yend = yend;
    this.hill;
    this.intercept;
  }
  draw(){
    let bx,by,ex,ey;

    this.hill = (this.yend-this.ybegin)/(this.xend-this.xbegin);
    this.intercept = this.ybegin - this.xbegin*this.hill;
    bx = 0;
    by = bx*this.hill+this.intercept;
    ex = 800;
    ey = ex*this.hill+this.intercept;

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
