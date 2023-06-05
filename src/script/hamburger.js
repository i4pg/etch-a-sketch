// Look for hamburger
const hamburger = document.getElementById("hamburger");
const hamburgerContent = document.getElementById("hamburger-content")

function toggleHamburger() {
  hamburger.classList.toggle("is-active");
  hamburgerContent.classList.toggle("active");
}

// On click
hamburger.addEventListener("click", toggleHamburger);
