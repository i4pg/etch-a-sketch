const startButton = document.getElementById('start')
appendSizesChoices()


let sizesArray = options.children
sizesArray = Array.from(options.children)
sizesArray.push(startButton)
sizesArray.forEach(size => size.addEventListener('click', (e) => {
  generateGrid(e);
  if (size !== startButton) {
    toggleHamburger()
  }
})
)
