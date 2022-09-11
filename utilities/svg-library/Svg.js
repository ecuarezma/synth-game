class Svg {
  constructor(target) {
    this.target = target;
    this.id = Math.floor(Math.random() * 1000);
    const svgURI = "http://www.w3.org/2000/svg";
    this.svgEl = document.createElementNS(svgURI, "svg");
  }
  createViewBox() {
    this.svgEl.setAttribute("id", this.id);
    this.svgEl.setAttribute("viewBox", `0 0 100 100`);
    if (this.target) {
      // console.log(this.target, " from svg class");
      const el = document.querySelector(this.target);
      el.appendChild(this.svgEl);
    }
    return this.svgEl;
  }
  //animation controls
  createAnimation(duration) {
    this.element = this.svgEl.firstElementChild;
    this.element.setAttribute("stroke-dasharray", this.perimeter);
    this.duration = duration;
    this.timeRemaining = duration;
    this.start();
  }
  start = () => {
    this.onTick();
    this.timerID = setInterval(this.onTick, 20);
    // console.log(`start at ${this.duration}`);
  };
  onTick = () => {
    // console.log(
    //   `${this.timeRemaining.toFixed(2)} seconds left of ${this.duration}`
    // );
    if (this.timeRemaining <= 0) {
      this.element.setAttribute("stroke-dashoffset", this.perimeter);
      this.stop();
    } else {
      //perimeter * timeRemaining / duration - perimeter
      this.element.setAttribute(
        "stroke-dashoffset",
        -(this.perimeter * this.timeRemaining) / this.duration - this.perimeter
      );
      this.timeRemaining -= 0.02;
    }
  };
  stop = () => {
    clearInterval(this.timerID);
    // console.log("stop");
  };
}
