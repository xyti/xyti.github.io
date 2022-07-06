/*
* clock.js
* https://github.com/xyti/omnitools/blob/main/src/assets/clock.js
* https://github.com/xyti/omnitools/blob/main/src/clock.html
* https://xyti.github.io/omnitools/clock.html
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/xyti/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/xyti/omnitools
*/
var d = new Date();
document.getElementById("time").innerHTML = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    document.getElementById("date").innerHTML = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
setInterval(function(){
    var d = new Date();
    document.getElementById("time").innerHTML = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    document.getElementById("date").innerHTML = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
}, 1000);
