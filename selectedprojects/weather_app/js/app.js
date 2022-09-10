window.addEventListener('load', () => {
  // create vars for api call
  let long;
  let lat;

  // create vars for DOM elements
  const cDate = document.getElementById('currentDate');
  const cTemp = document.getElementById('currentTemp');
  const cDescription = document.getElementById('currentDescription');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // console.log(lat, long);
      // const proxy = 'https://cors-anywhere.herokuapp.com/'

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial`;

      fetch(api)
        .then((res) => {
          return res.json();
        })

        .then((data) => {
          console.log(data);
          //   create vars for the weather data
          const temperature = data.main.temp;
          const summary = data.weather[0].description;
          const icon = data.weather[0].icon;

          // Set DOM elements from API
          cDate.innerHTML = formatTimezone(data.timezone);
          cTemp.innerHTML = `${temperature} F`;
          cDescription.innerHTML = summary;

          // Celcius
          let celsius = (temperature - 32) * (5 / 9);
          let tempSection = document.querySelector('.flex-container');

          // Change temp to Celsius
          tempSection.addEventListener('click', () => {
            if (cTemp.innerHTML === `${temperature} F`) {
              cTemp.innerHTML = `${celsius.toFixed(1)} C`;
            } else {
              cTemp.innerHTML = `${temperature} F`;
            }
          });

          // Set Icon
          document.getElementById('icon').src = `http://openweathermap.org/img/w/${icon}.png`;
        });
    });
  }
});

function formatTimezone(tz) {
  d = new Date();
  localTime = d.getTime();
  localOffset = d.getTimezoneOffset() * 60000;
  utc = localTime + localOffset;
  let zone = utc + 1000 * tz;
  nd = new Date(zone).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return nd;
}

function switchTempMessaurement() {
  // Celcius
  let celsius = (temperature - 32) * (5 / 9);

  const tempSection = document.getElementById('currentTemp');
  const tempSectionSpan = document.querySelector('degreeSymbol');

  // Change temp to Celsius
  tempSection.addEventListener('click', () => {
    if (tempSectionSpan.nodeValue === 'F') {
      tempSectionSpan.nodeValue = 'C';
      tempDegree.nodeValue = celsius.toFixed(1);
    } else {
      tempSectionSpan.nodeValue = 'F';
      tempDegree.nodeValue = temperature;
    }
  });
}
