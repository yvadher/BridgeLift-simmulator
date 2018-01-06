import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

//Import components
import River from './components/river';
import Boat from './components/boat';
import Bridge from './components/bridge';
import Road from './components/road';
import Car from './components/car';

//Constants 
import * as constants from "./constants";


// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = 1000;
  const canvasHeight = 700;

  // make library globally available
  window.p5 = p5;
  window.emergency = false;
  window.bridgeOpen = false;

  window.bridgeCarSignal = false;

  window.T1Passed = false;
  window.T2Passed = false;
  window.T3Passed = false;

  window.B1Passed = false;
  window.B3Passed = false;


  //All golbal objects var
  var river = new River();
  var boat = new Boat();
  var bridge = new Bridge();
  var road = new Road();
  var carRight = new Car('right');
  var carLeft = new Car('left');
  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    p5.frameRate(10);

    // Your stuff goes in here
    p5.background(constants.riverColor);
    river.show();
   
  }

  // Draw function
  p5.draw = () => {
    p5.background(constants.riverColor);
    river.show();

    road.show();
    
    bridge.update();
    bridge.show();

    boat.update();
    boat.show();  
    
    carRight.show();
    carRight.update();

    carLeft.show();
    carLeft.update();
    
  }
}

export default sketch;
