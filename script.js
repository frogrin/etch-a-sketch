const container = document.querySelector('.container');
const squaresPerSide = 46;
let totalSquares = squaresPerSide * squaresPerSide;
let squareDimension = `${960 / squaresPerSide}px`;

function drawSquare() {
  let div = document.createElement('div');
  div.classList.add('square');
  div.style.width = squareDimension;
  div.style.height = squareDimension;
  container.appendChild(div);
}

for (let i = 0; i < totalSquares; i++) {
  drawSquare();
}