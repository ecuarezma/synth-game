function onSelect(event) {
  let selected = event.target;
  //try to connect some music here to selected square
  let sample = new Audio(`./samples/${selected.classList[01]}.wav`);
  sample.play();
  sample.loop = sample.loop ? false : true;
  sample.addEventListener("play", function () {
    selected.classList.add("selected");
  });
  selected.addEventListener("mouseup", function () {
    sample.loop = false;
  });
  sample.addEventListener("ended", function () {
    selected.classList.remove("selected");
  });
}
