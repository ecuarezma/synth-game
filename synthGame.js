const main = document.querySelector('#main');

// let's create our divs for the playing board.
for (let i = 0; i < 3; i++){
  const newRow = document.createElement('div');
  newRow.className = 'row';
  newRow.setAttribute('id', `${i}`);
  main.appendChild(newRow);
  for (let j = 0; j < 3; j++){
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    newSquare.setAttribute("id", `${j}`);
    newRow.appendChild(newSquare);
  }
}

