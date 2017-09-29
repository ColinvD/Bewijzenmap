var mijnDiv = document.getElementById("mijnDiv");
var mijnDiv2 = document.getElementById("mijnDiv2");
var datum = new Date();
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("mijnDiv").innerHTML = t;
}

mijnDiv.innerHTML = datum.toLocaleTimeString();
mijnDiv2.innerHTML = "Datum: " + datum.toDateString();

if(datum.getHours() < 6)
{
document.getElementById("goede").innerHTML="Goede nacht";
}
else if(datum.getHours() < 12)
{
document.getElementById("goede").innerHTML="Goede morgen";
}
else if(datum.getHours() < 18)
{
document.getElementById("goede").innerHTML="Goede middag";
}
else
{
	document.getElementById("goede").innerHTML="Goede avond";
}
