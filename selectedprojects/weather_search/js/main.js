// An event listener to fire off things
document.getElementById("submit").addEventListener("click", function() {
  // Set variable to the value of input
  let zipCode = document.getElementById("zip_code");
  // Variable to validate zip code
  const zipCodePattern = /^\d{5}$/;
  // Set result to another variable
  let validateZipCode = zipCodePattern.test(zipCode.value);

  // Validate zip code
  // If not vaild then alert the user
  // else proceed
  if (validateZipCode === false) {
    zipCode.value = "";
    alert("INVALID ZIP CODE! PLEASE TRY AGAIN.");
  } else {
    getCurrentWeather(zipCode.value).then(data => {
      console.log(data);
      const body = document.querySelector("#results");
      const cityTitle = document.createElement("p");
      const cityName = document.createElement("h3");
      const weatherIcon = document.createElement("i");
      const currently = document.createElement("p");
      const desc = document.createElement("p");

      // Get icon code
      let iconCode = data.weather[0].id;

      cityTitle.className += "lead city-title";
      cityName.className += "city-name";
      currently.className += "lead currently-text";
      weatherIcon.className += `wi wi-owm-${iconCode} wi-2x`;
      desc.className += "weather-desc";

      cityTitle.textContent = "City";
      cityName.textContent = data.name;
      currently.textContent = "Currently";
      desc.textContent = data.weather[0].description;

      body.appendChild(cityTitle);
      body.appendChild(cityName);
      body.appendChild(currently);
      body.appendChild(weatherIcon);
      body.appendChild(desc);
    });
  }
});

function validateZipCode(elementValue) {
  const zipCodePattern = /^\d{5}$/;
  return zipCodePattern.test(elementValue);
}

function getCurrentWeather(zipCode) {
  const api = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial'`;
  return fetch(api).then(res => {
    return res.json();
  });
}

// document.getElementById("submit").addEventListener("click", showWeather);

// function showWeather() {
//   const zipCode = document.getElementById("zip_code").value;
//   getWeather(zipCode).then(data => {
//     console.log(data);
//   });
// }
