let dimension = 16;

generateGrid(dimension);

// Handle generating a new gride button
const newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', function(e) {
  dimension = Number(prompt('Enter the size'));

  if (dimension < 1 || dimension > 100) {
    alert('Dimension should be 1 to 100');
  } else {
    generateGrid(dimension);
  }
});

// Handle erase button
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', function(e) { 
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => changeColorWhenHover(box, 'white'));
  removeActiveButton();
  eraserButton.classList.add('active');
});

// Handle color mode button
const colorModeButton = document.querySelector('.color-mode');
colorModeButton.addEventListener('click', function(e) { 
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => changeColorWhenHover(box));
  removeActiveButton();
  colorModeButton.classList.add('active');
});

// Handle clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(e) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.style.backgroundColor = 'white');
});

function removeActiveButton() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));
}

// Change color to black by default
function changeColorWhenHover(ele, color='black') {
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