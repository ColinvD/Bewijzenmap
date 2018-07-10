class Vector {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
    //this._r = r;
    //this._angle = angle;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  get r(){
    return Math.sqrt(Math.pow(this.dx,2) + Math.pow(this.dy,2));
  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }
}
