// Etch A Sketch - By xiyiwi

// declare var
const gridButtun = document.querySelector("[type='submit']");
const grid = document.getElementById("grid");
let dark = 0;

// Main fn
function etchASketch() {
  pixels = document.querySelectorAll(".px");

  // add another 10% of black to it so that only after 10 passes is the square completely black.
  pixels.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      r -= 10;
      g -= 10;
      b -= 10;
      rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
      e.target.style.backgroundColor = rgb;
      return rgb;
    });
  });

  // One time listener to apply RGB color
  pixels.forEach((element) => {
    element.addEventListener(
      "mouseover",
      () => {
        rgbGen();
      },
      { once: true }
    );
  });
}

// generate random rgb color
function rgbGen() {
  randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  r = randomBetween(0, 255);
  g = randomBetween(0, 255);
  b = randomBetween(0, 255);
  return r, g, b;
}

// when "new" buttun is clicked
function askUserGrid() {
  // 1. delete old grid
  if (grid.hasChildNodes() === true) {
    Object.values(grid.children).forEach((element) => {
      element.remove();
    });
  }

  // ask user for grid
  gridAnswer = window.prompt(
    "Put the number of squares per side for the new grid",
    "16~64"
  );

  // range 16~46
  while (gridAnswer < 16 || gridAnswer > 64) {
    askUserGrid();
  }

  return gridGenerator(gridAnswer, gridAnswer);
}

// take the user choices of grid and start work
// or will work onload it's invoked last line
function gridGenerator(x, y) {
  for (i = 0; i < x * y; i++) {
    px = document.createElement("div");
    px.classList.add("px");
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(${x}, auto);
      grid-template-rows: repeat(${y}, auto);
      `;
    grid.appendChild(px);
  }

  etchASketch();

  gridButtun.addEventListener("click", askUserGrid);
}

gridGenerator(16, 16);
