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
//experience-slider//
let currentCustomIndex = 0;

function showCustomSlide(index) {
  const items = document.querySelectorAll(".custom-slider-item");
  const totalItems = items.length;

  if (index >= totalItems) {
    currentCustomIndex = 0;
  } else if (index < 0) {
    currentCustomIndex = totalItems - 1;
  } else {
    currentCustomIndex = index;
  }

  document.getElementById("customSliderTrack").style.transform =
    "translateX(" + -currentCustomIndex * 100 + "%)";
}

function nextCustomSlide() {
  showCustomSlide(currentCustomIndex + 1);
}

function prevCustomSlide() {
  showCustomSlide(currentCustomIndex - 1);
}

// Initialize the slider
showCustomSlide(currentCustomIndex);
//experience-slider-end//
//BACK TO TOP//
// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button depending on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
