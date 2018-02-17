import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import drawStars from './modules/drawStars';
import Star from './modules/Star'

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  // const d = new Star(500, 300, 4);

  // make library globally available
  window.p5 = p5;

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch');
    p5.frameRate(10);
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background('#111');
    drawStars(100)
  }
}

export default sketch;