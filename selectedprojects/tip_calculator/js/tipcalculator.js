document.addEventListener('DOMContentLoaded', function() {
  //Hide the tip amount on load
  document.getElementById('totalTip').style.display = 'none';
  document.getElementById('each').style.display = 'none';
});

function calculateTip() {
  let billAmt = document.getElementById('bill_amount').value;
  let serviceQuality = document.getElementById('service_quality').value;
  let numOfPeople = document.getElementById('ppl_amount').value;

  // Validate inputs
  if (billAmt === '' || serviceQuality === '') {
    alert('Please enter valid values.');
    return;
  }

  if (numOfPeople === '' || numOfPeople < 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  // Calculate the tip
  let total = (billAmt * serviceQuality) / numOfPeople;

  // Round two decimal places
  total = Math.round(total * 100) / 100;

  // Always display with two decimal points
  total = total.toFixed(2);

  // Display the tip to be paid
  document.getElementById('totalTip').style.display = 'contents';

  document.getElementById('tip').innerHTML = total;
}

//click to call function
document.getElementById('calculate').addEventListener('click', function() {
  calculateTip();
});
