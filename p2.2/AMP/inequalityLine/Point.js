class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#ffff00";
  }
  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
  drag(){
    let drag = false;
    let myx,myy;
    let xdis,ydis,dis;

    canvas.addEventListener('mousedown',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      myx = evt.clientX - rect.left;
      myy = evt.clientY-rect.top;

      if(myx>this.x){
        xdis = myx-this.x;
      } else {
        xdis = this.x-myx;
      }

      if(myy>this.y){
        ydis = myy-this.y;
      } else {
        ydis = this.y-myy;
      }
      dis = Math.sqrt(Math.pow(xdis,2) + Math.pow(ydis,2));

      if(dis>this.r){
        drag = false;
      } else if(dis<=this.r){
        drag = true;
      }


    })

    canvas.addEventListener('mouseup',(evt)=>{
      drag = false;
    })

    canvas.addEventListener('mousemove',(evt)=>{
      let rect = canvas.getBoundingClientRect();
      let mousex = evt.clientX - rect.left;
      let mousey = evt.clientY-rect.top;
      if(drag){
        this.x = mousex;
        this.y = mousey;
      }
    })
  }
}
