class Vector2 {
  constructor(dx,dy) {
    this._dx = dx;
    this._dy = dy;
    this._r = Math.sqrt(Math.pow(this._dx,2) + Math.pow(this._dy,2));
    this._angle = Math.atan2(this._dy,this._dx);
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
    //console.log(this.dx + " + " + vector.dx + " = " + this.dx+vector.dx);
    //console.log(this.dy + " + " + vector.dy + " = " + this.dy+vector.dy);
  }

  get dx(){
    return this._dx;
  }

  get dy(){
    return this._dy;
  }

  set dx(newDx){
    this._dx = newDx;
    this._r = Math.sqrt(Math.pow(this._dx,2) + Math.pow(this._dy,2));
    this._angle = Math.atan2(this._dy,this._dx);
  }

  set dy(newDy){
    this._dy = newDy;
    this._r = Math.sqrt(Math.pow(this._dx,2) + Math.pow(this._dy,2));
    this._angle = Math.atan2(this._dy,this._dx);
  }

  set r(newR){
    if(newR < 0){
      newR = Math.abs(newR);
      this._angle += Math.PI;
    }
    this._r = newR;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }

  set angle(newAngle){
    this._angle = newAngle;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }

  get r(){
    return Math.sqrt(Math.pow(this.dx,2) + Math.pow(this.dy,2));
  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  draw(context,x,y,scale){
    let h = 4;
    let ah = 10;
    let aw = 10;
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.rotate(this._angle);
    context.moveTo(0,0);
    context.lineTo(0,h);
    context.lineTo(this._r*scale-aw,h);
    context.lineTo(this._r*scale-aw,ah);
    context.lineTo(this._r*scale,0);
    context.lineTo(this._r*scale-aw,-ah);
    context.lineTo(this._r*scale-aw,-h);
    context.lineTo(0,-h);
    context.lineTo(0,0);
    //context.lineTo(this.r * scale,0);
    context.stroke();
    context.fillStyle = "#ffff00";
    context.fill();
    context.closePath();
    context.restore();
  }

  sumVector(a,b){
    this.dx = a.dx+b.dx;
    this.dy = a.dy+b.dy;
  }

  subtractVector(a,b){
    this.dx = a.dx-b.dx;
    this.dy = a.dy-b.dy;
  }

  multiplyVector(a,number){
    this.dx = a.dx * number;
    this.dy = a.dy * number;
  }
}
