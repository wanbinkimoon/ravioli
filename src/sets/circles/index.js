import Composition from './composition';

let ease = 0.05;
let orbit = 0 

export default function(p, vals, micVol, micAmp) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB);
  p.noFill();
  p.angleMode(p.DEGREES);

  p.background(27, 67, 87);

  const micVolNormalizer = micVol.getLevel() * 100;
  const easedSound = micVolNormalizer * ease;

  const radiusDefault = ONE;
  const distance = TWO + easedSound;
  const els = THREE;
  const width = FOUR / 10;
  const colorHue = 342 - FIVE;
  const spaceX = SIX * 2
  const spaceY = SEVEN * 2
  const acc = EIGHT / 10

  orbit += acc
  p.rotate(orbit)

  const position = {
    x: 0,
    y: 0 - spaceY,
  };
  
  const positionTwo = {
    x: 0,
    y: 0 + spaceY,
  };
  
  const positionThree = {
    x: 0 - spaceX,
    y: 0,
  };
  
  const positionFour = {
    x: 0 + spaceX,
    y: 0,
  };
  
  p.strokeWeight(width * easedSound);
  p.noFill();
  
  let radius = radiusDefault;

  let i = 1;
  do {
    p.stroke(colorHue, 30, 100);

    const item = new Composition(p, position, radius);
    item.draw;
    
    const itemTwo = new Composition(p, positionTwo, radius);
    itemTwo.draw;
    
    const itemThree = new Composition(p, positionThree, radius);
    itemThree.draw;
    
    const itemFour = new Composition(p, positionFour, radius);
    itemFour.draw;
    
    radius = radius + distance;
    i += 1;
  } while (i <= els);
}
