import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

import WebMidi from 'webmidi';
import initialState from './store';
import handlePads from './handlePads';
import handleKnobs from './handleKnobs';

import rectONE from './sets/rectONE';
import triangle from './sets/triangle';
import crown from './sets/crown/index';
import crownDance from './sets/crownDance/index';
import circles from './sets/circles/index';
import pinkLemonade from './sets/pinkLemonade/index';
import lines from './sets/lines/index';

const store = {...initialState};


const sketch = p => {
  let canvas;
  let micVol = new p5.AudioIn();
  let micAmp = new p5.Amplitude();

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    micVol.start();
  };

  p.draw = () => {
    const sets = () => {
      switch (store.state.set) {
        case 1:
          return rectONE(p, store.vals);
        case 2:
          return triangle(p, store.vals);
        case 3:
          return crown(p, store.vals);
        case 4:
          return crownDance(p, store.vals, micVol);
        case 5:
          return circles(p, store.vals, micVol, micAmp);
        case 6:
          return pinkLemonade(p, store.vals, micVol, micAmp);
        case 7:
          return lines(p, store.vals, micVol, micAmp);

        default:
          return console.log('default');
      }
    };
    sets();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {};

  const pad = e => {
    // console.log(e)
    const numb = e.data[1];
    return (store.state = {...handlePads(numb, store)});
  };

  const knob = e => {
    // console.log(e)
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
