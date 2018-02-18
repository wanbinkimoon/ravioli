export default class Triangle {
  constructor(p, side, origin) {
    this.state = {
      p: p, 
      point: {
        x1: origin.x, 
        y1: (Math.sqrt(3) / 3 * side * - 1) + origin.y, 
        x2: (side / 2  * -1) + origin.x, 
        y2: (Math.sqrt(3) / 6 * side) + origin.y, 
        x3: (side / 2)  + origin.x, 
        y3: (Math.sqrt(3) / 6 * side) + origin.y, 
      } 
    }
  }
  // Getter
  get draw() {
    return this.shape();
  }
  // Method
  shape() {
    const { p, point } = this.state
    p.triangle(point.x1, point.y1, point.x2, point.y2, point.x3, point.y3);
  }
}