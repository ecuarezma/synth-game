const main = document.querySelector("#main");
const board = document.querySelector("#board");
//create header with game title
const title = document.createElement("h1");
title.className = "title";
title.innerText = "selector ep";
const header = document.querySelector("header");
header.appendChild(title);

// let's create our divs for the playing board.
for (let i = 0; i < 3; i++) {
  const newRow = document.createElement("div");
  newRow.className = "row";
  newRow.setAttribute("class", `row ${i}`);
  board.appendChild(newRow);
  for (let j = 0; j < 3; j++) {
    //try to connect some music here to each square
    let sample = new Audio(`./samples/${i}${j}.wav`);
    //finish making square grid
    const newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.setAttribute("class", `square ${i}${j}`);
    newRow.appendChild(newSquare);

    //add event listeners for each square
    newSquare.addEventListener("mousedown", function (e) {
      let selected = e.path[0];
      console.log(selected);
      console.log(`Clicked on square ${i}${j}`);
      sample.play();
      sample.loop = sample.loop ? false : true;
      sample.addEventListener("play", function () {
        selected.classList.add("selected");
      });
      sample.addEventListener("ended", function () {
        selected.setAttribute("class", `square ${i}${j}`);
      });
    });
    newSquare.addEventListener("mouseup", function () {
      sample.loop = false;
    });
  }
}
