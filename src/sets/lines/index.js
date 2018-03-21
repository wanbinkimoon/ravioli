import Composition from './composition';

let bounce = 1;
let ease = 0.03;
const acc = v => {
  return v;
};
let speed = 1;

export default function(p, vals, micVol, micAmp) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB);
  p.noFill();
  p.angleMode(p.DEGREES);

  const micVolNormalizer = micVol.getLevel() * 100;
  const easedSound = micVolNormalizer * ease;

  const radiusDefault = ONE;
  const distance = TWO;
  const els = THREE;
  const width = FOUR / 10;
  const circleHue = 94;
  const arc = SIX / 10;
  const accVal = SEVEN / 100
  const strokeEase = EIGHT / 100;
  const computedAcc = acc(accVal)

  p.background(105, 73, 35);
  
  if (bounce < -arc) {
    speed = speed + (computedAcc * easedSound);
  } else if (bounce > arc) {
    speed = speed - (computedAcc * easedSound);
  }

  bounce = bounce + (speed * ease);

  const position = {
    x: 0,
    y: 0,
  };

  p.noFill();

  let radius = radiusDefault;

  let i = 1;
  do {
    p.stroke(circleHue, 46, 100);
    p.strokeWeight(width - i * strokeEase);

    const item = new Composition(p, position, radius);
    item.draw;
    radius = radius + distance + bounce + easedSound;
    i += 1;
  } while (i <= els);
}
