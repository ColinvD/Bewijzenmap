var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var datum = new Date();
var seconden = datum.getSeconds();
var minuten = datum.getMinutes();
var uur = datum.getHours();
var binsec = seconden.toString(2);
var binmin = minuten.toString(2);
var binuur = uur.toString(2);
// kloksec = [0,0,0,0,0,0];
// klokmin = [0,0,0,0,0,0];
// klokuur = [0,0,0,0,0,0];
// kloksec += binsec;
// klokmin += binmin;
// klokuur += binuur;
// var num = Number(binsec) + "<br>" + Number(binmin) + "<br>" + Number(binuur);
console.log(binsec);
console.log(binmin);
console.log(binuur);