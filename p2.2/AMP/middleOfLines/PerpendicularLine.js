
class PerpendicularLine {
  constructor(x,y,hillLine1,interceptLine1,width,color) {
    this.color = color || "#000000";
    this.x = x;
    this.y = y;
    this.hillLine1 = hillLine1;
    this.interceptLine1 = interceptLine1;
    this.hill;
    this.inter;
    this.width = width || 1;
  }
  draw(){
    let hill, yinter;
    let bx,by,ex,ey;

    hill = -(1/this.hillLine1);
    yinter = this.y-this.x*hill;
    this.hill = hill;
    this.inter = yinter;
    bx = 0;
    by = bx*hill+yinter;
    ex = 800;
    ey = ex*hill+yinter;
      context.beginPath();
      context.strokeStyle = this.color;
      context.lineWidth = this.width;
      context.moveTo(bx,by);
      context.lineTo(ex,ey);
      context.stroke();
      context.lineWidth = 1;
  }
}
