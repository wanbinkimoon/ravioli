import Composition from './composition';

let orbit = 0;
let revolution = 0;
export default function(p, vals) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.background(`rgba(0, 0, 0, ${FIVE / 200})`);
  p.angleMode(p.DEGREES);

  p.rotate(orbit);
  orbit += EIGHT / 100;
  revolution += SEVEN / 100;
  p.stroke(255);
  p.fill(`rgba(0, 0, 0, ${SIX / 200})`);

  const els = Math.max(parseInt(THREE / 12.5, 10), 1);
  // const els = 3;
  const innerAngle = 360 / els;
  const side = ONE * 4;
  const radius = Math.min((TWO * 10), p.width / 2, p.height / 2 );

  p.rotate(orbit)
  let i = 0;
  do {
    const assignAngle = innerAngle * (i - 1);
    const crown = new Composition(p, side, radius, assignAngle, revolution);
    if (i !== 0) {
      crown.draw;
    }
    i += 1;
  } while (i <= els);
  // debugger;
}
