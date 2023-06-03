// Look for hamburger
const hamburger = document.getElementById("hamburger");
const hamburgerContent = document.getElementById("hamburger-content")

// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  hamburgerContent.classList.toggle("active");
});
