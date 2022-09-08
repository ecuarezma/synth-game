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
