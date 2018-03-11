import Composition from './composition';

let orbit = 0;

export default function(p, vals, micVol, micAmp) {
  const {ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT} = vals;
  p.translate(p.width / 2, p.height / 2);
  p.colorMode(p.HSB)
  p.background(0,0,FIVE);
  p.noFill();
  p.angleMode(p.DEGREES);

  p.rotate(orbit);
  orbit += EIGHT / 100;
  
  const micVolNormalizer = micVol.getLevel() * 10000
  
  const distance = THREE;
  const els = micVolNormalizer;
  const radiusDefault = (ONE * 10) + micVolNormalizer;
  let radius = radiusDefault;
  
  console.log(micVolNormalizer, els)

  const position = {
    x: 0,
    y: 0,
  };

  p.rotate(orbit);
  
  p.strokeWeight(4);
  p.noFill();

  const colorHue = p.random(360)
  

  let i = 1
  do {
    const item = new Composition(p, position, radius);
    p.stroke(micVolNormalizer, 70, 100)

    item.draw;
    radius = radius - radiusDefault / els;

    i += 1;
  }
  while (i <= TWO);
  // debugger;
}
