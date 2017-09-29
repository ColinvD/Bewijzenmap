var textbox_invoer = document.getElementById("textbox_invoer");
var textbox_button = document.getElementById("textbox_button");
var textbox_uitvoer = document.getElementById("textbox_uitvoer");

textbox_button.addEventListener('click',()=>{//click event button
  textbox_uitvoer.value =textbox_invoer.value;
})
getal.addEventListener('click',()=>{//click event button
  myRange_uitvoer.value =myRange.value;
  fieldstitle.style.fontSize = myRange.value + "px";
  fields.style.padding = myRange.value + "px";
})
kleurcode.addEventListener('click',()=>{//click event button
  kleuruit.value = kleur.value;
  fields.style.background = kleur.value;
})
invoeren.addEventListener('click',()=>{//click event button
  woord.value =wacht.value;
})

// var t = document.getElementsByClassName('className');
// var t = document.getElementsByTagName('h3')
// t wordt een array
// met for-loop de array dorlopen
