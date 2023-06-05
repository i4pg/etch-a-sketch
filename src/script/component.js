function createEle(tag, klass, id, content, value) {
  const newElement = document.createElement(tag)
  newElement.className = klass
  id !== "" ? newElement.setAttribute('id', id) : "";
  content !== "" ? newElement.textContent = content : "";
  value !== "" ? newElement.setAttribute('value', value) : "";

  return newElement
}
