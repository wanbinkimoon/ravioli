export default function(p, vals) {
  const { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT } = vals
  p.background('rgba(0,0,0, 0.25)')
  p.translate(p.width / 2, p.height / 2);
  p.rotate(EIGHT)
  p.noStroke(255)
  p.rect( ONE * 3, TWO * 3, THREE * 3, FOUR * 3);
}
