import * as constants from '../constants';
import dashLine from '../Methods/dashedLine';
import { roadColor, leftRoad } from '../constants';

const width = constants.width;
const height = constants.height;

const top = 0.43;
const bottom = 0.58;

export default class road{
    constructor(){
        this.startLeft = { x: 0, y: height*top};
        this.endLeft= { x: (width/2 - (width*0.1)), y :  height*top};

        this.startRight = { x: (width/2 + (width*0.1)), y: height*top };
        this.endRight = { x: width, y: height*top};
    }

    show(){
        p5.fill(roadColor);
        p5.stroke('black');
        p5.strokeWeight(1);
        p5.rect(this.startLeft.x, this.startLeft.y, width*leftRoad , (height*bottom - height*top));
        p5.rect(this.startRight.x, this.startRight.y, width*leftRoad , (height*bottom - height*top));
        
        p5.strokeWeight(3);
        p5.stroke('white');

        var line = new dashLine(this.startLeft.x, height/2 + 3, this.endLeft.x, height/2 + 3, 10,5);
        line.show();

        var line = new dashLine(this.startRight.x, height/2 + 3, this.endRight.x, height/2 + 3, 10,5);
        line.show();
        p5.stroke('Black');
        p5.strokeWeight(1);
    }

}