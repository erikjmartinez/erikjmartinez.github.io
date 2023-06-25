// Create a vaibale to retrieve value from local
// storage
let darkMode = localStorage.getItem("darkMode");

// Create variable and set it to the element with the
// id of dark-mode-toggle
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Check if darkmode is enabled

// true - turn it off

// false - turn it on

const enableDarkMode = () => {
  // add class darkmode to body
  document.body.classList.add("darkmode");

  // update local storage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // add class darkmoe to body
  document.body.classList.remove("darkmode");

  // update local storage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
