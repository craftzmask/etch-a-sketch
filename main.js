let dimension = 16;

generateGrid(dimension);

// Handle dimension generator
const range = document.querySelector('.dimension');
range.addEventListener('input', function(e) {
  dimension = range.value;
  const dimensionDisplay = document.querySelector('.dimension-display');
  dimensionDisplay.textContent = `${dimension} x ${dimension}`;
  generateGrid(dimension);
  removeActiveButton();
});

// Handle erase button
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', function(e) { 
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => changeColorWhenHover(box));
  removeActiveButton();
  eraserButton.classList.add('active');
});

// Handle color mode button
const colorModeButton = document.querySelector('.color-mode');
colorModeButton.addEventListener('click', function(e) { 
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => changeColorWhenHover(box, 'black'));
  removeActiveButton();
  colorModeButton.classList.add('active');
});

// Handle rainbow mode button
const rainbowMode = document.querySelector('.rainbow-mode');
rainbowMode.addEventListener('click', function(e) { 
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => changeColorWhenHover(box, `rgb(${random()}, ${random()}, ${random()})`));
  removeActiveButton();
  rainbowMode.classList.add('active');
});

// Handle clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(e) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.style.backgroundColor = 'white');
});

// Generate a random number range 0-255
function random() {
  return Math.floor(Math.random() * 255);
}

function removeActiveButton() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));
}

// Change color to white by default
function changeColorWhenHover(ele, color='white') {
  ele.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = color;
  });
}

function generateGrid(dimension) {
  const container = document.querySelector('.container');
  const containerWidth = container.offsetWidth;
  container.textContent = ''; // reset

  for (let i = 0; i < dimension; i++) {
    const div = document.createElement('div');

    for (let j = 0; j < dimension; j++) {
      const squareSize = containerWidth / dimension;
      div.append(createSquare(squareSize));
    }

    container.append(div);
  }
}

function createSquare(squareSize) {
  const div = document.createElement('div');
  div.style.width = `${squareSize}px`;
  div.style.height = `${squareSize}px`;
  changeColorWhenHover(div);
  div.classList.add('box');

  return div;
}