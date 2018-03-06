import Composition from './composition';

let orbit = 0;
export default function(p, vals) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.background(255);
  p.angleMode(p.DEGREES);

  p.rotate(orbit);
  orbit += EIGHT / 100;

  p.stroke(0);
  p.strokeWeight(8);
  p.noFill();

  let radius = ONE * 8;
  p.rotate(orbit);
  const position = {
    x: 0,
    y: 0,
  };

  const item = new Composition(p, position, radius);
  let i = 1
  if (i !== 0) {
    radius -= radius / TWO;
    console.log(radius)
    item.draw;
    i += 1;
  }
  while (i <= TWO);
  // debugger;
}
