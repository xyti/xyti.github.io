/*
* what-is-my-referer.js
* https://github.com/xyti/omnitools/blob/main/src/assets/what-is-my-referer.js
* https://github.com/xyti/omnitools/blob/main/src/what-is-my-referer.html
* https://xyti.github.io/omnitools/what-is-my-referer.html
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/xyti/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/xyti/omnitools
*/
if (document.referer == null) {
  document.getElementById("referer").innerHTML = "No referer / hidden";
} else {
  document.getElementById("referer").innerHTML = document.referer;
}
