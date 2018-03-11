import Composition from './composition';

let orbit = 0;
let revolution = 0;

export default function(p, vals, mic) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  // p.colorMode(p.HSB)
  const soundVal = mic.getLevel() * 100000;
  p.smooth(.9)
  const color = {
    red: soundVal / 5,
    green: 125,
    blue: 125,
    alphaBg: FIVE,
    alphaFg: SIX,
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
  
  const scaleVal = soundVal / (FOUR * 10)
  console.log(scaleVal)
  p.translate(p.width / 2, p.height / 2);
  p.background(color.red, color.green, color.blue, color.alphaBg);
  p.angleMode(p.DEGREES);
  p.rotate(orbit);
  orbit += EIGHT / 100;
  revolution += SEVEN / 100;
  p.stroke('white');
  p.fill(fillColor);
  p.scale(scaleVal);
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
