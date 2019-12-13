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
      // Display content
      const showContent = document.querySelector(".content");
      showContent.classList.remove("content--hide");

      document.querySelector(".city").innerHTML = "City";
      document.querySelector(".city__name").innerHTML = data.name;
      document.querySelector(".currently").innerHTML = "Currently";
      document.querySelector(".currently__desc").innerHTML =
        data.weather[0].description;

      // Get icon code
      let iconCode = data.weather[0].id;
      let iconClass = "wi wi-owm-" + iconCode + " wi-2x";
      const showIcon = document.getElementById("wi");
      showIcon.className = iconClass;

      // get 5 day forecast
      getFiveDayForecast(zipCode.value).then(fiveDayData => {
        console.log(fiveDayData);
      });
    });
  }
});

function validateZipCode(elementValue) {
  const zipCodePattern = /^\d{5}$/;
  return zipCodePattern.test(elementValue);
}

async function getCurrentWeather(zipCode) {
  const API = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial`;
  return await fetch(API).then(res => {
    return res.json();
  });
}

async function getFiveDayForecast(zipCode) {
  const fiveDayAPI = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial`;
  return await fetch(fiveDayAPI).then(res => {
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
