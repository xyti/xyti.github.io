/*
* url-decoder.js
* https://github.com/xyti/omnitools/blob/main/src/assets/url-decoder.js
* https://github.com/xyti/omnitools/blob/main/src/url-decoder.html
* https://xyti.github.io/omnitools/url-decoder.html
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/xyti/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/xyti/omnitools
*/
document.querySelector("#decode").onclick = function() {
  document.querySelector("#urloutput").value = decodeURIComponent(document.querySelector("#urlinput").value);
}
function liveModeOn() {
  document.querySelector("#urloutput").value = decodeURIComponent(document.querySelector("#urlinput").value);
  document.querySelector("#urlinput").onkeyup = function() {
      document.querySelector("#urloutput").value = decodeURIComponent(document.querySelector("#urlinput").value);
    }
    document.querySelector("#urlinput").onkeydown = function() {
      document.querySelector("#urloutput").value = decodeURIComponent(document.querySelector("#urlinput").value);
    }
}
function liveModeOff() {
  document.querySelector("#urlinput").onkeyup = function() {}
    document.querySelector("#urlinput").onkeydown = function() {}
}
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      liveModeOn();
    } else {
      liveModeOff();
    }
  });
});
document.querySelector("#copy").onclick = function() {
    var copyText = document.querySelector("#urloutput");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);
    document.execCommand("copy");
}
