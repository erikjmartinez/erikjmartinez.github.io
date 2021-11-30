window.addEventListener("load", () => {
	const canvas = document.createElement("canvas");
	canvas.className += "icon";
	canvas.setAttribute("width", "128");
	canvas.setAttribute("height", "128");

	getLocation().then((location) => {
		console.log(location);
		getWeather(location.city, location.region).then((data) => {
			console.log(data);

			// Remove preloader
			const hidePreloader = document.querySelector(".preloader");
			hidePreloader.classList.add("hide");

			// Display content
			const showContent = document.querySelector(".content");
			showContent.classList.remove("hide");

			// Values from API
			const { icon, temp, conditions } = data.currentConditions;

			// Math for converting fahrenheit to celsius
			let celsius = (temp - 32) * (5 / 9);
			var degree = temp + "\u00B0" + "F";
			// + celsius.toFixed(1) + "\u00B0" + "C";

			// Set value and display to DOM
			document.getElementById("timezone").innerHTML =
				location.city + ", " + location.region;
			document.querySelector(".c-weather__summary").innerHTML = conditions;
			document.getElementById("c-temp").innerHTML = degree;

			const weathericon = document.querySelector(".c-weather__icon");
			weathericon.appendChild(canvas);

			//Set Icon
			setIcons(icon, document.querySelector(".icon"));

			// // Generate 5 day forecast
			let dailyData = data.days;
			const forecastList = document.querySelector(".c-forecast ol");
			for (var i = 1; i <= 5; i++) {
				let iconId = `c-forecast--icon--${i}`;
				const item = document.createElement("li");

				item.classList.add("c-forecast__card");
				item.innerHTML =
					"<div class='c-weather__info'><canvas id=" +
					iconId +
					" width='128' height='128'></canvas><p class='c-weather__summary'>" +
					dailyData[i].conditions +
					"</p><p>" +
					dailyData[i].temp +
					"&deg;F</p><p>" +
					dailyData[i].datetime +
					"</p></div>";
				forecastList.appendChild(item);
				setIcons(dailyData[i].icon, document.getElementById(iconId));
			}
		});
	});
});

function getLocation() {
	var endpoint =
		"http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp";

	return fetch(endpoint).then((response) => {
		return response.json();
	});
}

function getWeather(city, region) {
	//const proxy = "https://cors-anywhere.herokuapp.com/";

	const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${region}?unitGroup=us&key=2VPLX39S6XKQKBP8FTT2G6A6G&include=fcst%2Chours%2Ccurrent`;

	return fetch(api).then((res) => {
		return res.json();
	});
}

function setIcons(icon, iconId) {
	const skycons = new Skycons({
		color: "white",
	});
	const currentIcon = icon.replace(/-/g, "_").toUpperCase();
	skycons.play();
	return skycons.set(iconId, Skycons[currentIcon]);
}
