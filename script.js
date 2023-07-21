const container = document.querySelector('.container');
const button = document.querySelector('.btn');

function getRandomColor() {
  let random = function () { return Math.floor(Math.random() * 256) };
  let randomColor = `rgb(${random()},${random()},${random()})`;
  return randomColor;
}
console.log(getRandomColor());
function drawSquare(squaresPerSide) {
  let div = document.createElement('div');
  let squareDimension = `${960 / squaresPerSide}px`;
  div.classList.add('square');
  div.style.width = squareDimension;
  div.style.height = squareDimension;
  div.addEventListener('mouseover', () => div.style.backgroundColor = getRandomColor());
  container.appendChild(div);
}

function drawGrid(n) {
  for (let i = 0; i < n ** 2 ; i++) {
    drawSquare(n);
  } 
}

function removeSquares() {
  container.innerHTML = '';
}

button.addEventListener('click', () => {
  let userSquares = +prompt('Squares per side(Max: 100)');
  if (userSquares > 100) {
    alert('Can\'t do more than 100x100');
  } else {
    removeSquares();
    drawGrid(userSquares);
  }
});

drawGrid(46);