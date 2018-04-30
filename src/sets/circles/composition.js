export default class Composition {
  constructor(p, position, radius) {
    this.state = {
      p: p,
      radius: radius,
      position: {
        x: position.x,
        y: position.y,
      },
    };
    
  }

  get draw() {
    return this.circles();
  }

  circles() {
    return this.state.p.ellipse(this.state.position.x, this.state.position.y, this.state.radius, this.state.radius);
  }
}
