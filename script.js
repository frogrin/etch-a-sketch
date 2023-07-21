const container = document.querySelector('.container');
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  let userSquares = +prompt('Squares per side(Max: 100)');
  if (userSquares > 100) {
    alert('Can\'t do more than 100x100');
  } else {
    removeSquares();
    drawGrid(userSquares);
  }
});

function drawSquare(squaresPerSide) {
  let div = document.createElement('div');
  let squareDimension = `${960 / squaresPerSide}px`;
  div.classList.add('square');
  div.style.width = squareDimension;
  div.style.height = squareDimension;
  div.addEventListener('mouseover', e => e.target.classList = 'hovered');
  container.appendChild(div);
}

function drawGrid(n) {
  for (let i = 0; i < n * n; i++) {
    drawSquare(n);
  } 
}

function removeSquares() {
  container.innerHTML = '';
}

drawGrid(46);