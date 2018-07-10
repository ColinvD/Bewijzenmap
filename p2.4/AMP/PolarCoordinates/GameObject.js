class GameObject {
  constructor(point, pos, vel, acc) {
    this.point = point;
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
  }

  update(){
    /*
    if(this.pos.dx < 0+this.point.r || this.pos.dx > canvas.width-this.point.r){
      this.vel.dx = -this.vel.dx;
    }
    if(this.pos.dy < 0+this.point.r || this.pos.dy > canvas.height-this.point.r){
      this.vel.dy = -this.vel.dy;
    }*/
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
  }

  draw(){
    this.point.draw();
  }
}
