function getRandomNumber(n) {
  return Math.floor(Math.random() * n)
}

function getRandomRgba() {
  const r = getRandomNumber(255)
  const g = getRandomNumber(255)
  const b = getRandomNumber(255)
  const a = 0.99

  return [r, g, b, a]
}

function createEle(tag, klass, id, content, value) {
  const newElement = document.createElement(tag)
  newElement.className = klass
  id !== "" ? newElement.setAttribute('id', id) : "";
  content !== "" ? newElement.textContent = content : "";
  value !== "" ? newElement.setAttribute('value', value) : "";

  return newElement
}
