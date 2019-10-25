window.addEventListener('load', () => {
    let long;
    let lat;
    const locationTimezone = document.querySelector('.location--timezone');
    const tempDegree = document.querySelector('.temp--degree');
    const tempDescription = document.querySelector('.temp--description');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //console.log(lat, long);
            const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api = `${proxy}https://api.darksky.net/forecast/8c1a710cc5b01aaf9b78e7100381e1c4/${lat},${long}`;

            fetch(api)
                .then(res => {
                    return res.json();
                })

                .then(data => {
                    console.log(data);
                    const {
                        icon,
                        temperature,
                        summary
                    } = data.currently;

                    // Set DOM elements from API
                    locationTimezone.textContent = data.timezone;
                    tempDegree.textContent = temperature;
                    tempDescription.textContent = summary;

                    // Celcius
                    let celsius = (temperature - 32) * (5 / 9);

                    const tempSection = document.querySelector('.temp');
                    const tempSectionSpan = document.querySelector('.temp span');

                    // Change temp to Celsius
                    tempSection.addEventListener('click', () => {
                        if (tempSectionSpan.textContent === "F") {
                            tempSectionSpan.textContent = "C";
                            tempDegree.textContent = celsius.toFixed(1);

                        } else {
                            tempSectionSpan.textContent = "F";
                            tempDegree.textContent = temperature;

                        }


                    });

                    // Set Icon
                    setIcons(icon, document.querySelector('.icon'));
                });
        });

    }

    function setIcons(icon, iconId) {
        const skycons = new Skycons({
            color: "white"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});