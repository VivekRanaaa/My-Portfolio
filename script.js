//header-js
// Dark mode functionality
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Set initial dark mode based on user preference
const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
//header-js-end//
