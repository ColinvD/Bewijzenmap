
class PerpendicularLine {
  constructor(x,y,hillLine1,interceptLine1) {
    /*this.xbegin = xbegin;
    this.ybegin = ybegin;
    this.xend = xend;
    this.yend = yend;*/
    this.x = x;
    this.y = y;
    this.hillLine1 = hillLine1;
    this.interceptLine1 = interceptLine1;
    this.hill;
    this.inter;
  }
  draw(){
    let hill, yinter;
    let bx,by,ex,ey;

    hill = -(1/this.hillLine1);
    yinter = this.y-this.x*hill;
    //y=hill*x+yinter
    //this.y = hill * this.x + ?
    //7 = 2 * 5 + ?
    /*hill = (this.yend-this.ybegin)/(this.xend-this.xbegin);
    yinter = this.ybegin - this.xbegin*hill;*/
    this.hill = hill;
    this.inter = yinter;
    bx = 0;
    by = bx*hill+yinter;
    ex = 800;
    ey = ex*hill+yinter;

    /*if(this.xend-this.xbegin == 0){
      context.beginPath();
      context.moveTo(this.xbegin,0);
      context.lineTo(this.xend,450);
      context.stroke();
    }else{*/
      context.beginPath();
      context.moveTo(bx,by);
      context.lineTo(ex,ey);
      context.stroke();
    //}
  }
}
