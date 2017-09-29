var myImage = document.getElementById("myImage");
var myButtonSwitch = document.getElementById("myButtonSwitch");
var status = false;//boolean voor de status afbeelding
myButtonSwitch.addEventListener('click', ()=>{
if (myButtonSwitch.value == "Switch On"){
  myImage.src="stephen curry.jpg";
  document.body.style.backgroundColor = "#17e85b";
  myButtonSwitch.value = "Switch Off";
}
else {
  myButtonSwitch.value = "Switch On";
  myImage.src="kobe bryant.jpg";
  document.body.style.backgroundColor = "#4a44bb";
}
})
