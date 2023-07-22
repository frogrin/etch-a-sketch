const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const blackButton = document.querySelector('.black');
const rainbowButton = document.querySelector('.rainbow');
const shadingButton = document.querySelector('.shading');

function getRandomColor() {
  let random = function () { return Math.floor(Math.random() * 256) };
  let randomColor = `rgb(${random()},${random()},${random()})`;
  return randomColor;
}

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

function blackMode(square) {
  square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');
}

blackButton.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => blackMode(square));
});

function rainbowMode(square) {
  square.addEventListener('mouseover', () => square.style.backgroundColor = getRandomColor());
}

rainbowButton.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => rainbowMode(square));
});

function shadingMode(square) {
  // Make the first color light grey and decrement it each pass through
  let r = 229.5;
  let g = 229.5;
  let b = 229.5;
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    r -= 25.5;
    g -= 25.5;
    b -= 25.5;
  });
} 

shadingButton.addEventListener('click', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => shadingMode(square));
})
drawGrid(46);