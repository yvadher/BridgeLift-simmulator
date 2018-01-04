import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

import River from './components/river';


//Constants 
//import * as constants from "./constants";



// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = 1000;
  const canvasHeight = 800;

  // make library globally available
  window.p5 = p5;


  //All golbal objects var
  var river = new River();

  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);

    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background("yellow");
    river.show();
  }
}

export default sketch;
