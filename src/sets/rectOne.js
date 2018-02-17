export default function(p, vals) {
  const { one, two, three, four, five, six, seven, eight } = vals
  p.background('rgba(220,220,220, 0.25)')
  p.translate(p.width / 2, p.height / 2);
  p.rotate(eight)
  p.noStroke()
  p.rect( one * 3, two * 3, three * 3, four * 3);
  p.fill(five * 3, six * 3, seven * 3)
}
