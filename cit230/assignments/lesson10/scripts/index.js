  var output = document.querySelector('section');

  var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  var request = new XMLHttpRequest();

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
      var citydata = request.response;
      var cities = citydata['towns'];
      showTowns(citydata);
  };


  function showTowns(jsonObj) {
      var ct = jsonObj['towns'];
      for (var i = 0; i < ct.length; i++) {
          if (i === 2) {
              continue;
          }
          var myArticle = document.createElement('article');
          /* this is for the name or it should be idk */
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          myPara1.className += "para";
          var myPara2 = document.createElement('p');
          myPara2.className += "para";
          var myPara3 = document.createElement('p');
          myPara3.className += "para";
          var myPara4 = document.createElement('p');
          myPara4.className += "para";
          var myPara5 = document.createElement('p');
          myPara5.className += "para";
          var myList = document.createElement('ul');
          myList.className += "myL";
          myH2.textContent = ct[i].name;
          var myImg = document.createElement('img');
          myImg.className += "images";
          if (ct[i].name === 'Franklin') {
              myImg.src = "./images/benji.jpg";
          } else if (ct[i].name === 'Greenville') {
              myImg.src = "./images/green.jpg";
          } else {
              myImg.src = "./images/sf.jpg";
          }
          myPara1.textContent = 'Average Rainfall: ' + ct[i].averageRainfall;
          myPara2.textContent = 'Current Population: ' + ct[i].currentPopulation;
          myPara3.textContent = 'Year Founded: ' + ct[i].yearFounded;
          myPara4.textContent = 'Motto: ' + ct[i].motto;
          myPara5.textContent = 'Events:';
          var Events = ct[i].events;
          for (var j = 0; j < Events.length; j++) {
              var listItem = document.createElement('li');
              listItem.textContent = "- " + Events[j];
              myList.appendChild(listItem);
          }
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myPara4);
          myArticle.appendChild(myPara5);
          myArticle.appendChild(myList);
          myArticle.appendChild(myImg);
          output.appendChild(myArticle);
      }
  }
