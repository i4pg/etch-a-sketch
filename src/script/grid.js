const intro = document.getElementById('intro')
const startButton = document.getElementById('start')
const grid = document.getElementById('grid')

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    const ele = createEle('div', 'pixel', 'pixel', "", "")
    grid.appendChild(ele)
  }
}

function myFunc(e) {
  grid.innerHTML = ""
  intro.remove()
  size = e.target.getAttribute('value')
  generateGrid(size)
}
