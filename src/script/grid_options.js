const options = document.getElementById('options')

function generateOptions() {
  options.innerHTML = ""
  let sizes = [16, 32, 64]

  sizes.forEach(size => {
    const ele = createEle('div', 'option hvr-fade', '', `${size}x${size}`, size)
    options.appendChild(ele)
  });
}

