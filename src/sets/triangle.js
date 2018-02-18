let angle = 0;

export default function(p, vals) {
  const { one, two, three, four, five, six, seven, eight } = vals
  const point = {
    x1:0, 
    y1:0, 
    x2:0, 
    y2:0, 
    x3:0, 
    y3:0, 
  }
  p.background(0)
  p.translate(p.width / 2, p.height / 2);
  p.rotate(angle)
  angle += eight / 10000
  p.stroke(255)
  p.triangle(point.x1, point.y1, point.x2, point.y2, point.x3, point.y3);
}
