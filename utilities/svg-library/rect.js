class Rect extends Svg {
  constructor(target, width = 100, height = 100) {
    super(target);
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (width + height);
    this.createRect();
  }
  createRect() {
    this.createViewBox();
    let attr = `
    <rect
      width=${this.width}
      height=${this.height}
    />`;
    this.svgEl.innerHTML = attr;
  }
}

// create a rectangle sample code
// const rectangle = new Rect(target element, width, height)
