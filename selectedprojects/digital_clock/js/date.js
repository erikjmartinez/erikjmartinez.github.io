document.addEventListener('DOMContentLoaded', function() {
  function displayDate() {
    let currentDate = new Date();

    //declare variables for date
    let year = currentDate.getFullYear();
    let date = currentDate.getDate();

    // Array for months
    let monthString = new Array(12);
    monthString[0] = 'Jan';
    monthString[1] = 'Feb';
    monthString[2] = 'March';
    monthString[3] = 'April';
    monthString[4] = 'May';
    monthString[5] = 'June';
    monthString[6] = 'July';
    monthString[7] = 'Aug';
    monthString[8] = 'Sep';
    monthString[9] = 'Oct';
    monthString[10] = 'Nov';
    monthString[11] = 'Dec';

    let month = monthString[currentDate.getMonth()];

    // Array for days
    let dayString = new Array(7);
    dayString[0] = 'Sunday';
    dayString[1] = 'Monday';
    dayString[2] = 'Tuesday';
    dayString[3] = 'Wednesday';
    dayString[4] = 'Thursday';
    dayString[5] = 'Friday';
    dayString[6] = 'Saturday';

    let day = dayString[currentDate.getDay()];

    let c_date = document.getElementById('c_date');
    let c_day = document.getElementById('c_day');
    //let c_year = document.getElementById('c_year');

    c_day.innerText = day;
    c_date.innerText = month + ' ' + date + ' ' + year;
    //c_year.innerText = year;
  }
  // Call function
  displayDate();
});
