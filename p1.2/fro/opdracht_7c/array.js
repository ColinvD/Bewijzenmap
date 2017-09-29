var mijnArray = [34,8,3,8,1,76];
for (var i = 0; i < mijnArray.length; ++i)
{
  document.write(mijnArray[i] + "<br />");
}

var seizoenen = ["lente", "zomer", "herfst", "winter"];
for (var i = 0; i < seizoenen.length; ++i)
{
  //document.write(seizoenen[i] + "<br />");
  document.getElementById('een').innerHTML = seizoenen.join("<br />");
}

var combo = [74,"woord", 37,"random", "words", 83, 95];
combo.push("eringeduwd");
combo.push(5440);
combo.push("laatste erbij");
combo[0] = "Kiwi";
combo[1] = 16;
combo[20] = "verjaardag";
console.log(combo);
/*
for (var i = 0; i < combo.length; ++i)
{
    document.write(combo[i] + "<br />");
}
*/
document.getElementById('twee').innerHTML = combo.join("<br>");
