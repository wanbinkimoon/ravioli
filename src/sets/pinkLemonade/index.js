import Composition from './composition';
import colors from './colors'

let ease = 0.05;

export default function(p, vals, micVol, micAmp) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB);
  p.noFill();
  p.angleMode(p.DEGREES);

  console.log(colors)

  p.background(
    colors[0].H,
    colors[0].S,
    colors[0].B
  );

  const micVolNormalizer = micVol.getLevel() * 100;
  const easedSound = micVolNormalizer * ease;

  const radiusDefault = ONE * 10;
  const els = 5;

  const originX = THREE - 50
  const originY = FOUR - 50
  const spaceX = SEVEN - 50
  const spaceY = EIGHT - 50
  
  const applyEffect = easedSound * FIVE * 2

  let position = {
    x: originX - spaceX,
    y: originY - spaceY,
  };
  
  let radius = radiusDefault;
  let i = 1;
  do {

    p.strokeWeight(8);
    p.stroke(0)
    p.fill(
      colors[i].H,
      colors[i].S,
      colors[i].B
    );

    const item = new Composition(p, position, radius);
    item.draw;
    
    position = {
      x: position.x - spaceX,
      y: position.y - spaceY,
    };

    radius = radius - (radiusDefault / els) + (applyEffect * i)

    i += 1;
  } while (i <= els);
}