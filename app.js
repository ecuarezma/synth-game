// let's create our divs for the playing board.
function createGrid() {
  const board = document.querySelector("#board");
  for (let i = 0; i < 3; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    newRow.setAttribute("class", `row ${i}`);
    board.appendChild(newRow);
    for (let j = 0; j < 3; j++) {
      const newSquare = document.createElement("div");
      newSquare.className = "square";
      newSquare.setAttribute("class", `square ${i}${j}`);
      newRow.appendChild(newSquare);
    }
  }
}
//make grid
createGrid();

//create event handlers
function onSelect(target, id, shape) {
  //try to connect some music here to selected square
  const sample = new Audio(`./samples/tropical_sample${id}.mp3`);
  // console.log(target, id, shape);
  target.classList.add("selected");
  sample.addEventListener("loadedmetadata", function (e) {
    // console.log(sample.duration);
    sample.play();
    sample.loop = true;
    shape.createAnimation(sample.duration);
  });
  target.addEventListener("mouseup", function () {
    sample.loop = false;
  });
  sample.addEventListener("ended", function () {
    target.classList.remove("selected");
  });
}

//create event listeners for each square
let squares = document.querySelectorAll(".square");

//pass along all necessary arguments so event handler function has access to them
for (let square of squares) {
  let shape = new Rect();
  square.appendChild(shape.svgEl);
  square.addEventListener("mousedown", ({ target }) => {
    if (!target.classList[0]) onSelect(target, square.classList[01], shape);
  });
}
