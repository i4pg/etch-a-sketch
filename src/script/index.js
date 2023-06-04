const intro = document.getElementById('intro')
const startButton = document.getElementById('start')

function createEle(tag, klass, id, content, value) {
  const newElement = document.createElement(tag)
  newElement.className = klass
  newElement.setAttribute('id', id)
  newElement.textContent = content
  newElement.setAttribute('value', value)

  return newElement
}

function generateGrid(size) {

}

function myFunc(e) {
  size = e.target.value
  intro.remove()
  generateGrid(size)
}

startButton.addEventListener('click', myFunc)

generateOptions()
