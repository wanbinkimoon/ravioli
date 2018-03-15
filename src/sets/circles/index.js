import Composition from './composition';

let ease = 0.05;

export default function(p, vals, micVol, micAmp) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB);
  p.noFill();
  p.angleMode(p.DEGREES);

  p.background(0, 0, 0);

  const micVolNormalizer = micVol.getLevel() * 100;
  const easedSound = micVolNormalizer * ease;

  const radiusDefault = ONE;
  const distance = TWO + easedSound;
  const els = THREE;
  const width = FOUR / 10;
  const colorHue = easedSound * FIVE;
  const spaceX = SIX
  const spaceY = SEVEN
  
  const position = {
    x: 0 - spaceX,
    y: 0 - spaceY,
  };
  
  const positionTwo = {
    x: 0 + spaceX,
    y: 0 + spaceY,
  };
  
  p.strokeWeight(width);
  p.noFill();
  
  let radius = radiusDefault;

  let i = 1;
  do {
    p.stroke(colorHue, 70, 100);

    const item = new Composition(p, position, radius);
    item.draw;
    
    const itemTwo = new Composition(p, positionTwo, radius);
    itemTwo.draw;
    
    radius = radius + distance;
    i += 1;
  } while (i <= els);
}
