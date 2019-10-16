document.addEventListener('DOMContentLoaded', function() {
  function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridiem = 'AM';
    // Get div by id
    let clockDiv = document.getElementById('clock');

    // While seconds is less then 10
    // add a zero in front
    if (seconds < 10) {
      seconds = '0' + seconds;
    } else if (minutes < 10) {
      minutes = '0' + minutes;
    } else if (hours < 10) {
      hours = '0' + hours;
    }

    // Convert from 24 hour to 12 hour format
    // and keep track of the meridiem.
    if (hours > 12) {
      hours = hours - 12;
      meridiem = 'PM';
    }

    // 0 AM and 0 PM should read as 12
    if (hours === 0) {
      hours = 12;
    }

    // Set div with id clock to the current time
    clockDiv.innerText = hours + ':' + minutes + ':' + seconds;

    // Clock 'tick' effect
    // run displayTime function every second
    setInterval(displayTime, 1000);
  }
  // Call function
  displayTime();
});
