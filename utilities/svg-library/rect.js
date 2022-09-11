class Rect extends Svg {
  constructor(target, width = 50, height = 25) {
    super(target);
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (this.width + this.height);
    this.createRect();
  }
  createRect() {
    this.createViewBox();
    let attr = `
    <rect
      x= 0
      y= 0
      width=${this.width}
      height=${this.height}
      rx = 0
      ry = 0
    />`;
    this.svgEl.innerHTML = attr;
  }
}
//test code
// let rect = new Rect(50, 50, ".target");
// rect.createRect(25, 25);
// rect.createAnimation(3);
