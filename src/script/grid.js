const intro = document.getElementById('intro')
const gridElement = document.getElementById('grid')

function generateGridElement(size) {
  for (let i = 0; i < size ** 2; i++) {
    const element = createEle('div', 'pixel', "", "", "")
    element.style.width = `calc(100% / ${size})`
    gridElement.appendChild(element)
  }
}

function setupGridElement() {
  gridElement.innerHTML = ""
  gridElement.style.display = "flex"
}

function removeIntroElement() {
  intro.remove()
}

function generateGrid(e) {
  const size = e.target.getAttribute('value')

  removeIntroElement()
  setupGridElement()
  generateGridElement(size)
  setPixelEvent()
}
