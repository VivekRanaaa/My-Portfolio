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
/*-----------------------------BALL_JS_START----------------------------------------------------*/

const ball = document.querySelector('.ball');
const innerBall = document.querySelector('.inner-ball'); // Select the inner ball
const buttons = document.querySelectorAll('button,a,img'); // Select all buttons
let ballX = 0, ballY = 0;
let mouseX = 0, mouseY = 0;
let delay = 1; // This controls the delay factor

// Listen for mouse movement and update mouseX, mouseY
document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Function to move the ball and inner ball with delay (lerping effect)
function moveBalls() {
    ballX += (mouseX - ballX) * delay;
    ballY += (mouseY - ballY) * delay;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    innerBall.style.left = `${ballX}px`; // Move inner ball with the outer ball
    innerBall.style.top = `${ballY}px`;

    requestAnimationFrame(moveBalls); // Keep the loop going
}

moveBalls(); // Start the movement loop

// Apply hover effect to all buttons
buttons.forEach(button => {
    // Button hover event to increase outer ball size and change color
    button.addEventListener('mouseenter', () => {
        ball.style.width = '100px';
        ball.style.height = '100px';
        ball.style.backgroundColor = '#f763017a'; // Change color when hovering the button
        innerBall.style.width = '20px'; // Change inner ball size
        innerBall.style.height = '20px'; // Change inner ball size
    });

    // Reset outer ball size and color when the mouse leaves the button
    button.addEventListener('mouseleave', () => {
        ball.style.width = '50px';
        ball.style.height = '50px';
        ball.style.backgroundColor = ' #e6497c'; // Revert to red after hovering the button
        innerBall.style.width = '20px'; // Reset inner ball size
        innerBall.style.height = '20px'; // Reset inner ball size
    });
});
/*-----------------------------BALL_JS_END----------------------------------------------------*/
