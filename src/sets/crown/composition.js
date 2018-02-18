import Triangle from './triangle';

export default class Composition {
  constructor(p, side, radius, innerAngle) {
    this.state = {
      p: p, 
      side: side,
      origin: {
        x: radius * 10 * Math.cos(innerAngle),
        y: radius * 10 * Math.sin(innerAngle),
      }
    }
  }

  get draw() {
    return this.multTriangle();
  }

  multTriangle() {
    const { p, origin, side } = this.state
    const shape = new Triangle(p, side, origin);
    shape.draw
  }
}