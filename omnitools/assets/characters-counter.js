/*
* characters-counter.js
* https://github.com/xyti/omnitools/blob/main/src/assets/characters-counter.js
* https://github.com/xyti/omnitools/blob/main/src/characters-counter.html
* https://xyti.github.io/omnitools/characters-counter.html
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/xyti/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/xyti/omnitools
*/
document.querySelector("#textinput").oninput = function() {
  document.querySelector("#chara").innerHTML = document.querySelector("#textinput").value.length + " Characters";
  var obj = document.querySelector("#textinput").value.replace(/\n/g," ").split(" ");
  Object.keys(obj).forEach(k => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
  obj = obj.filter(function(x) { return x !== null });
  document.querySelector("#words").innerHTML = obj.length + " Words";
  document.querySelector("#charw").innerHTML = document.querySelector("#textinput").value.replace(/\n/g,"").replace(/ /g,"").length + " Characters without space";
  var obj = document.querySelector("#textinput").value.split("\n");
  Object.keys(obj).forEach(k => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
  obj = obj.filter(function(x) { return x !== null });
  document.querySelector("#parag").innerHTML = obj.length + " Paragraphs";
}
