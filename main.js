let dimension = 16;

const newGridButton = document.querySelector('#new-grid');
newGridButton.addEventListener('click', function(e) {
  dimension = Number(prompt('Enter the size'));

  if (dimension < 1 || dimension > 100) {
    alert('Dimension should be 1 to 100');
  } else {
    generateGrid(dimension);
  }
});

function generateGrid(dimension) {
  const container = document.querySelector('.container');
  container.textContent = ''; // reset

  for (let i = 0; i < dimension; i++) {
    const row = document.createElement('div');

    for (let j = 0; j < dimension; j++) {  
      row.append(createSquare());
    }

    container.append(row);
  }
}

function createSquare() {
  const div = document.createElement('div');

  div.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'black';
  });

  div.classList.add('box');
  
  return div;
}