var requestURL = 'jsondata/services.json';

 var request = new XMLHttpRequest();

 request.open('GET', requestURL)
 request.responseType = 'json';
 request.send();

 request.onload = function () {
     var bikeServices = request.response;
 }