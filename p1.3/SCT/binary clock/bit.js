function getMousePos(canvas, evt){
  var rect = canvas.getBoundingClientRect();
  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
class Bit{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = false;
    // addEventListener('mousedown',(e) => {
    //   let mouseX = getMousePos(canvas,e).x;
    //   let mouseY = getMousePos(canvas,e).y;
    //   //console.log("alert mouse is down")
    //   //console.log(getMousePos(canvas,e).x, getMousePos(canvas,e).y);
    //   if(mouseX > this.x && mouseY > this.y && mouseX < this.x + 100 && mouseY < this.y + 100){
    //     this.state = !this.state;
    //     this.draw(context);
    //   }
    // })
  }

  draw(context){
    if (this.state == true){
      context.fillStyle = "orange";
    }
    else{
      context.fillStyle = "blue";
    }
    context.lineWidth = 1;
    context.strokeRect(this.x,this.y,99,99);
    context.fillRect(this.x,this.y,99,99);
  }
}
