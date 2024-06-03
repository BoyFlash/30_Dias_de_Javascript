const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92']

const cotainer = document.getElementById('.container');
const SQUARES_NR = 300;

for (let i = 0; i < SQUARES_NR; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

   square.addEventListener('mouseover', () => setColor(square));

   square.addEventListener('mouseout', () => removeColor(square));
   
  cotainer.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
