import p5 from 'p5';
import WebMidi from 'webmidi';
import initialState from './store';
import handlePads from './handlePads';
import handleKnobs from './handleKnobs';

const store = {...initialState};

const sketch = p => {
  let canvas;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(220)
  };
  
  p.draw = () => {
    switch(store.set) {
      case 1: 
        return 
    }
    const { one, two, three, four, five, six, seven, eight} = store.vals
    p.background(220)
    p.rect( one * 3, two * 3, three * 3, four * 3);
    p.fill(five * 3, six * 3, seven * 3)
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {};

  const pad = e => {
    const numb = e.data[1];
    return (store.state = {...handlePads(numb, store)});
  };
  
  const knob = e => {
    const numb = e.data[1];
    const val = e.data[2] / 127 * 100;
    return (store.vals = {...handleKnobs(numb, val, store)});
  };
  
  WebMidi.enable(err => {
    try {
      const input = WebMidi.getInputByName('LPD8');
      input.addListener('noteon', 'all', pad);
      input.addListener('controlchange', 'all', knob);
    } catch (err) {
      console.log('WebMidi could not be enabled.', err);
    }
  });
};

new p5(sketch);