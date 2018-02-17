import * as p5 from 'p5';

export default function(numb, val) {
  // plug in Stats
  // var stats = new Stats();
  // stats.setMode( 0 );
  // document.body.appendChild( stats.domElement );

  // plug in dat.GUI
  // window.onload = function() {
  // var gui = new dat.GUI();
  // gui.add(window, 'radius', 10, 1000);
  // };

  // -----------------------------
  function draw() {
    stats.begin();

    background(0, 100);
    ellipse(x, y, radius, radius);
    x += 5 * Math.cos(t);
    t += 0.1;

    stats.end();
  }
  return console.log(numb, val);
}
