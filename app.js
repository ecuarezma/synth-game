// let's create our divs for the playing board.
createGrid();

//add event listeners for each square
document.addEventListener("mousedown", function (e) {
  onSelect(e);
});
