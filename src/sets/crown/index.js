import Composition from './composition';

let angle = 0;

export default function(p, vals) {
  const {one, two, three, four, five, six, seven, eight} = vals;

  p.translate(p.width / 2, p.height / 2);
  p.background(`rgba(0, 0, 0, ${seven / 200})`);

  p.rotate(angle);
  angle += eight / 10000;
  p.stroke(255);
  p.fill(0);

  const els = parseInt(three / 12.5, 10);
  const innerAngle = 360 / els;
  const side = one * 4;
  const radius = two * 4

  console.log(innerAngle)
  const crown = new Composition(p, side, radius, innerAngle)
    crown.draw
}
