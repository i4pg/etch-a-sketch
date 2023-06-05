function setRgba(element, rgba) {
  let [r, g, b, a] = rgba
  element.target.style.backgroundColor = `rgba(${r},${g},${b},${a})`
}

function addAlpha(element, rgba) {
  let alpha = rgba[3]
  if (alpha < 0.01) {
    return
  }

  alpha -= 0.10
  rgba[3] = alpha
  setRgba(element, rgba)
}

function setPixelEvent() {
  const pixels = Array.from(gridElement.children)

  pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', (e) => { // this event will run inly once to set RGB color
      let rgba = getRandomRgba()
      setRgba(e, rgba) // set random rgba color when mouse enter a pixel 
      e.target.addEventListener('mouseenter', () => {
        addAlpha(e, rgba)
      }) // add new repeated event to add more alpha
    }, { once: true })
  });
}
