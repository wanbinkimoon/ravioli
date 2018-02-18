export default class Triangle {
  constructor(p, side, origin, revolution) {
    this.state = {
      p: p, 
      revolution: revolution,
      origin: {...origin},
      point: {
        x1: 0, 
        y1: Math.sqrt(3) / 3 * side * - 1, 
        x2: side / 2  * -1, 
        y2: Math.sqrt(3) / 6 * side, 
        x3: side / 2, 
        y3: Math.sqrt(3) / 6 * side, 
      } 
    }
  }
  // Getter
  get draw() {
    return this.shape();
  }
  // Method
  shape() {
    const { p, point, origin, revolution } = this.state
    p.push()
    p.translate(origin.x, origin.y)
    p.rotate(revolution)
    console.log(revolution)
    p.triangle(point.x1, point.y1, point.x2, point.y2, point.x3, point.y3);
    p.pop()
  }
}