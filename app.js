const main = document.querySelector('#main');
const board = document.querySelector('#board');
//create header with game title
const title = document.createElement('h1');
title.className = "title";
title.innerText = "selector ep";
const header = document.querySelector('header');
header.appendChild(title)

// let's create our divs for the playing board.
for (let i = 0; i < 3; i++){
  const newRow = document.createElement('div');
  newRow.className = 'row';
  newRow.setAttribute('id', `${i}`);
  board.appendChild(newRow);
  for (let j = 0; j < 3; j++){
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    newSquare.setAttribute("id", `${j}`);
    newRow.appendChild(newSquare);
    newSquare.addEventListener('click', function(e){
      console.log(`Clicked on square ${i}, ${j}`);
      console.log(e);
      this.style.backgroundColor = "blue";
    })
  }
}

