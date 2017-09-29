function showHint(naam,lengte, gewicht, gender) {
  console.log(naam,lengte, gewicht, gender);
  if(naam === undefined){
    console.log("geen naam");
  }
  if(lengte === undefined){
    console.log("geen lengte");
  }
  if(gewicht === undefined){
    console.log("geen gewicht");
  }
  if(gender === undefined){
    console.log("geen geslacht");
  }
  if (naam.length == 0) {
    document.getElementById('uitkomst').innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    let controlescript = "BMIcalculator.php";
    var invoer = controlescript + "?input1=" + naam + "&input2=" + lengte
      + "&input3=" + gewicht + "&input4=" + gender;
    console.log(invoer);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('uitkomst').innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", invoer, true);
    xmlhttp.send();
  }
}
