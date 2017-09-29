var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.lineWidth = 5;
context.strokeStyle = "maroon";
context.fillStyle = "red";
context.beginPath();
context.moveTo(300, 200);
context.lineTo(100, 150);
context.lineTo(100, 250);
context.lineTo(300, 300);
context.lineTo(300, 200);
context.stroke();
context.fill();
context.closePath();
context.beginPath();
context.lineTo(100, 150);
context.lineTo(150, 50);
context.lineTo(350, 100);
context.lineTo(300, 200);
context.lineTo(100, 150);
context.stroke();
context.fill();
context.closePath();
context.beginPath();
context.lineTo(400, 150);
context.lineTo(350, 100);
context.lineTo(300, 200);
context.stroke();
context.fill();
context.closePath();
context.beginPath();
context.lineTo(300, 300);
context.lineTo(400, 250);
context.lineTo(400, 150);
context.lineTo(300, 200);
context.lineTo(300, 300);
context.stroke();
context.fill();
context.closePath();
context.strokeStyle = "grey";
context.fillStyle = "#e6cd42";
context.beginPath();
context.moveTo(275, 235);
context.lineTo(275, 275);
context.lineTo(225, 255);
context.lineTo(225, 215);
context.lineTo(275, 235);
context.stroke();
context.fill();
context.closePath();
context.beginPath();
context.moveTo(190, 205);
context.lineTo(190, 245);
context.lineTo(140, 225);
context.lineTo(140, 185);
context.lineTo(190, 205);
context.stroke();
context.fill();
context.closePath();
context.fillStyle = "#bc5843";
context.beginPath();
context.moveTo(340, 280);
context.lineTo(340, 240);
context.lineTo(360, 230);
context.lineTo(360, 270);
context.lineTo(340, 280);
context.stroke();
context.fill();
context.closePath();