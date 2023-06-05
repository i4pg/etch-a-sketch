generateOptions()
startButton.addEventListener('click', myFunc)
Array.from(options.children).forEach(option => {
  option.addEventListener('click', myFunc)
}
)
