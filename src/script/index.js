const startButton = document.getElementById('start')
let optionsArray = options.children
optionsArray = Array.from(options.children)
optionsArray.push(startButton)

optionsArray
  .forEach(
    option =>
      option.addEventListener(
        'click', generateGrid)
  )

generateOptions()
