import Triangle from './triangle';

export default class Composition {
  constructor(p, side, radius, innerAngle, revolution) {
    this.state = {
      p: p, 
      side: side,
      revolution: revolution,
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
    const { p, origin, side, revolution } = this.state
    const shape = new Triangle(p, side, origin, revolution);
    shape.draw
  }
}