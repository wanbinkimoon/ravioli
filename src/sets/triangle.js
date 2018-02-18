let angle = 0;

export default function(p, vals) {
  const { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT } = vals
  
  const side = ONE * 10 
  const point = {
    x1: 0, 
    y1: Math.sqrt(3) / 3 * side * - 1, 
    x2: side / 2  * -1 , 
    y2: Math.sqrt(3) / 6 * side, 
    x3: side / 2, 
    y3: Math.sqrt(3) / 6 * side, 
  }
  p.background(`rgba(0, 0, 0, ${SEVEN / 200})`)

  p.translate(p.width / 2, p.height / 2);
  p.rotate(angle)
  angle += EIGHT / 10000
  p.stroke(255)
  p.fill(0)
  p.triangle(point.x1, point.y1, point.x2, point.y2, point.x3, point.y3);
}
 