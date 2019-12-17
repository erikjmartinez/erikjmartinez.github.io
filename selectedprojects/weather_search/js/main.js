// An event listener to fire off things
document.getElementById("submit").addEventListener("click", showWeather);

function validateZipCode(elementValue) {
  const zipCodePattern = /^\d{5}$/;
  return zipCodePattern.test(elementValue);
}

async function getCurrentWeatherData(zipCode) {
  const API = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial`;
  return await fetch(API).then(res => {
    return res.json();
  });
}

async function getFiveDayForecastData(zipCode) {
  const fiveDayAPI = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=7b807c1ed0a1bc132675e584fce248e1&units=imperial`;
  const res = await fetch(fiveDayAPI);
  return res.json();
}

async function showWeather() {
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
    const currentWeatherData = await getCurrentWeatherData(zipCode.value);
    console.log(currentWeatherData);
    // Display content
    const showContent = document.querySelector(".content");
    showContent.classList.remove("content--hide");

    document.querySelector(".city").innerHTML = "City";
    document.querySelector(".city__name").innerHTML = currentWeatherData.name;
    document.querySelector(".currently").innerHTML = "Currently";
    document.querySelector(".currently__desc").innerHTML =
      currentWeatherData.weather[0].description;
    document.querySelector(".currently__temp").innerHTML =
      currentWeatherData.main.temp + "&deg;F";
    document.querySelector(".currently__feels").innerHTML =
      "<small>Feels like:</small> " +
      currentWeatherData.main.feels_like +
      "&deg;F";

    // Get icon code
    let iconId = currentWeatherData.weather[0].id;
    let iconClass = "wi wi-owm-" + iconId + " wi-2x";
    const showIcon = document.getElementById("wi");
    showIcon.className = iconClass;

    // get 5 day forecast
    //   const fiveDaydata = await getFiveDayForecastData(zipCode.value);
    //   console.log(fiveDaydata);

    //   const forecastTitle = document.querySelector(".forecast");
    //   const forcastText = document.createElement("h4");
    //   forcastText.innerText = "Next 5 Day Forecast";
    //   forecastTitle.appendChild(forcastText);

    //   const fiveDaydataArray = fiveDaydata.list;
    //   const forecastList = document.querySelector(".forecast ol");

    //   for (var i = 1; i < fiveDaydataArray.length; i += 8) {
    //     let iconId = fiveDaydataArray[i].weather[0].id;
    //     let iconClass = "wi wi-owm-" + iconId + " wi-2x";

    //     const item = document.createElement("li");

    //     // item.classList.add("forecast__card");
    //     item.innerHTML =
    //       "<i class='" +
    //       iconClass +
    //       "'></i><p class='forecast__temp'>" +
    //       fiveDaydataArray[i].main.temp +
    //       "</p><p class='forecast__desc'>" +
    //       fiveDaydataArray[i].weather[0].description +
    //       "</p>";
    //     forecastList.appendChild(item);
    //   }
  }
}
