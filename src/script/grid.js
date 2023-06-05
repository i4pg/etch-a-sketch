const intro = document.getElementById('intro')
const grid = document.getElementById('grid')

function generateGridElement(size) {
  for (let i = 0; i < size; i++) {
    const element = createEle('div', 'pixel', 'pixel', "", "")
    grid.appendChild(element)
  }
}

function setupGrid() {
  grid.innerHTML = ""
  grid.style.display = "flex"
}

function removeIntro() {
  intro.remove()
}

function generateGrid(e) {
  const size = e.target.getAttribute('value')

  removeIntro()
  setupGrid()
  generateGridElement(size)
}
