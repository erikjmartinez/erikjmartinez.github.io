var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=75401,us&appid=25187f2c68d8950cbad7de4d8c50ff5b&units=imperial', true)
weatherObject.send();

weatherObject.onload = function () {
    var currentForcast = JSON.parse(weatherObject.responseText);
    console.log(currentForcast);

    document.getElementById('currenttemp').innerHTML = currentForcast.main.temp;
    document.getElementById('currentspeed').innerHTML = currentForcast.wind.speed;
    document.getElementById('high').innerHTML = currentForcast.main.temp_max;
    document.getElementById('low').innerHTML = currentForcast.main.temp_min;
    document.getElementById('crip').innerHTML = currentForcast.weather["0"].main;

    var windChill = 35.74 + 0.6215 * currentForcast.main.temp - 35.75 * Math.pow(currentForcast.wind.speed, 0.16) + 0.4275 * currentForcast.main.temp * Math.pow(currentForcast.wind.speed, 0.16);

    document.getElementById("windchill").innerHTML = windChill.toFixed(2);

    var iconcode = currentForcast.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}


//above pulls the current weather conditions
//below pulls in the forcast for the next ten days

var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', '//api.openweathermap.org/data/2.5/forecast?zip=55333,us&appid=25187f2c68d8950cbad7de4d8c50ff5b&units=imperial', true)
forcastObject.send();

forcastObject.onload = function () {
    var weatherForcast = JSON.parse(forcastObject.responseText);
    console.log(weatherForcast);

    document.getElementById('day1').innerHTML = weatherForcast.list["0"].main.temp;
    document.getElementById('day2').innerHTML = weatherForcast.list["1"].main.temp;
    document.getElementById('day3').innerHTML = weatherForcast.list["2"].main.temp;
    document.getElementById('day4').innerHTML = weatherForcast.list["3"].main.temp;
    document.getElementById('day5').innerHTML = weatherForcast.list["4"].main.temp;
    document.getElementById('day6').innerHTML = weatherForcast.list["5"].main.temp;
    document.getElementById('day7').innerHTML = weatherForcast.list["6"].main.temp;
    document.getElementById('day8').innerHTML = weatherForcast.list["7"].main.temp;
    document.getElementById('day9').innerHTML = weatherForcast.list["8"].main.temp;
    document.getElementById('day10').innerHTML = weatherForcast.list["9"].main.temp;

}
// end of the function
