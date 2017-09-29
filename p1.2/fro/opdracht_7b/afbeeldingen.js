var afbeelding_0 = document.getElementById('afbeelding_0');
var afbeelding_1 = document.getElementById('afbeelding_1');
var afbeelding_2 = document.getElementById('afbeelding_2');
var afbeelding_3 = document.getElementById('afbeelding_3');
var afbeelding_4 = document.getElementById('afbeelding_4');

var myImage = document.getElementById('myImage');
var images = ["AnthonyDavis.jpg", "curry.jpg", "james.jpg", "kobe.jpg", "Klay.jpg"];

afbeelding_0.addEventListener('click', ()=>{
  myImage.src=images[0];
  afbeelding_0.style.color = "red";
  afbeelding_0.style.backgroundColor = "yellow";
  afbeelding_1.style.color = "black";
  afbeelding_1.style.backgroundColor = "white";
  afbeelding_2.style.color = "black";
  afbeelding_2.style.backgroundColor = "white";
  afbeelding_3.style.color = "black";
  afbeelding_3.style.backgroundColor = "white";
  afbeelding_4.style.color = "black";
  afbeelding_4.style.backgroundColor = "white";
})
afbeelding_1.addEventListener('click', ()=>{
  myImage.src=images[1];
  afbeelding_0.style.color = "black";
  afbeelding_0.style.backgroundColor = "white";
  afbeelding_1.style.color = "red";
  afbeelding_1.style.backgroundColor = "yellow";
  afbeelding_2.style.color = "black";
  afbeelding_2.style.backgroundColor = "white";
  afbeelding_3.style.color = "black";
  afbeelding_3.style.backgroundColor = "white";
  afbeelding_4.style.color = "black";
  afbeelding_4.style.backgroundColor = "white";
})
afbeelding_2.addEventListener('click', ()=>{
  myImage.src=images[2];
  afbeelding_0.style.color = "black";
  afbeelding_0.style.backgroundColor = "white";
  afbeelding_1.style.color = "black";
  afbeelding_1.style.backgroundColor = "white";
  afbeelding_2.style.color = "red";
  afbeelding_2.style.backgroundColor = "yellow";
  afbeelding_3.style.color = "black";
  afbeelding_3.style.backgroundColor = "white";
  afbeelding_4.style.color = "black";
  afbeelding_4.style.backgroundColor = "white";
})
afbeelding_3.addEventListener('click', ()=>{
  myImage.src=images[3];
  afbeelding_0.style.color = "black";
  afbeelding_0.style.backgroundColor = "white";
  afbeelding_1.style.color = "black";
  afbeelding_1.style.backgroundColor = "white";
  afbeelding_2.style.color = "black";
  afbeelding_2.style.backgroundColor = "white";
  afbeelding_3.style.color = "red";
  afbeelding_3.style.backgroundColor = "yellow";
  afbeelding_4.style.color = "black";
  afbeelding_4.style.backgroundColor = "white";
})
afbeelding_4.addEventListener('click', ()=>{
  myImage.src=images[4];
  afbeelding_0.style.color = "black";
  afbeelding_0.style.backgroundColor = "white";
  afbeelding_1.style.color = "black";
  afbeelding_1.style.backgroundColor = "white";
  afbeelding_2.style.color = "black";
  afbeelding_2.style.backgroundColor = "white";
  afbeelding_3.style.color = "black";
  afbeelding_3.style.backgroundColor = "white";
  afbeelding_4.style.color = "red";
  afbeelding_4.style.backgroundColor = "yellow";
})
