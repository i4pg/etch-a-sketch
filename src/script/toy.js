const leftCircle = document.getElementById('left-circle')
const rightCircle = document.getElementById('right-circle')

grid.addEventListener('mousemove', (e) => {
  const x = -(window.innerWidth / 2 - e.pageX) / 25;
  const y = -(window.innerHeight / 2 - e.pageY) / 25;
  leftCircle.style.transform =
    `translateY(${y}px) translateX(${x}px)`;
  rightCircle.style.transform =
    `translateY(${x}px) translateX(${y}px)`;
});
