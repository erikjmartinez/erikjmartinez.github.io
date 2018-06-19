var t = 73;
var s = 10;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("windchill").innerHTML = f.toFixed(2);
document.getElementById("currenttemp").innerHTML = t;
document.getElementById("currentspeed").innerHTML = s;