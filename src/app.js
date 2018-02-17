import p5 from 'p5';
// import WebMidi from 'webmidi';
// import initialState from './store';
// import handlePads from './pad/index';
// import handleKnobs from './knob/index';
// // import dimesions from './setup'
// const store = {...initialState};


const sketch = p => {
  let canvas;

  p.setup = () => {
    p.createCanvas(720, 400);
  };

  p.draw = () => {
    p.rect(30, 20, 55, 55);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    // p.image(logo, p.windowWidth/2 - logoWidth/2, p.windowHeight/2 - logoHeight/2);
  };

  p.keyPressed = () => {
    console.log('poppo')
    p.rect(30, 30, 75, 205);
  };

};

new p5(sketch);



// const pad = e => {
//   const numb = e.data[1];
//   return (store.state = {...handlePads(numb, store),});
// };

// const knob = e => {
//   const numb = e.data[1];
//   const val = e.data[2] / 127 * 100;
//   const {set} = store.state;
//   return handleKnobs(numb, val, set);
// };

// WebMidi.enable(err => {
//   try {
//     var input = WebMidi.getInputByName('LPD8');
//     input.addListener('noteon', 'all', pad);
//     input.addListener('controlchange', 'all', knob);
//   } catch (err) {
//     console.log('WebMidi could not be enabled.', err);
//   }
// });
