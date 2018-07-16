//var requestURL = 'https://gringuitolokito.github.io/cit230/assignments/Term%20Final/jsondata/services.json';
//
//var request = new XMLHttpRequest();
//
//request.open('GET', requestURL)
//request.responseType = 'json';
//request.send();
//
//request.onload = function () {
//    var bikeServices = request.response;
//    console.log(bikeServices);
//}
//
//request.onload = function () {
//    var bS = request.response.Services;
//
//    for (let i = 0; i < bS.length; i++) {
//        var table = document.getElementById('pricetable');
//        var row = table.insertRow(0);
//        var cell1 = row.insertCell(0);
//        var cell2 = row.insertCell(1);
//
//        cell1.innerHTML = bS[i].title;
//        cell2.innerHTML = '$' + bS[i].price;
//
//    }
//};
var bikeServices = new XMLHttpRequest();
bikeServices.open('GET', 'https://gringuitolokito.github.io/cit230/assignments/Term%20Final/jsondata/services.json', true)
bikeServices.send();

bikeServices.onload = function () {
    var bS = JSON.parse(bikeServices.responseText);
    console.log(bS);

    document.getElementById('item1').innerHTML = bS.Services["0"].title;
    document.getElementById('item2').innerHTML = "$" + bS.Services["0"].price;
    document.getElementById('item3').innerHTML = bS.Services["1"].title;
    document.getElementById('item4').innerHTML = "$" + bS.Services["1"].price;
    document.getElementById('item5').innerHTML = bS.Services["2"].title;
    document.getElementById('item6').innerHTML = "$" + bS.Services["2"].price;
    document.getElementById('item7').innerHTML = bS.Services["3"].title;
    document.getElementById('item8').innerHTML = "$" + bS.Services["3"].price;
    document.getElementById('item9').innerHTML = bS.Services["4"].title;
    document.getElementById('item10').innerHTML = "$" + bS.Services["4"].price;
    document.getElementById('item11').innerHTML = bS.Services["5"].title;
    document.getElementById('item12').innerHTML = "$" + bS.Services["5"].price + ' ' + bS.Services[5].details;
    document.getElementById('item13').innerHTML = bS.Services["6"].title;
    document.getElementById('item14').innerHTML = "$" + bS.Services["6"].price;
    document.getElementById('item15').innerHTML = bS.Services["7"].title;
    document.getElementById('item16').innerHTML = "$" + bS.Services["7"].price + ' ' + bS.Services[7].details;
    document.getElementById('item17').innerHTML = bS.Services["8"].title;
    document.getElementById('item18').innerHTML = "$" + bS.Services["8"].price + ' ' + bS.Services[8].details;
    document.getElementById('item19').innerHTML = bS.Services["9"].title;
    document.getElementById('item20').innerHTML = "$" + bS.Services["9"].price;
    document.getElementById('item21').innerHTML = bS.Services["10"].title;
    document.getElementById('item22').innerHTML = "$" + bS.Services["10"].price;
    document.getElementById('item23').innerHTML = bS.Services["11"].title;
    document.getElementById('item24').innerHTML = "$" + bS.Services["11"].price;
    document.getElementById('item25').innerHTML = bS.Services["12"].title;
    document.getElementById('item26').innerHTML = "$" + bS.Services["12"].price;
}
