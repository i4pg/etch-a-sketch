function a(e) {
  e.target.style.backgroundColor = 'cyan'

}
function addPixelEvent() {
  const pixels = Array.from(gridElement.children)

  pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', a)
  });
}
