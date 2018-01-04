import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  // make library globally available
  window.p5 = p5;

  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);

    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background("yellow");
    p5.ellipse(50, 50, 80, 80);
  }
}

export default sketch;
