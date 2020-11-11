window.addEventListener("load", () => {
	const canvas = document.createElement("canvas");
	canvas.className += "icon";
	canvas.setAttribute("width", "128");
	canvas.setAttribute("height", "128");

	getLocation().then((location) => {
		console.log(location);
		getWeather(location.lat, location.lon).then((data) => {
			console.log(data);

			// Remove preloader
			const hidePreloader = document.querySelector(".preloader");
			hidePreloader.classList.add("hide");

			// Display content
			const showContent = document.querySelector(".content");
			showContent.classList.remove("hide");

			// Values from API
			const { icon, temperature, summary } = data.currently;

			// Math for converting fahrenheit to celsius
			let celsius = (temperature - 32) * (5 / 9);
			var degree = temperature + "\u00B0" + "F";
			// + celsius.toFixed(1) + "\u00B0" + "C";

			// Set value and display to DOM
			document.getElementById("timezone").innerHTML =
				location.city + ", " + location.region;
			document.querySelector(".c-weather__summary").innerHTML = summary;
			document.getElementById("c-temp").innerHTML = degree;

			const weathericon = document.querySelector(".c-weather__icon");
			weathericon.appendChild(canvas);

			//Set Icon
			setIcons(icon, document.querySelector(".icon"));

			// Generate 5 day forecast
			// let dailyData = data.daily.data;
			// const forecastList = document.querySelector(".c-forecast ol");
			// for (var i = 0; i < 5; i++) {
			// 	let iconId = `c-forecast--icon--${i}`;
			// 	const item = document.createElement("li");

			// 	item.classList.add("c-forecast__card");
			// 	item.innerHTML =
			// 		"<div class='c-weather__info'><canvas id=" +
			// 		iconId +
			// 		" width='128' height='128'></canvas><p class='c-weather__summary'>" +
			// 		dailyData[i].summary +
			// 		"</p><p>" +
			// 		dailyData[i].temperatureHigh +
			// 		"&deg;F</p></div>";
			// 	forecastList.appendChild(item);
			// 	setIcons(dailyData[i].icon, document.getElementById(iconId));
			// }
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

function getWeather(lat, long) {
	const proxy = "https://cors-anywhere.herokuapp.com/";

	const api = `${proxy}https://api.darksky.net/forecast/8c1a710cc5b01aaf9b78e7100381e1c4/${lat},${long}?exclude=minutely,hourly,flags`;

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
