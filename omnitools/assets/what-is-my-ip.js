/*
* what-is-my-ip.js
* https://github.com/xyti/omnitools/blob/main/src/assets/what-is-my-ip.js
* https://github.com/xyti/omnitools/blob/main/src/what-is-my-ip.html
* https://xyti.github.io/omnitools/what-is-my-ip.html
* 
* By xyti, https://github.com/xyti
*
* License : https://github.com/xyti/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/xyti/omnitools
*/
$(document).ready(function(){
    var url = "https://checkip.amazonaws.com/";
    $.ajax({
      url: url,
      method: "GET",
      success: function(data){
        let ip = `${data}`;
        $("#ip").html(ip);
        var url = "https://fileproxy--xyti.repl.co/?url=" + encodeURIComponent("http://ip-api.com/json/" + ip + "?fields=16974545");
        $.ajax({
          url: url,
          method: "GET",
          success: function(data){
            let city = `City: ${JSON.parse(data).city}`;
            let country = `Country: ${JSON.parse(data).country}`;
            let coord = `Coordinates: ${JSON.parse(data).lat}, ${JSON.parse(data).lat}`;
            let isp = `ISP: ${JSON.parse(data).isp}`;
            let mobile = `Mobile: ${JSON.parse(data).mobile}`;
            let proxy = `Proxy: ${JSON.parse(data).proxy}`;
            let hosting = `Hosting: ${JSON.parse(data).hosting}`;
            $("#city").html(city);
            $("#country").html(country);
            $("#coord").html(coord);
            $("#isp").html(isp);
            $("#mobile").html(mobile);
            $("#proxy").html(proxy);
            $("#hosting").html(hosting);
          },
          error: function(){
            let errorMsg = `Error - please check your browser or internet settings`;
            $("#city").html(errorMsg);
          }
        });
      },
      error: function(){
        let errorMsg = `Error - please check your browser or internet settings`;
        $("#ip").html(errorMsg);
      }
    });
});
