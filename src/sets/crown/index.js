import Composition from './composition';

let orbit = 0;
let revolution = 0;
export default function(p, vals) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.background(`rgba(0, 0, 0, ${FIVE / 200})`);

  p.rotate(orbit);
  orbit += EIGHT / 10000;
  revolution += SEVEN / 10000;
  p.stroke(255);
  p.fill(0);

  const els = Math.max(parseInt(THREE / 12.5, 10), 1);
  const innerAngle = 360 / els;
  const side = ONE * 4;
  const radius = TWO
  
  console.log(revolution)
  const crown = new Composition(p, side, radius, innerAngle, revolution)
    crown.draw
}
