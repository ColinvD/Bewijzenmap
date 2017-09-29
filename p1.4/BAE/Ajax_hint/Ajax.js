function showHint(str) {
  if (str.length == 0) {
    document.getElementById('txtHint').innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    var invoer = "gethint.php?q=" + str;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('txtHint').innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", invoer, true);
    xmlhttp.send();
  }
}
