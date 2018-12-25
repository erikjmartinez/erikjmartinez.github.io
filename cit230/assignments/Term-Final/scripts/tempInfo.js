//Weather for Washingtion D.C temple
var apiURLW = 'https://api.openweathermap.org/data/2.5/weather?zip=20895,us&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequestW = new XMLHttpRequest();
weatherRequestW.open('GET', apiURLW, true)
weatherRequestW.send();
weatherRequestW.onload = function () {
    var weatherData = JSON.parse(weatherRequestW.responseText);

    document.getElementById('currenttempw').innerHTML = weatherData.main.temp.toFixed(1) + "&degF";
}

//Weather for Oakland temple
var apiURLO = 'https://api.openweathermap.org/data/2.5/weather?zip=94602,us&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequestO = new XMLHttpRequest();
weatherRequestO.open('GET', apiURLO, true)
weatherRequestO.send();
weatherRequestO.onload = function () {
    var weatherData = JSON.parse(weatherRequestO.responseText);

    document.getElementById('currenttempo').innerHTML = weatherData.main.temp.toFixed(1) + "&degF";
}

//Weather for San Diego temple
var apiURLSD = 'https://api.openweathermap.org/data/2.5/weather?zip=92122,us&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequestSD = new XMLHttpRequest();
weatherRequestSD.open('GET', apiURLSD, true)
weatherRequestSD.send();
weatherRequestSD.onload = function () {
    var weatherData = JSON.parse(weatherRequestSD.responseText);

    document.getElementById('currenttempsd').innerHTML = weatherData.main.temp.toFixed(1) + "&degF";
}

//Weather for Manhattan temple
var apiURLM = 'https://api.openweathermap.org/data/2.5/weather?zip=10023,us&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequestM = new XMLHttpRequest();
weatherRequestM.open('GET', apiURLM, true)
weatherRequestM.send();
weatherRequestM.onload = function () {
    var weatherData = JSON.parse(weatherRequestM.responseText);

    document.getElementById('currenttempm').innerHTML = weatherData.main.temp.toFixed(1) + "&degF";
}