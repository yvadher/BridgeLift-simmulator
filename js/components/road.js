import * as constants from '../constants';
import dashLine from '../Methods/dashedLine';
import { roadColor, leftRoad } from '../constants';

const width = constants.width;
const height = constants.height;

const top = 0.43;
const bottom = 0.58;

const yellowLineSpacing = 45;
const yellowLineStrokWeight = 3;


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

        p5.stroke('#FEFE00');
        //Top yellow line  (LEFT SIDE)
        p5.line(this.startLeft.x, height/2 - yellowLineSpacing+ yellowLineStrokWeight, this.endLeft.x, height/2 - yellowLineSpacing + yellowLineStrokWeight);
        //Bottom yellow line (LEFT SIDE)
        p5.line(this.startLeft.x, height/2 + yellowLineSpacing +yellowLineStrokWeight , this.endLeft.x, height/2 + yellowLineSpacing);
        
        //Right side 
        //Top Yellow line
        p5.line(this.startRight.x, height/2 - yellowLineSpacing + yellowLineStrokWeight, this.endRight.x, height/2 - yellowLineSpacing +yellowLineStrokWeight);
        p5.line(this.startRight.x, height/2 + yellowLineSpacing + yellowLineStrokWeight, this.endRight.x, height/2 + yellowLineSpacing + yellowLineStrokWeight);

        
        p5.strokeWeight(4);

        if (bridgeCarSignal){
            p5.stroke('red');
        }else {
            p5.stroke('green');
        }
        
        //vertical signal line
        p5.line(this.endLeft.x - 20 , height*top, this.endLeft.x - 20, height*bottom);
        p5.line(this.startRight.x + 20 , height*top, this.startRight.x + 20, height*bottom);

        
        p5.stroke('black');
        p5.strokeWeight(1);


        //road Piller 1 
        piller(width*0.1);
        piller(width*0.3);
        piller(width*0.7);
        piller(width*0.9);

    }

}

//Make a piller at perticular point
function piller(strPiller){
    p5.fill('#404040');
    p5.beginShape();
    p5.vertex(strPiller , height*bottom);
    p5.vertex(strPiller + 15, height*bottom + 30);
    p5.vertex(strPiller + 15, height*bottom + 60);
    p5.vertex(strPiller + 35, height*bottom + 60);
    p5.vertex(strPiller + 35, height*bottom + 30);
    p5.vertex(strPiller + 50 , height*bottom);
    p5.endShape(p5.CLOSE);
}