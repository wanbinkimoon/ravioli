import Composition from './composition';

let orbit = 0;
let revolution = 0;

export default function(p, vals, mic) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;

  const soundVal = parseInt((mic.getLevel() * 500), 10);

  const color = {
    red: soundVal,
    green: soundVal * 2,
    blue: 40,
    alphaBg: FIVE / 200,
    alphaFg: SIX / 200,
  };

  const bgColor = `rgba(
    ${color.red},
    ${color.green}, 
    ${color.blue}, 
    ${color.alphaBg})`;

  const fillColor = `rgba(
    ${color.red},
    ${color.green}, 
    ${color.blue}, 
    ${color.alphaFg})`;

  p.translate(p.width / 2, p.height / 2);
  p.background(bgColor);
  p.angleMode(p.DEGREES);

  console.log(bgColor);

  p.rotate(orbit);
  orbit += EIGHT / 100;
  revolution += SEVEN / 100;
  p.stroke(255);
  p.fill(fillColor);

  const els = Math.max(parseInt(THREE / 12.5, 10), 1);
  // const els = 3;
  const innerAngle = 360 / els;
  const side = ONE * 4;
  const radius = Math.min(TWO * 10, p.width / 2, p.height / 2);

  p.rotate(orbit);
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
