import Triangle from './triangle';

export default class Composition {
  constructor(p, side, radius, assignAngle, revolution) {
    this.state = {
      p: p,
      side: side,
      revolution: revolution,
      angle: assignAngle,
      origin: {
        x: radius * Math.cos(assignAngle),
        y: radius * Math.sin(assignAngle),
      },
    };
  }

  get draw() {
    return this.multTriangle();
  }

  calcOrigin(angle, origin) {
    const calc = (angle, origin) => {
      switch (true) {
        case 0 <= angle && angle <= 90:
          return (origin = {
            ...origin,
            y: origin.y * -1,
          });
        case 90 < angle && angle <= 180:
          return (origin = {
            x: origin.x * -1,
            y: origin.y * -1,
          });
        case 180 < angle && angle <= 270:
          return (origin = {
            ...origin,
            x: origin.x * -1,
          });
        case 270 < angle:
          return origin;
        default:
          return origin;
      }
    };
    return calc(angle, origin);
  }

  multTriangle() {
    const {p, origin, angle, side, revolution} = this.state;
    const shape = new Triangle(
      p,
      side,
      this.calcOrigin(angle, origin),
      revolution
    );
    shape.draw;
  }
}
