var closures = new XMLHttpRequest();
closures.open('GET', 'https://rkarchs.github.io/assignments/Term%20Final/jsondata/closures.json', true)
closures.send();

closures.onload = function () {
    var dates = JSON.parse(closures.responseText);
    

    document.getElementById('wdct').innerHTML = dates.Templehours["0"].closures;
    document.getElementById('oct').innerHTML = dates.Templehours["1"].closures;
    
    for(var i = 0; i < 10; i++){
        var sdt = 'sdt' + i;
        var num =  i;
      
          document.getElementById(sdt).innerHTML = dates.Templehours[2].closures[i];
        
    }
    
    for(var i = 0; i < 9; i++){
        var mt = 'mt' + i;
        var num =  i;
      
          document.getElementById(mt).innerHTML = dates.Templehours[3].closures[i];
        
    }
};