export default function(p, vals) {
  const { one, two, three, four, five, six, seven, eight } = vals
  p.background('rgba(0,0,0, 0.25)')
  p.translate(p.width / 2, p.height / 2);
  p.rotate(eight)
  p.noStroke(255)
  p.rect( one * 3, two * 3, three * 3, four * 3);
}
