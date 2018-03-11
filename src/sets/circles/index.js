import Composition from './composition';

let orbit = 0;

export default function(p, vals) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB)
  p.background(0,0,100);
  p.strokeWeight(4);
  p.noFill();
  p.angleMode(p.DEGREES);
  p.stroke(p.random(360), 70, 100)
  
  p.rotate(orbit);
  orbit += EIGHT / 100;
  
  const distance = THREE;
  const els = TWO;
  const radiusDefault = ONE *4;
  let radius = radiusDefault;
  
  p.stroke(0);
  p.strokeWeight(8);
  p.noFill();

  p.rotate(orbit);
  const position = {
    x: 0,
    y: 0,
  };

  let i = 1
  do {
    const item = new Composition(p, position, radius);
    item.draw;
    console.log(radius)
    radius = radius - radiusDefault / els;
    i += 1;
  }
  while (i <= TWO);
  // debugger;
}
