const prefersColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const toggleColorScheme = () => {
  const element = document.getElementById("dark-mode-toggle");
  element.textContent = prefersColorScheme ? "Light" : "Dark";
  prefersColorScheme != prefersColorScheme;
};

toggleColorScheme();

// Add a listener to the toggle button
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", toggleColorScheme);
