
var bikeServices = new XMLHttpRequest();
bikeServices.open('GET', '', true)
bikeServices.send();

bikeServices.onload = function () {
    var bS = JSON.parse(bikeServices.responseText);
    console.log(bS);

};
