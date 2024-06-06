const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92']

const container = document.getElementById('container');
const SQUARES_NR = 300;

for(let i = 0; i < SQUARES_NR; i++) {
   const square = document.createElement('div');
   square.classList.add('square');
   container.appendChild(square);

   square.addEventListener('mouseover', () => setColorEL(square));

   square.addEventListener('mouseout', () => removeColor(square));
   
   container.appendChild(square);
}

function setColorEL(el) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.background = '#111111';
  el.style.boxShadow = '0 0 2px #fff';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// function getRandomColor() {
//    const letters = '0123456789ABCDEF';
//    let color = '#';
//    for (let i = 0; i < 6; i++) {
//      color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//  }